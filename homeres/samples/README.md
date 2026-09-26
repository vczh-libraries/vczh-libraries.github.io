# Native homepage samples

`hello.xml`, `binding.xml`, and `viewmodel.xml` are the exact `Instance` resources shown on the homepage. Their PNGs are unmodified captures of GacUI's Windows Direct2D renderer with the default DarkSkin. The additional `ViewModel.xml` source option displays `viewmodel.vm.xml`, the shared interface declaration.

Each example uses one Easy Layout with five-pixel spacing and `Border="false"`. `ClientSize` requests the width and lets minimum-size propagation determine the height. The OK button requests only a minimum width of 72; the skin determines control heights. The hello window measures 320 by 86 pixels; both greeting windows measure 360 by 109 pixels.

Both greeting screenshots were captured after focusing the textbox, selecting its initial `world` text, and typing `GacUI` through GacUI's automation endpoint. The label changed to `Hello, GacUI!`. UI Automation independently verified each textbox and greeting, including a SetValue round trip to `Reader` and back to `GacUI`. The hello dialog's OK event closed its process normally.

`viewmodel.cpp` contains the class used for the view-model capture. The shared `IHelloViewModel` contract in `viewmodel.vm.xml` uses Workflow auto-properties to declare `GetName`/`SetName`, `GetWelcome`, and the corresponding `NameChanged`/`WelcomeChanged` events. `Name` is writable; `Welcome` is read-only. `@rpc:Interface` enables generating the TypeScript RPC contract. The Instance XML receives this interface as a constructor parameter, binds the textbox into `Name`, and observes `Welcome` on the label.

The language alternatives contain only their class definitions; generated bindings, registration, namespaces, and host setup belong to the surrounding application. Include `viewmodel.vm.xml` as a Script resource, for example `<Script name="ViewModelResource" content="File">viewmodel.vm.xml</Script>`. `viewmodel.workflow` uses a static factory to return an interface implementation, following Workflow's `new (IHelloViewModel^)` pattern. Its unchanged class was compiled with a matching Workflow interface in a temporary Playground resource. `viewmodel.ts` follows GacJS's generated local RPC interface and `RpcEvent` API. Only the C++ implementation supplies the committed view-model screenshot.

## Recreating the captures

Use a current `GacUI/Test/GacUISrc/x64/Debug/Playground.exe`, built with the repository's build wrapper. The current Playground loads `Playground/Resources/ResourceUiaReview.xml` relative to the solution layout and instantiates `demo::TestWindow`.

1. Create a temporary folder inside the sibling GacUI checkout containing `x64/Debug/Playground.exe`, copied from that build, plus a copy of `GacUISrc.sln`. The hello and binding samples need the ordinary executable. Prepare a separate executable as described below for the view-model sample.
2. Create `Playground/Resources/ResourceUiaReview.xml` there. Wrap the selected sample in `<Resource><Instance name="MainWindowResource">` and `</Instance></Resource>`.
3. Add a temporary `Playground/Playground.vcxproj.user` with `LocalDebuggerCommandArguments` set to `/AsPort:8987` for `Debug|x64`. Choose a free port if necessary.
4. From the temporary solution folder, run the repository's `copilotExecute.ps1 -Mode CLI -Executable Playground -Configuration Debug -Platform x64`. The default renderer is Direct2D; do not pass `/UiaGdi`.
5. Inspect `http://localhost:8987/Automation/Playground/Controls`. For either greeting sample, POST `!LeftClick:160,68`, `!KeyPress:CTRL+A`, then `!Type:GacUI` to `/Automation/Playground/IO`. The required content type is exactly `application/json; charset=utf8`; PowerShell 7's `Invoke-RestMethod` needs `-SkipHeaderValidation` for this spelling. Confirm the resulting greeting through Controls. Use an MTA UI Automation client for the separate ValuePattern round trip.
6. Capture the actual application HWND with Win32 `PrintWindow` using `PW_RENDERFULLCONTENT` (2) into a window-sized bitmap, then save as PNG. Inspect the pixels and confirm the greeting before replacing the committed image.
7. Close the hello sample with `!LeftClick:276,68`, or send `!Exit` to the same IO endpoint. Wait for the process and its execution wrapper to exit before starting another sample on the same port. Stop every process created for capture and discard the temporary folder.

## Preparing the C++ view-model capture

Back up `Test/GacUISrc/Playground/Main.cpp` byte for byte before temporary changes. Add the displayed `viewmodel.cpp` class and this interface before it, using Playground's existing namespaces:

```cpp
class IHelloViewModel : public virtual IDescriptable, public Description<IHelloViewModel>
{
public:
    Event<void()> NameChanged;
    Event<void()> WelcomeChanged;
    virtual WString GetName() = 0;
    virtual void SetName(const WString& value) = 0;
    virtual WString GetWelcome() = 0;
};
```

Append `IHelloViewModel` to `PLAYGROUND_TYPE_LIST` so the existing declaration, implementation, and type-loader macros register its type. Add its members beside the other reflection registrations:

```cpp
BEGIN_INTERFACE_MEMBER_NOPROXY(IHelloViewModel)
    CLASS_MEMBER_EVENT(NameChanged)
    CLASS_MEMBER_EVENT(WelcomeChanged)
    CLASS_MEMBER_PROPERTY_EVENT_FAST(Name, NameChanged)
    CLASS_MEMBER_PROPERTY_EVENT_READONLY_FAST(Welcome, WelcomeChanged)
END_INTERFACE_MEMBER(IHelloViewModel)
```

In `OpenMainWindow`, replace the parameterless window construction with:

```cpp
auto viewModel = Ptr<IHelloViewModel>(new HelloViewModel);
auto window = UnboxValue<GuiWindow*>(Value::Create(
    L"demo::TestWindow", (Value_xs(), viewModel)));
```

Build `Test/GacUISrc` with `copilotBuild.ps1 -Configuration Debug -Platform x64`, and copy the resulting executable into the temporary capture folder. Load `viewmodel.xml` through the same resource wrapper and perform the greeting checks above. This manual registration supplies the interface for the capture fixture, so do not also load the Script declaration there. Afterwards restore the original `Main.cpp`, update its modification time so the build detects the restoration, and rebuild the ordinary Playground executable. No GacUI source changes are committed for these captures.

The temporary capture fixture is not committed and is not needed to serve the website. These coordinates and screenshot dimensions correspond to the captured 100% DPI environment; derive fresh control bounds at other DPI settings.
