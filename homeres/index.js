const byId = (id) => document.getElementById(id);
const clone = (id) => byId(id).content.cloneNode(true);

function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
}

function link(data, className) {
    const node = element('a', data.label, className);
    setLink(node, data.href);
    return node;
}

function setLink(node, href) {
    node.href = href;
    if (node.hostname === 'github.com' || node.hostname.endsWith('.github.com')) {
        node.target = '_blank';
        node.rel = 'noopener';
    }
}

function lazyImage(data, className) {
    const img = element('img', undefined, className);
    img.alt = data.alt;
    img.width = data.width;
    img.height = data.height;
    img.decoding = 'async';
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                img.src = data.src;
                observer.disconnect();
            }
        });
        observer.observe(img);
    } else {
        img.src = data.src;
    }
    return img;
}

// Tabs keep their panels and already-loaded images mounted.
function tabs(list, select, initial, prefix) {
    const buttons = [...list.querySelectorAll(':scope > [role="tab"]')];
    const activate = (button, focus = false) => {
        for (const item of buttons) {
            const active = item === button;
            item.setAttribute('aria-selected', String(active));
            item.tabIndex = active ? 0 : -1;
        }
        if (focus) button.focus();
        select(button.dataset.tab);
    };
    for (const button of buttons) {
        if (prefix) {
            button.id = `${prefix}-tab-${button.dataset.tab}`;
            button.setAttribute('aria-controls', `${prefix}-${button.dataset.tab}`);
        }
        button.addEventListener('click', () => activate(button));
        button.addEventListener('keydown', (event) => {
            const vertical = list.getAttribute('aria-orientation') === 'vertical';
            const previous = vertical ? 'ArrowUp' : 'ArrowLeft';
            const next = vertical ? 'ArrowDown' : 'ArrowRight';
            let index = buttons.indexOf(button);
            if (event.key === previous) index = (index + buttons.length - 1) % buttons.length;
            else if (event.key === next) index = (index + 1) % buttons.length;
            else if (event.key === 'Home') index = 0;
            else if (event.key === 'End') index = buttons.length - 1;
            else return;
            event.preventDefault();
            activate(buttons[index], true);
        });
    }
    activate(buttons.find((button) => button.dataset.tab === initial) ?? buttons[0]);
}

function fields(root, data) {
    for (const node of root.querySelectorAll('[data-field]')) {
        const value = data[node.dataset.field];
        if (typeof value === 'string') node.textContent = value;
        else if (value) {
            node.textContent = value.label;
            setLink(node, value.href);
        }
    }
}

function renderExamples(data) {
    const built = new Set();
    tabs(document.querySelector('.example-tabs'), (id) => {
        for (const key of Object.keys(data)) byId(`example-${key}`).hidden = key !== id;
        if (built.has(id)) return;
        const example = data[id];
        const panel = byId(`example-${id}`);
        panel.append(clone('example-template'));
        fields(panel, example);
        const options = panel.querySelector('.source-options');
        const sourceCode = panel.querySelector('pre');
        sourceCode.id = `example-${id}-source`;
        const showSource = (source) => {
            sourceCode.querySelector('code').textContent = source.code;
            sourceCode.setAttribute('aria-label', source.label);
        };
        for (const [index, source] of example.sources.entries()) {
            const label = element('label');
            const radio = element('input', undefined, 'sr-only');
            radio.type = 'radio';
            radio.name = `example-${id}-source`;
            radio.value = source.id;
            radio.checked = index === 0;
            radio.setAttribute('aria-label', source.label);
            radio.setAttribute('aria-controls', sourceCode.id);
            radio.addEventListener('change', () => {
                if (radio.checked) showSource(source);
            });
            label.append(radio, element('span', source.label));
            options.append(label);
        }
        showSource(example.sources[0]);
        const stage = panel.querySelector('.preview-stage');
        stage.append(lazyImage(example.snapshot, 'sample-snapshot'));
        built.add(id);
    }, 'hello');
}

