class HelloViewModel
{
    static func Create(): IHelloViewModel^
    {
        return new (IHelloViewModel^)
        {
            var name: string = "world";
            var welcome: string = "Hello, world!";

            override func GetName(): string
            {
                return name;
            }

            override func SetName(value: string): void
            {
                if (name != value)
                {
                    name = value;
                    welcome = $"Hello, $(name)!";
                    NameChanged();
                    WelcomeChanged();
                }
            }

            override func GetWelcome(): string
            {
                return welcome;
            }
        };
    }
}
