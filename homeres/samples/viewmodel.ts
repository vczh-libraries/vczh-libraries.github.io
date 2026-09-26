class HelloViewModel implements IHelloViewModelLocal {
    private name = 'world';
    private welcome = 'Hello, world!';

    readonly NameChanged = new RpcEvent<[]>();
    readonly WelcomeChanged = new RpcEvent<[]>();

    GetName(): string {
        return this.name;
    }

    async SetName(value: string): Promise<void> {
        if (this.name !== value) {
            this.name = value;
            this.welcome = `Hello, ${this.name}!`;
            await this.NameChanged.emit();
            await this.WelcomeChanged.emit();
        }
    }

    GetWelcome(): string {
        return this.welcome;
    }
}