function renderPlatforms(platforms, labels) {
    const built = new Map();
    let visible = false;
    let selected = 'windows';

    function buildPlatform(id) {
        if (built.has(id)) {
            built.get(id)();
            return;
        }
        const data = platforms.find((platform) => platform.id === id);
        const panel = byId(`platform-${id}`);
        panel.append(clone('gallery-template'));
        panel.querySelector('.platform-info p').textContent = data.description;
        const source = panel.querySelector('.platform-info a');
        source.textContent = data.link.label;
        setLink(source, data.link.href);
        const modeList = panel.querySelector('.mode-tabs');
        const gallery = panel.querySelector('.gallery-body');
        const modes = new Map();
        let selectedMode = data.modes[0].id;
        for (const mode of data.modes) {
            const group = element('div', undefined, 'theme-gallery');
            group.id = `${id}-mode-${mode.id}`;
            group.setAttribute('role', 'tabpanel');
            group.setAttribute('aria-labelledby', id === 'html5' ? 'tab-html5' : `${id}-mode-tab-${mode.id}`);
            group.hidden = true;
            gallery.append(group);
        }

        function showMode(modeId) {
            selectedMode = modeId;
            for (const child of gallery.children) child.hidden = child.id !== `${id}-mode-${modeId}`;
            if (modes.has(modeId)) {
                modes.get(modeId)();
                return;
            }
            const mode = data.modes.find((item) => item.id === modeId);
            const group = byId(`${id}-mode-${modeId}`);
            group.append(clone(`${id === 'html5' ? 'html5' : modeId}-themes-template`));
            const pictures = element('div', undefined, 'screenshot-panels');
            group.append(pictures);
            let selectedTheme = mode.themes[0].id;
            const loaded = new Set();
            // Empty panels make every aria-controls target valid without requesting images.
            for (const theme of mode.themes) {
                const picture = element('figure', undefined, 'screenshot');
                picture.id = `${id}-${modeId}-${theme.id}`;
                picture.setAttribute('role', 'tabpanel');
                picture.setAttribute('aria-labelledby', `${id}-${modeId}-tab-${theme.id}`);
                picture.hidden = true;
                pictures.append(picture);
            }
            const showTheme = (themeId) => {
                selectedTheme = themeId;
                for (const child of pictures.children) child.hidden = child.id !== `${id}-${modeId}-${themeId}`;
                if (!visible || loaded.has(themeId)) return;
                const theme = mode.themes.find((item) => item.id === themeId);
                const picture = byId(`${id}-${modeId}-${themeId}`);
                const fullSize = link({ href: theme.src });
                fullSize.target = '_blank';
                fullSize.rel = 'noopener';
                fullSize.setAttribute('aria-label', `${labels.openImage}: ${theme.alt}`);
                const img = element('img');
                img.alt = theme.alt;
                img.width = theme.width;
                img.height = theme.height;
                img.decoding = 'async';
                // Assign src exactly once. Hidden tabs retain their image nodes for this page's lifetime.
                img.src = theme.src;
                fullSize.append(img);
                picture.append(fullSize);
                loaded.add(themeId);
            };
            modes.set(modeId, () => showTheme(selectedTheme));
            tabs(group.querySelector('.theme-tabs'), showTheme, selectedTheme, `${id}-${modeId}`);
        }
        built.set(id, () => showMode(selectedMode));
        if (id === 'html5') {
            modeList.remove();
            showMode(selectedMode);
        } else {
            // Mode panels are created once, on their first selection.
            tabs(modeList, showMode, selectedMode, `${id}-mode`);
        }
    }

    tabs(document.querySelector('.platform-tabs'), (id) => {
        selected = id;
        for (const platform of platforms) byId(`platform-${platform.id}`).hidden = platform.id !== id;
        buildPlatform(id);
    }, selected);

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            visible = entries.some((entry) => entry.isIntersecting);
            if (visible) buildPlatform(selected);
        });
        observer.observe(document.querySelector('.platform-workbench'));
    } else {
        visible = true;
        buildPlatform(selected);
    }
}

function render(data) {
    document.title = data.title;
    byId('brand-logo').src = data.logo.src;
    byId('brand-logo').alt = data.logo.alt;
    for (const item of data.navigation) byId('navigation').append(link(item));
    for (const [key, value] of Object.entries(data.text)) byId(key).textContent = value;
    for (const [index, action] of data.actions.entries()) byId('hero-actions').append(link(action, index === 0 ? 'button primary' : 'button'));
    for (const platform of data.platforms) {
        byId(`tab-${platform.id}`).querySelector('.platform-graphic').append(lazyImage(platform.icon));
    }
    byId('agents-link').append(link(data.agentsLink, 'button'));
    byId('agents-integration-link').append(link(data.agentsIntegrationLink, 'button'));
    for (const item of data.links) {
        const anchor = link({ href: item.href }, 'quick-link');
        const icon = element('span', item.icon, 'link-icon');
        icon.setAttribute('aria-hidden', 'true');
        const body = element('span');
        body.append(element('strong', item.label), element('small', item.description));
        anchor.append(icon, body);
        byId('quick-links').append(anchor);
    }
    for (const [index, feature] of data.features.entries()) {
        const box = element('fieldset', undefined, 'feature');
        const legend = element('legend');
        const number = element('span', String(index + 1).padStart(2, '0'), 'feature-number');
        number.setAttribute('aria-hidden', 'true');
        legend.append(number, feature.title);
        box.append(legend, element('p', feature.description));
        if (feature.code) {
            const code = element('pre');
            code.tabIndex = 0;
            code.append(element('code', feature.code));
            box.append(code);
        }
        box.append(link(feature.link));
        byId('feature-grid').append(box);
    }
    for (const item of data.footerLinks) byId('footer-links').append(link(item));
    renderExamples(data.examples);
    renderPlatforms(data.platforms, data.galleryLabels);
    byId('load-status').hidden = true;
    byId('home-content').hidden = false;
}

try {
    const response = await fetch('/index.json');
    if (!response.ok) throw new Error(`Homepage data: HTTP ${response.status}`);
    render(await response.json());
} catch (error) {
    console.error(error);
    byId('load-status').textContent = 'The introduction could not be loaded. Please reload this page, or open the documentation.';
    byId('load-status').append(' ', link({ label: 'Documentation', href: '/doc/current/home.html' }));
}
