Packages.Define("Doc.Document", ["Class", "XmlHelper", "Html.Razor", "IO.Resource", "IO.Wildcard", "Doc.SymbolTree"], function (__injection__) {
    eval(__injection__);

    /********************************************************************************
    RazorResourceDeserializer
    ********************************************************************************/

    var RazorResourceDeserializer = Class(PQN("RazorResourceDeserializer"), IResourceDeserializer, {
        GetName: Public.Override(function () {
            return "Razor";
        }),

        GetPriorDeserializerName: Public.Override(function () {
            return "Text";
        }),

        Deserialize: Public.Override(function (resource) {
            return CompileRazor(resource, []);
        }),
    });
    RegisterDeserializer(new RazorResourceDeserializer());
    RegisterResource(WildcardToRegExp("*.razor.html"), "Razor");

    /********************************************************************************
    NssResourceDeserializer
    ********************************************************************************/

    var DocNamespaceItem = Struct(PQN("DocNamespaceItem"), {
        Key: "",
        DisplayName: "",
        UrlName: "",
        Doc: false,
    });

    var NssResourceDeserializer = Class(PQN("NssResourceDeserializer"), IResourceDeserializer, {
        GetName: Public.Override(function () {
            return "Nss";
        }),

        GetPriorDeserializerName: Public.Override(function () {
            return "Xml";
        }),

        Deserialize: Public.Override(function (resource) {
            var list = [];
            var map = {};
            var nsUrlKeyMap = {};
            var nsXmls = GetDirectXmlChild(resource.firstChild, "Namespace");
            for (var i = 0; i < nsXmls.length; i++) {
                var nsXml = nsXmls[i];
                var item = new DocNamespaceItem(
                    nsXml.getAttribute("Key"),
                    nsXml.getAttribute("DisplayName"),
                    nsXml.getAttribute("UrlName"),
                    nsXml.getAttribute("Doc") === "true"
                    );
                list.push(item);
                map[item.Key] = item;
                nsUrlKeyMap[item.UrlName] = item.Key;
            }
            return { list: list, map: map, nsUrlKeyMap: nsUrlKeyMap };
        }),
    });
    RegisterDeserializer(new NssResourceDeserializer());
    RegisterResource(WildcardToRegExp("nss.xml"), "Nss");

    /********************************************************************************
    NsResourceDeserializer
    ********************************************************************************/

    var NsResourceDeserializer = Class(PQN("NsResourceDeserializer"), IResourceDeserializer, {
        GetName: Public.Override(function () {
            return "Ns";
        }),

        GetPriorDeserializerName: Public.Override(function () {
            return "Xml";
        }),

        Deserialize: Public.Override(function (resource) {
            var names = [];
            var map = {};
            var overloadsXmls = GetDirectXmlChild(resource.firstChild, "Overloads");
            for (var i = 0; i < overloadsXmls.length; i++) {
                var overloadsXml = overloadsXmls[i];
                var displayName = overloadsXml.getAttribute("DisplayName");

                var items = [];
                names.push(displayName);
                map[displayName] = items;

                var symbolXmls = GetDirectXmlChild(overloadsXml, "Symbol");
                for (var j = 0; j < symbolXmls.length; j++) {
                    var symbolXml = symbolXmls[j];

                    var item = new DocNamespaceItem(
                        symbolXml.getAttribute("Key"),
                        displayName,
                        symbolXml.getAttribute("UrlName"),
                        symbolXml.getAttribute("Doc") === "true"
                        );
                    items.push(item);
                }
            }
            return { names: names, map: map };
        }),
    });
    RegisterDeserializer(new NsResourceDeserializer());
    RegisterResource(WildcardToRegExp("ns(*).xml"), "Ns");

    /********************************************************************************
    TreeResourceDeserializer
    ********************************************************************************/

    var DocSymbolTreeItem = Class(PQN("DocSymbolTreeItem"), {
        Tags: Public(null),
        Key: Public(""),
        DisplayName: Public(""),
        Doc: Public(false),
        ChildNames: Public(null),
        Children: Public(null),
    });

    var TreeResourceDeserializer = Class(PQN("TreeResourceDeserializer"), IResourceDeserializer, {
        GetName: Public.Override(function () {
            return "Tree";
        }),

        GetPriorDeserializerName: Public.Override(function () {
            return "Xml";
        }),

        CreateSymbol: Private(function (symbolXml) {
            var item = new DocSymbolTreeItem();
            item.Tags = symbolXml.getAttribute("Tags").split(";");
            item.Key = symbolXml.getAttribute("Key");
            item.DisplayName = symbolXml.getAttribute("DisplayName");
            item.Doc = symbolXml.getAttribute("Doc") === "true";
            item.ChildNames = [];
            item.Children = {};

            for (var i = 0; i < symbolXml.childNodes.length; i++) {
                var childXml = symbolXml.childNodes[i];
                switch (childXml.tagName) {
                    case "Symbol":
                        var childItem = this.CreateSymbol(childXml);
                        item.ChildNames.push(childItem.DisplayName);
                        item.Children[childItem.DisplayName] = [childItem];
                        break;
                    case "Overloads":
                        var displayName = childXml.getAttribute("DisplayName");
                        item.ChildNames.push(displayName);
                        var overloadItems = [];
                        item.Children[displayName] = overloadItems;

                        var childSymbolXmls = GetDirectXmlChild(childXml, "Symbol");
                        for (var j = 0; j < childSymbolXmls.length; j++) {
                            var childSymbolXml = childSymbolXmls[j];
                            overloadItems.push(this.CreateSymbol(childSymbolXml));
                        }
                        break;
                }
            }

            return item;
        }),

        Deserialize: Public.Override(function (resource) {
            var tree = {};
            var overloadingSymbolTrees = GetDirectXmlChild(resource.firstChild, "OverloadingSymbolTree");
            for (var i = 0; i < overloadingSymbolTrees.length; i++) {
                var overloadingSymbolTreeXml = overloadingSymbolTrees[i];
                var urlName = overloadingSymbolTreeXml.getAttribute("Key");
                var symbolTreeXml = GetDirectXmlChild(overloadingSymbolTreeXml, "SymbolTree")[0];

                var ns = symbolTreeXml.getAttribute("NamespaceUrlName");
                var parentMapping = {};
                var mapXmls = GetDirectXmlChild(GetDirectXmlChild(symbolTreeXml, "SymbolParentMapping")[0], "Map");
                for (var j = 0; j < mapXmls.length; j++) {
                    var mapXml = mapXmls[j];
                    parentMapping[mapXml.getAttribute("From")] = mapXml.getAttribute("To");
                }

                var rootItem = this.CreateSymbol(GetDirectXmlChild(symbolTreeXml, "Symbol")[0]);
                tree[urlName] = { parentMapping: parentMapping, rootItem: rootItem, namespaceUrlName: ns };
            }
            return tree;
        }),
    });
    RegisterDeserializer(new TreeResourceDeserializer());
    RegisterResource(WildcardToRegExp("t(*).xml"), "Tree");

    /********************************************************************************
    SymbolResourceDeserializer
    ********************************************************************************/

    var SymbolResourceDeserializer = Class(PQN("SymbolResourceDeserializer"), IResourceDeserializer, {
        GetName: Public.Override(function () {
            return "Symbol";
        }),

        GetPriorDeserializerName: Public.Override(function () {
            return "Xml";
        }),

        Deserialize: Public.Override(function (resource) {
            var symbol = {};
            var symbols = GetDirectXmlChild(resource.firstChild, "Symbols");
            for (var i = 0; i < symbols.length; i++) {
                var symbolsXml = symbols[i];
                var urlName = symbolsXml.getAttribute("Key");
                symbol[urlName] = GetDirectXmlChild(symbolsXml).
                    filter(function (xml) { return xml.tagName !== undefined; }).
                    map(LoadSymbol);
            }
            return symbol;
        }),
    });
    RegisterDeserializer(new SymbolResourceDeserializer());
    RegisterResource(WildcardToRegExp("s(*).xml"), "Symbol");

    /********************************************************************************
    GetUrlNameForKey
    ********************************************************************************/

    var charCode_a = "a".charCodeAt(0);
    var charCode_z = "z".charCodeAt(0);
    var charCode_A = "A".charCodeAt(0);
    var charCode_Z = "Z".charCodeAt(0);
    var charCode_0 = "0".charCodeAt(0);
    var charCode_9 = "9".charCodeAt(0);

    function GetUrlNameForKey(key) {
        var length = 0;
        while(length < key.length) {
            var char = key[length];
            var code = key.charCodeAt(length);
            if (charCode_a <= code && code <= charCode_z || charCode_A <= code && code <= charCode_Z || charCode_0 <= code && code <= charCode_9 || char == '.' || char == '`' || char == '_') {
                length++;
            }
            else {
                break;
            }
        }
        return key.substring(0, length);
    }

    /********************************************************************************
    Package
    ********************************************************************************/

    return {
        DocNamespaceItem: DocNamespaceItem,
        DocSymbolTreeItem: DocSymbolTreeItem,
        GetUrlNameForKey: GetUrlNameForKey,
    }
})