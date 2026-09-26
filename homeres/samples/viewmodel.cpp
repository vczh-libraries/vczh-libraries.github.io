class HelloViewModel : public Object, public virtual IHelloViewModel
{
private:
    WString name = L"world";
    WString welcome = L"Hello, world!";

public:
    WString GetName() override
    {
        return name;
    }

    void SetName(const WString& value) override
    {
        if (name != value)
        {
            name = value;
            welcome = L"Hello, " + name + L"!";
            NameChanged();
            WelcomeChanged();
        }
    }

    WString GetWelcome() override
    {
        return welcome;
    }
};
