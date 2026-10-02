var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../gaclib/remote-protocol/lib/src/remoteProtocolPrimitiveTypes.js
var remoteProtocolPrimitiveTypes_exports = {};
__export(remoteProtocolPrimitiveTypes_exports, {
  Key: () => Key
});
var Key;
(function(Key2) {
  Key2[Key2["KEY_UNKNOWN"] = -1] = "KEY_UNKNOWN";
  Key2[Key2["KEY_MAXIMUM"] = 255] = "KEY_MAXIMUM";
  Key2[Key2["KEY_LBUTTON"] = 1] = "KEY_LBUTTON";
  Key2[Key2["KEY_RBUTTON"] = 2] = "KEY_RBUTTON";
  Key2[Key2["KEY_CANCEL"] = 3] = "KEY_CANCEL";
  Key2[Key2["KEY_MBUTTON"] = 4] = "KEY_MBUTTON";
  Key2[Key2["KEY_XBUTTON1"] = 5] = "KEY_XBUTTON1";
  Key2[Key2["KEY_XBUTTON2"] = 6] = "KEY_XBUTTON2";
  Key2[Key2["KEY_BACK"] = 8] = "KEY_BACK";
  Key2[Key2["KEY_TAB"] = 9] = "KEY_TAB";
  Key2[Key2["KEY_CLEAR"] = 12] = "KEY_CLEAR";
  Key2[Key2["KEY_RETURN"] = 13] = "KEY_RETURN";
  Key2[Key2["KEY_SHIFT"] = 16] = "KEY_SHIFT";
  Key2[Key2["KEY_CONTROL"] = 17] = "KEY_CONTROL";
  Key2[Key2["KEY_MENU"] = 18] = "KEY_MENU";
  Key2[Key2["KEY_PAUSE"] = 19] = "KEY_PAUSE";
  Key2[Key2["KEY_CAPITAL"] = 20] = "KEY_CAPITAL";
  Key2[Key2["KEY_KANA_HANGUL"] = 21] = "KEY_KANA_HANGUL";
  Key2[Key2["KEY_JUNJA"] = 23] = "KEY_JUNJA";
  Key2[Key2["KEY_FINAL"] = 24] = "KEY_FINAL";
  Key2[Key2["KEY_KANJI"] = 25] = "KEY_KANJI";
  Key2[Key2["KEY_ESCAPE"] = 27] = "KEY_ESCAPE";
  Key2[Key2["KEY_CONVERT"] = 28] = "KEY_CONVERT";
  Key2[Key2["KEY_NONCONVERT"] = 29] = "KEY_NONCONVERT";
  Key2[Key2["KEY_ACCEPT"] = 30] = "KEY_ACCEPT";
  Key2[Key2["KEY_MODECHANGE"] = 31] = "KEY_MODECHANGE";
  Key2[Key2["KEY_SPACE"] = 32] = "KEY_SPACE";
  Key2[Key2["KEY_PRIOR"] = 33] = "KEY_PRIOR";
  Key2[Key2["KEY_NEXT"] = 34] = "KEY_NEXT";
  Key2[Key2["KEY_END"] = 35] = "KEY_END";
  Key2[Key2["KEY_HOME"] = 36] = "KEY_HOME";
  Key2[Key2["KEY_LEFT"] = 37] = "KEY_LEFT";
  Key2[Key2["KEY_UP"] = 38] = "KEY_UP";
  Key2[Key2["KEY_RIGHT"] = 39] = "KEY_RIGHT";
  Key2[Key2["KEY_DOWN"] = 40] = "KEY_DOWN";
  Key2[Key2["KEY_SELECT"] = 41] = "KEY_SELECT";
  Key2[Key2["KEY_PRINT"] = 42] = "KEY_PRINT";
  Key2[Key2["KEY_EXECUTE"] = 43] = "KEY_EXECUTE";
  Key2[Key2["KEY_SNAPSHOT"] = 44] = "KEY_SNAPSHOT";
  Key2[Key2["KEY_INSERT"] = 45] = "KEY_INSERT";
  Key2[Key2["KEY_DELETE"] = 46] = "KEY_DELETE";
  Key2[Key2["KEY_HELP"] = 47] = "KEY_HELP";
  Key2[Key2["KEY_0"] = 48] = "KEY_0";
  Key2[Key2["KEY_1"] = 49] = "KEY_1";
  Key2[Key2["KEY_2"] = 50] = "KEY_2";
  Key2[Key2["KEY_3"] = 51] = "KEY_3";
  Key2[Key2["KEY_4"] = 52] = "KEY_4";
  Key2[Key2["KEY_5"] = 53] = "KEY_5";
  Key2[Key2["KEY_6"] = 54] = "KEY_6";
  Key2[Key2["KEY_7"] = 55] = "KEY_7";
  Key2[Key2["KEY_8"] = 56] = "KEY_8";
  Key2[Key2["KEY_9"] = 57] = "KEY_9";
  Key2[Key2["KEY_A"] = 65] = "KEY_A";
  Key2[Key2["KEY_B"] = 66] = "KEY_B";
  Key2[Key2["KEY_C"] = 67] = "KEY_C";
  Key2[Key2["KEY_D"] = 68] = "KEY_D";
  Key2[Key2["KEY_E"] = 69] = "KEY_E";
  Key2[Key2["KEY_F"] = 70] = "KEY_F";
  Key2[Key2["KEY_G"] = 71] = "KEY_G";
  Key2[Key2["KEY_H"] = 72] = "KEY_H";
  Key2[Key2["KEY_I"] = 73] = "KEY_I";
  Key2[Key2["KEY_J"] = 74] = "KEY_J";
  Key2[Key2["KEY_K"] = 75] = "KEY_K";
  Key2[Key2["KEY_L"] = 76] = "KEY_L";
  Key2[Key2["KEY_M"] = 77] = "KEY_M";
  Key2[Key2["KEY_N"] = 78] = "KEY_N";
  Key2[Key2["KEY_O"] = 79] = "KEY_O";
  Key2[Key2["KEY_P"] = 80] = "KEY_P";
  Key2[Key2["KEY_Q"] = 81] = "KEY_Q";
  Key2[Key2["KEY_R"] = 82] = "KEY_R";
  Key2[Key2["KEY_S"] = 83] = "KEY_S";
  Key2[Key2["KEY_T"] = 84] = "KEY_T";
  Key2[Key2["KEY_U"] = 85] = "KEY_U";
  Key2[Key2["KEY_V"] = 86] = "KEY_V";
  Key2[Key2["KEY_W"] = 87] = "KEY_W";
  Key2[Key2["KEY_X"] = 88] = "KEY_X";
  Key2[Key2["KEY_Y"] = 89] = "KEY_Y";
  Key2[Key2["KEY_Z"] = 90] = "KEY_Z";
  Key2[Key2["KEY_LWIN"] = 91] = "KEY_LWIN";
  Key2[Key2["KEY_RWIN"] = 92] = "KEY_RWIN";
  Key2[Key2["KEY_APPS"] = 93] = "KEY_APPS";
  Key2[Key2["KEY_SLEEP"] = 95] = "KEY_SLEEP";
  Key2[Key2["KEY_NUMPAD0"] = 96] = "KEY_NUMPAD0";
  Key2[Key2["KEY_NUMPAD1"] = 97] = "KEY_NUMPAD1";
  Key2[Key2["KEY_NUMPAD2"] = 98] = "KEY_NUMPAD2";
  Key2[Key2["KEY_NUMPAD3"] = 99] = "KEY_NUMPAD3";
  Key2[Key2["KEY_NUMPAD4"] = 100] = "KEY_NUMPAD4";
  Key2[Key2["KEY_NUMPAD5"] = 101] = "KEY_NUMPAD5";
  Key2[Key2["KEY_NUMPAD6"] = 102] = "KEY_NUMPAD6";
  Key2[Key2["KEY_NUMPAD7"] = 103] = "KEY_NUMPAD7";
  Key2[Key2["KEY_NUMPAD8"] = 104] = "KEY_NUMPAD8";
  Key2[Key2["KEY_NUMPAD9"] = 105] = "KEY_NUMPAD9";
  Key2[Key2["KEY_MULTIPLY"] = 106] = "KEY_MULTIPLY";
  Key2[Key2["KEY_ADD"] = 107] = "KEY_ADD";
  Key2[Key2["KEY_SEPARATOR"] = 108] = "KEY_SEPARATOR";
  Key2[Key2["KEY_SUBTRACT"] = 109] = "KEY_SUBTRACT";
  Key2[Key2["KEY_DECIMAL"] = 110] = "KEY_DECIMAL";
  Key2[Key2["KEY_DIVIDE"] = 111] = "KEY_DIVIDE";
  Key2[Key2["KEY_F1"] = 112] = "KEY_F1";
  Key2[Key2["KEY_F2"] = 113] = "KEY_F2";
  Key2[Key2["KEY_F3"] = 114] = "KEY_F3";
  Key2[Key2["KEY_F4"] = 115] = "KEY_F4";
  Key2[Key2["KEY_F5"] = 116] = "KEY_F5";
  Key2[Key2["KEY_F6"] = 117] = "KEY_F6";
  Key2[Key2["KEY_F7"] = 118] = "KEY_F7";
  Key2[Key2["KEY_F8"] = 119] = "KEY_F8";
  Key2[Key2["KEY_F9"] = 120] = "KEY_F9";
  Key2[Key2["KEY_F10"] = 121] = "KEY_F10";
  Key2[Key2["KEY_F11"] = 122] = "KEY_F11";
  Key2[Key2["KEY_F12"] = 123] = "KEY_F12";
  Key2[Key2["KEY_F13"] = 124] = "KEY_F13";
  Key2[Key2["KEY_F14"] = 125] = "KEY_F14";
  Key2[Key2["KEY_F15"] = 126] = "KEY_F15";
  Key2[Key2["KEY_F16"] = 127] = "KEY_F16";
  Key2[Key2["KEY_F17"] = 128] = "KEY_F17";
  Key2[Key2["KEY_F18"] = 129] = "KEY_F18";
  Key2[Key2["KEY_F19"] = 130] = "KEY_F19";
  Key2[Key2["KEY_F20"] = 131] = "KEY_F20";
  Key2[Key2["KEY_F21"] = 132] = "KEY_F21";
  Key2[Key2["KEY_F22"] = 133] = "KEY_F22";
  Key2[Key2["KEY_F23"] = 134] = "KEY_F23";
  Key2[Key2["KEY_F24"] = 135] = "KEY_F24";
  Key2[Key2["KEY_NUMLOCK"] = 144] = "KEY_NUMLOCK";
  Key2[Key2["KEY_SCROLL"] = 145] = "KEY_SCROLL";
  Key2[Key2["KEY_OEM_FJ_JISHO"] = 146] = "KEY_OEM_FJ_JISHO";
  Key2[Key2["KEY_OEM_FJ_MASSHOU"] = 147] = "KEY_OEM_FJ_MASSHOU";
  Key2[Key2["KEY_OEM_FJ_TOUROKU"] = 148] = "KEY_OEM_FJ_TOUROKU";
  Key2[Key2["KEY_OEM_FJ_LOYA"] = 149] = "KEY_OEM_FJ_LOYA";
  Key2[Key2["KEY_OEM_FJ_ROYA"] = 150] = "KEY_OEM_FJ_ROYA";
  Key2[Key2["KEY_LSHIFT"] = 160] = "KEY_LSHIFT";
  Key2[Key2["KEY_RSHIFT"] = 161] = "KEY_RSHIFT";
  Key2[Key2["KEY_LCONTROL"] = 162] = "KEY_LCONTROL";
  Key2[Key2["KEY_RCONTROL"] = 163] = "KEY_RCONTROL";
  Key2[Key2["KEY_LMENU"] = 164] = "KEY_LMENU";
  Key2[Key2["KEY_RMENU"] = 165] = "KEY_RMENU";
  Key2[Key2["KEY_BROWSER_BACK"] = 166] = "KEY_BROWSER_BACK";
  Key2[Key2["KEY_BROWSER_FORWARD"] = 167] = "KEY_BROWSER_FORWARD";
  Key2[Key2["KEY_BROWSER_REFRESH"] = 168] = "KEY_BROWSER_REFRESH";
  Key2[Key2["KEY_BROWSER_STOP"] = 169] = "KEY_BROWSER_STOP";
  Key2[Key2["KEY_BROWSER_SEARCH"] = 170] = "KEY_BROWSER_SEARCH";
  Key2[Key2["KEY_BROWSER_FAVORITES"] = 171] = "KEY_BROWSER_FAVORITES";
  Key2[Key2["KEY_BROWSER_HOME"] = 172] = "KEY_BROWSER_HOME";
  Key2[Key2["KEY_VOLUME_MUTE"] = 173] = "KEY_VOLUME_MUTE";
  Key2[Key2["KEY_VOLUME_DOWN"] = 174] = "KEY_VOLUME_DOWN";
  Key2[Key2["KEY_VOLUME_UP"] = 175] = "KEY_VOLUME_UP";
  Key2[Key2["KEY_MEDIA_NEXT_TRACK"] = 176] = "KEY_MEDIA_NEXT_TRACK";
  Key2[Key2["KEY_MEDIA_PREV_TRACK"] = 177] = "KEY_MEDIA_PREV_TRACK";
  Key2[Key2["KEY_MEDIA_STOP"] = 178] = "KEY_MEDIA_STOP";
  Key2[Key2["KEY_MEDIA_PLAY_PAUSE"] = 179] = "KEY_MEDIA_PLAY_PAUSE";
  Key2[Key2["KEY_LAUNCH_MAIL"] = 180] = "KEY_LAUNCH_MAIL";
  Key2[Key2["KEY_LAUNCH_MEDIA_SELECT"] = 181] = "KEY_LAUNCH_MEDIA_SELECT";
  Key2[Key2["KEY_LAUNCH_APP1"] = 182] = "KEY_LAUNCH_APP1";
  Key2[Key2["KEY_LAUNCH_APP2"] = 183] = "KEY_LAUNCH_APP2";
  Key2[Key2["KEY_OEM_PLUS"] = 187] = "KEY_OEM_PLUS";
  Key2[Key2["KEY_OEM_COMMA"] = 188] = "KEY_OEM_COMMA";
  Key2[Key2["KEY_OEM_MINUS"] = 189] = "KEY_OEM_MINUS";
  Key2[Key2["KEY_OEM_PERIOD"] = 190] = "KEY_OEM_PERIOD";
  Key2[Key2["KEY_OEM_8"] = 223] = "KEY_OEM_8";
  Key2[Key2["KEY_OEM_AX"] = 225] = "KEY_OEM_AX";
  Key2[Key2["KEY_OEM_102"] = 226] = "KEY_OEM_102";
  Key2[Key2["KEY_ICO_HELP"] = 227] = "KEY_ICO_HELP";
  Key2[Key2["KEY_ICO_00"] = 228] = "KEY_ICO_00";
  Key2[Key2["KEY_PROCESSKEY"] = 229] = "KEY_PROCESSKEY";
  Key2[Key2["KEY_ICO_CLEAR"] = 230] = "KEY_ICO_CLEAR";
  Key2[Key2["KEY_PACKET"] = 231] = "KEY_PACKET";
  Key2[Key2["KEY_OEM_RESET"] = 233] = "KEY_OEM_RESET";
  Key2[Key2["KEY_OEM_JUMP"] = 234] = "KEY_OEM_JUMP";
  Key2[Key2["KEY_OEM_PA1"] = 235] = "KEY_OEM_PA1";
  Key2[Key2["KEY_OEM_PA2"] = 236] = "KEY_OEM_PA2";
  Key2[Key2["KEY_OEM_PA3"] = 237] = "KEY_OEM_PA3";
  Key2[Key2["KEY_OEM_WSCTRL"] = 238] = "KEY_OEM_WSCTRL";
  Key2[Key2["KEY_OEM_CUSEL"] = 239] = "KEY_OEM_CUSEL";
  Key2[Key2["KEY_OEM_ATTN"] = 240] = "KEY_OEM_ATTN";
  Key2[Key2["KEY_OEM_FINISH"] = 241] = "KEY_OEM_FINISH";
  Key2[Key2["KEY_OEM_COPY"] = 242] = "KEY_OEM_COPY";
  Key2[Key2["KEY_OEM_AUTO"] = 243] = "KEY_OEM_AUTO";
  Key2[Key2["KEY_OEM_ENLW"] = 244] = "KEY_OEM_ENLW";
  Key2[Key2["KEY_OEM_BACKTAB"] = 245] = "KEY_OEM_BACKTAB";
  Key2[Key2["KEY_ATTN"] = 246] = "KEY_ATTN";
  Key2[Key2["KEY_CRSEL"] = 247] = "KEY_CRSEL";
  Key2[Key2["KEY_EXSEL"] = 248] = "KEY_EXSEL";
  Key2[Key2["KEY_EREOF"] = 249] = "KEY_EREOF";
  Key2[Key2["KEY_PLAY"] = 250] = "KEY_PLAY";
  Key2[Key2["KEY_ZOOM"] = 251] = "KEY_ZOOM";
  Key2[Key2["KEY_NONAME"] = 252] = "KEY_NONAME";
  Key2[Key2["KEY_PA1"] = 253] = "KEY_PA1";
  Key2[Key2["KEY_OEM_CLEAR"] = 254] = "KEY_OEM_CLEAR";
  Key2[Key2["KEY_SEMICOLON"] = 186] = "KEY_SEMICOLON";
  Key2[Key2["KEY_SLASH"] = 191] = "KEY_SLASH";
  Key2[Key2["KEY_GRAVE_ACCENT"] = 192] = "KEY_GRAVE_ACCENT";
  Key2[Key2["KEY_LEFT_BRACKET"] = 219] = "KEY_LEFT_BRACKET";
  Key2[Key2["KEY_BACKSLASH"] = 220] = "KEY_BACKSLASH";
  Key2[Key2["KEY_RIGHT_BRACKET"] = 221] = "KEY_RIGHT_BRACKET";
  Key2[Key2["KEY_APOSTROPHE"] = 222] = "KEY_APOSTROPHE";
  Key2[Key2["KEY_OEM_1"] = 186] = "KEY_OEM_1";
  Key2[Key2["KEY_OEM_2"] = 191] = "KEY_OEM_2";
  Key2[Key2["KEY_OEM_3"] = 192] = "KEY_OEM_3";
  Key2[Key2["KEY_OEM_4"] = 219] = "KEY_OEM_4";
  Key2[Key2["KEY_OEM_5"] = 220] = "KEY_OEM_5";
  Key2[Key2["KEY_OEM_6"] = 221] = "KEY_OEM_6";
  Key2[Key2["KEY_OEM_7"] = 222] = "KEY_OEM_7";
  Key2[Key2["KEY_HANJA"] = 25] = "KEY_HANJA";
  Key2[Key2["KEY_OEM_NEC_EQUAL"] = 146] = "KEY_OEM_NEC_EQUAL";
})(Key || (Key = {}));

// ../../gaclib/remote-protocol/lib/src/remoteProtocolDefinition.js
var CharacterEncoding;
(function(CharacterEncoding2) {
  CharacterEncoding2["UTF8"] = "UTF8";
  CharacterEncoding2["UTF16"] = "UTF16";
  CharacterEncoding2["UTF32"] = "UTF32";
})(CharacterEncoding || (CharacterEncoding = {}));
var WindowHitTestResult;
(function(WindowHitTestResult2) {
  WindowHitTestResult2["BorderNoSizing"] = "BorderNoSizing";
  WindowHitTestResult2["BorderLeft"] = "BorderLeft";
  WindowHitTestResult2["BorderRight"] = "BorderRight";
  WindowHitTestResult2["BorderTop"] = "BorderTop";
  WindowHitTestResult2["BorderBottom"] = "BorderBottom";
  WindowHitTestResult2["BorderLeftTop"] = "BorderLeftTop";
  WindowHitTestResult2["BorderRightTop"] = "BorderRightTop";
  WindowHitTestResult2["BorderLeftBottom"] = "BorderLeftBottom";
  WindowHitTestResult2["BorderRightBottom"] = "BorderRightBottom";
  WindowHitTestResult2["Title"] = "Title";
  WindowHitTestResult2["ButtonMinimum"] = "ButtonMinimum";
  WindowHitTestResult2["ButtonMaximum"] = "ButtonMaximum";
  WindowHitTestResult2["ButtonClose"] = "ButtonClose";
  WindowHitTestResult2["Client"] = "Client";
  WindowHitTestResult2["Icon"] = "Icon";
  WindowHitTestResult2["NoDecision"] = "NoDecision";
})(WindowHitTestResult || (WindowHitTestResult = {}));
var WindowSystemCursorType;
(function(WindowSystemCursorType2) {
  WindowSystemCursorType2["SmallWaiting"] = "SmallWaiting";
  WindowSystemCursorType2["LargeWaiting"] = "LargeWaiting";
  WindowSystemCursorType2["Arrow"] = "Arrow";
  WindowSystemCursorType2["Cross"] = "Cross";
  WindowSystemCursorType2["Hand"] = "Hand";
  WindowSystemCursorType2["Help"] = "Help";
  WindowSystemCursorType2["IBeam"] = "IBeam";
  WindowSystemCursorType2["SizeAll"] = "SizeAll";
  WindowSystemCursorType2["SizeNESW"] = "SizeNESW";
  WindowSystemCursorType2["SizeNS"] = "SizeNS";
  WindowSystemCursorType2["SizeNWSE"] = "SizeNWSE";
  WindowSystemCursorType2["SizeWE"] = "SizeWE";
})(WindowSystemCursorType || (WindowSystemCursorType = {}));
var WindowSizeState;
(function(WindowSizeState2) {
  WindowSizeState2["Minimized"] = "Minimized";
  WindowSizeState2["Restored"] = "Restored";
  WindowSizeState2["Maximized"] = "Maximized";
})(WindowSizeState || (WindowSizeState = {}));
var IOMouseButton;
(function(IOMouseButton2) {
  IOMouseButton2["Left"] = "Left";
  IOMouseButton2["Middle"] = "Middle";
  IOMouseButton2["Right"] = "Right";
  IOMouseButton2["Mouse4"] = "Mouse4";
  IOMouseButton2["Mouse5"] = "Mouse5";
})(IOMouseButton || (IOMouseButton = {}));
var ElementShapeType;
(function(ElementShapeType2) {
  ElementShapeType2["Rectangle"] = "Rectangle";
  ElementShapeType2["Ellipse"] = "Ellipse";
  ElementShapeType2["RoundRect"] = "RoundRect";
})(ElementShapeType || (ElementShapeType = {}));
var ElementGradientrDirection;
(function(ElementGradientrDirection2) {
  ElementGradientrDirection2["Horizontal"] = "Horizontal";
  ElementGradientrDirection2["Vertical"] = "Vertical";
  ElementGradientrDirection2["Slash"] = "Slash";
  ElementGradientrDirection2["Backslash"] = "Backslash";
})(ElementGradientrDirection || (ElementGradientrDirection = {}));
var ElementSplitterDirection;
(function(ElementSplitterDirection2) {
  ElementSplitterDirection2["Horizontal"] = "Horizontal";
  ElementSplitterDirection2["Vertical"] = "Vertical";
})(ElementSplitterDirection || (ElementSplitterDirection = {}));
var ElementHorizontalAlignment;
(function(ElementHorizontalAlignment2) {
  ElementHorizontalAlignment2["Left"] = "Left";
  ElementHorizontalAlignment2["Right"] = "Right";
  ElementHorizontalAlignment2["Center"] = "Center";
})(ElementHorizontalAlignment || (ElementHorizontalAlignment = {}));
var ElementVerticalAlignment;
(function(ElementVerticalAlignment2) {
  ElementVerticalAlignment2["Top"] = "Top";
  ElementVerticalAlignment2["Bottom"] = "Bottom";
  ElementVerticalAlignment2["Center"] = "Center";
})(ElementVerticalAlignment || (ElementVerticalAlignment = {}));
var ElementSolidLabelMeasuringRequest;
(function(ElementSolidLabelMeasuringRequest2) {
  ElementSolidLabelMeasuringRequest2["FontHeight"] = "FontHeight";
  ElementSolidLabelMeasuringRequest2["TotalSize"] = "TotalSize";
})(ElementSolidLabelMeasuringRequest || (ElementSolidLabelMeasuringRequest = {}));
var ImageFormatType;
(function(ImageFormatType2) {
  ImageFormatType2["Bmp"] = "Bmp";
  ImageFormatType2["Gif"] = "Gif";
  ImageFormatType2["Icon"] = "Icon";
  ImageFormatType2["Jpeg"] = "Jpeg";
  ImageFormatType2["Png"] = "Png";
  ImageFormatType2["Tiff"] = "Tiff";
  ImageFormatType2["Wmp"] = "Wmp";
  ImageFormatType2["Unknown"] = "Unknown";
})(ImageFormatType || (ImageFormatType = {}));
var BreakCondition;
(function(BreakCondition2) {
  BreakCondition2["StickToPreviousRun"] = "StickToPreviousRun";
  BreakCondition2["StickToNextRun"] = "StickToNextRun";
  BreakCondition2["Alone"] = "Alone";
})(BreakCondition || (BreakCondition = {}));
var CaretRelativePosition;
(function(CaretRelativePosition2) {
  CaretRelativePosition2["CaretFirst"] = "CaretFirst";
  CaretRelativePosition2["CaretLast"] = "CaretLast";
  CaretRelativePosition2["CaretLineFirst"] = "CaretLineFirst";
  CaretRelativePosition2["CaretLineLast"] = "CaretLineLast";
  CaretRelativePosition2["CaretMoveLeft"] = "CaretMoveLeft";
  CaretRelativePosition2["CaretMoveRight"] = "CaretMoveRight";
  CaretRelativePosition2["CaretMoveUp"] = "CaretMoveUp";
  CaretRelativePosition2["CaretMoveDown"] = "CaretMoveDown";
})(CaretRelativePosition || (CaretRelativePosition = {}));
var RendererType;
(function(RendererType2) {
  RendererType2["FocusRectangle"] = "FocusRectangle";
  RendererType2["Raw"] = "Raw";
  RendererType2["SolidBorder"] = "SolidBorder";
  RendererType2["SinkBorder"] = "SinkBorder";
  RendererType2["SinkSplitter"] = "SinkSplitter";
  RendererType2["SolidBackground"] = "SolidBackground";
  RendererType2["GradientBackground"] = "GradientBackground";
  RendererType2["InnerShadow"] = "InnerShadow";
  RendererType2["SolidLabel"] = "SolidLabel";
  RendererType2["Polygon"] = "Polygon";
  RendererType2["ImageFrame"] = "ImageFrame";
  RendererType2["DocumentParagraph"] = "DocumentParagraph";
})(RendererType || (RendererType = {}));
var RenderingDom_DiffType;
(function(RenderingDom_DiffType2) {
  RenderingDom_DiffType2["Deleted"] = "Deleted";
  RenderingDom_DiffType2["Created"] = "Created";
  RenderingDom_DiffType2["Modified"] = "Modified";
})(RenderingDom_DiffType || (RenderingDom_DiffType = {}));

// ../../gaclib/renderer/lib/src/domRenderer/elementStyles_Image.js
function getImageFormatType(imageData) {
  const bin = atob(imageData);
  if (bin.substring(0, 2) === "BM") {
    return ImageFormatType.Bmp;
  } else if (bin.substring(0, 6) === "GIF87a" || bin.substring(0, 6) === "GIF89a") {
    return ImageFormatType.Gif;
  } else if (bin.substring(0, 4) === "\x89PNG") {
    return ImageFormatType.Png;
  } else if (bin.substring(0, 2) === "II" || bin.substring(0, 2) === "MM") {
    return ImageFormatType.Tiff;
  } else if (bin.substring(0, 2) === "\xFF\xD8") {
    return ImageFormatType.Jpeg;
  } else if (bin.substring(0, 4) === "\0\0\0" || bin.substring(0, 4) === "\0\0\0") {
    return ImageFormatType.Icon;
  } else {
    return ImageFormatType.Unknown;
  }
}
__name(getImageFormatType, "getImageFormatType");
function getImageContentType(type) {
  switch (type) {
    case ImageFormatType.Bmp:
      return "image/bmp";
    case ImageFormatType.Gif:
      return "image/gif";
    case ImageFormatType.Png:
      return "image/png";
    case ImageFormatType.Tiff:
      return "image/tiff";
    case ImageFormatType.Jpeg:
      return "image/jpeg";
    case ImageFormatType.Icon:
      return "image/vnd.microsoft.icon";
    default:
      throw new Error("Unsupported image format");
  }
}
__name(getImageContentType, "getImageContentType");
function getImageDataUrl(contentType, imageData) {
  return `data:${contentType};base64,${imageData}`;
}
__name(getImageDataUrl, "getImageDataUrl");
function getImageUrl(contentType, imageData) {
  return `url(${getImageDataUrl(contentType, imageData)})`;
}
__name(getImageUrl, "getImageUrl");
function getStyle_ImageFrame(desc) {
  if (desc.imageId === null) {
    return "";
  }
  if (desc.imageCreation === null) {
    throw new Error("getStyle_ImageFrame requires ElementDesc_ImageFrame.imageCreation to exist.");
  }
  if (desc.imageCreation.imageDataOmitted) {
    throw new Error("getStyle_ImageFrame requires ElementDesc_ImageFrame.imageCreation.imageDataOmitted to be false.");
  }
  let positionStyle;
  if (desc.stretch) {
    positionStyle = `background-repeat: no-repeat; background-origin: border-box; background-size: 100% 100%;`;
  } else {
    positionStyle = `background-position-x: ${desc.horizontalAlignment.toLowerCase()}; background-position-y: ${desc.verticalAlignment.toLowerCase()}; background-repeat: no-repeat;`;
  }
  let filterStyle = "";
  if (desc.enabled === false) {
    filterStyle = `filter: grayscale(100%);`;
  }
  const imageStyle = `background-image: ${getImageUrl(getImageContentType(getImageFormatType(desc.imageCreation.imageData)), desc.imageCreation.imageData)};`;
  return `${imageStyle} ${positionStyle} ${filterStyle}`;
}
__name(getStyle_ImageFrame, "getStyle_ImageFrame");

// ../../gaclib/renderer/lib/src/featureGates.js
var featureGates = {
  useWebkitLineClamp: false
};
function getFeatureGates() {
  return featureGates;
}
__name(getFeatureGates, "getFeatureGates");
function applyFeatureGates(gates) {
  if (gates.useWebkitLineClamp !== void 0) {
    featureGates.useWebkitLineClamp = gates.useWebkitLineClamp;
  }
}
__name(applyFeatureGates, "applyFeatureGates");

// ../../gaclib/renderer/lib/src/domRenderer/elementStyles_SolidLabel.js
var WebkitElementName = "$GacUI-WebkitElement";
function onSolidLabelResized(textDiv) {
  const webkitElement = textDiv[WebkitElementName];
  if (webkitElement !== void 0) {
    const lineHeight = parseFloat(webkitElement.style.lineHeight) * parseFloat(webkitElement.style.fontSize);
    const lineClamp = Math.floor(textDiv.clientHeight / lineHeight);
    webkitElement.style.webkitLineClamp = `${lineClamp}`;
  }
}
__name(onSolidLabelResized, "onSolidLabelResized");
function getFontStyle(desc) {
  const textDecorations = [];
  if (desc.font.underline) {
    textDecorations.push("underline");
  }
  if (desc.font.strikeline) {
    textDecorations.push("line-through");
  }
  return `color: ${desc.textColor}; font-family: ${desc.font.fontFamily}; line-height: 1.4; font-size: ${desc.font.size}px; font-weight: ${desc.font.bold ? "bold" : "normal"}; font-style: ${desc.font.italic ? "italic" : "normal"};${textDecorations.length > 0 ? ` text-decoration: ${textDecorations.join(" ")};` : ""}`;
}
__name(getFontStyle, "getFontStyle");
function normalizeText(desc) {
  return desc.multiline ? desc.text : desc.text.replaceAll("\r", "").split("\n").join(" ");
}
__name(normalizeText, "normalizeText");
function initializeText(textDiv, desc) {
  if (desc.font === null) {
    throw new Error("initializeText requires ElementDesc_SolidLabel.font to exist.");
  }
  if (desc.text === null) {
    throw new Error("initializeText requires ElementDesc_SolidLabel.text to exist.");
  }
  const ellipseWithWrapLine = desc.ellipse && desc.wrapLine;
  const useWebkitLineClamp = getFeatureGates().useWebkitLineClamp;
  delete textDiv[WebkitElementName];
  let textElement = textDiv.childNodes[0];
  if (textElement === void 0 || textDiv.childNodes.length !== 1 || !(textElement instanceof HTMLDivElement)) {
    textElement = document.createElement("div");
    textDiv.replaceChildren(textElement);
  } else {
    textElement.replaceChildren();
  }
  if (ellipseWithWrapLine === false || useWebkitLineClamp === false) {
    textElement.textContent = normalizeText(desc);
  }
  {
    let verticalAlignStyle;
    switch (desc.verticalAlignment) {
      case ElementVerticalAlignment.Center:
        verticalAlignStyle = "align-items: center;";
        break;
      case ElementVerticalAlignment.Bottom:
        verticalAlignStyle = "align-items: flex-end;";
        break;
      default:
        verticalAlignStyle = "align-items: flex-start;";
        break;
    }
    let horizontalAlignStyle;
    switch (desc.horizontalAlignment) {
      case ElementHorizontalAlignment.Center:
        horizontalAlignStyle = "text-align: center;";
        break;
      case ElementHorizontalAlignment.Right:
        horizontalAlignStyle = "text-align: right;";
        break;
      default:
        horizontalAlignStyle = "text-align: left;";
        break;
    }
    const alignmentStyle = `display: flex; ${verticalAlignStyle} ${horizontalAlignStyle}`;
    const sizeStyle = "left: 0px; top: 0px; width: 100%; height: 100%;";
    textDiv.style.cssText = `overflow:hidden; ${alignmentStyle} ${sizeStyle}`;
  }
  {
    const fontStyle = getFontStyle(desc);
    const flexItemStyle = "flex: 0 1 auto; max-width: 100%; max-height: 100%; min-width: 100%; min-height: 0;";
    if (ellipseWithWrapLine === false || useWebkitLineClamp === false) {
      const formatStyle = `text-overflow: ${desc.ellipse ? "ellipsis" : "clip"}; white-space: ${desc.wrapLine ? "pre-wrap" : "pre"};`;
      textElement.style.cssText = `overflow:hidden; ${fontStyle} ${formatStyle} ${flexItemStyle}`;
    } else {
      textElement.style.cssText = `overflow:hidden; ${flexItemStyle}`;
      const webkitElement = document.createElement("div");
      textElement.replaceChildren(webkitElement);
      textDiv[WebkitElementName] = webkitElement;
      webkitElement.textContent = normalizeText(desc);
      const formatStyle = `white-space: ${desc.wrapLine ? "pre-wrap" : "pre"};`;
      webkitElement.style.cssText = `overflow:hidden; display: -webkit-box; -webkit-box-orient: vertical; ${fontStyle} ${formatStyle}`;
      onSolidLabelResized(textDiv);
    }
  }
}
__name(initializeText, "initializeText");

// ../../gaclib/renderer/lib/src/domRenderer/elementStyles_DocumentParagraph.js
function updateParagraphInlineImages(layout, imageFrameElementId, elements) {
  const runs = layout.paragraph.runsDiff ?? [];
  for (const line of layout.lines) {
    for (const block of line.blocks) {
      if (block.image !== void 0)
        continue;
      const run = runs.find((r) => r.caretBegin <= block.start && r.caretEnd >= block.end && r.props[0] === "DocumentInlineObjectRunProperty");
      if (run === void 0 || run.props[0] !== "DocumentInlineObjectRunProperty")
        continue;
      const props = run.props[1];
      if (props.backgroundElementId !== imageFrameElementId)
        continue;
      if (block.span.dataset.backgroundElementId !== String(imageFrameElementId))
        continue;
      const imageDesc = elements.getDesc(imageFrameElementId);
      if (imageDesc === void 0 || imageDesc.type !== RendererType.ImageFrame)
        continue;
      const imageFrame = imageDesc.desc;
      if (imageFrame.imageCreation === null || imageFrame.imageCreation.imageDataOmitted)
        continue;
      const contentType = getImageContentType(getImageFormatType(imageFrame.imageCreation.imageData));
      const image = document.createElement("img");
      image.src = getImageDataUrl(contentType, imageFrame.imageCreation.imageData);
      const baseline = props.baseline === -1 ? props.size.y : props.baseline;
      image.style.cssText = `width: ${props.size.x}px; height: ${props.size.y}px; position: absolute; top: ${baseline - props.size.y}px; left: 0;`;
      block.span.insertBefore(image, block.span.firstChild);
      block.image = image;
    }
  }
}
__name(updateParagraphInlineImages, "updateParagraphInlineImages");
function toSelectionOverlayColor(color) {
  if (color === "#00000000" || color === "#000000") {
    return void 0;
  }
  const hex = color.startsWith("#") ? color.slice(1) : color;
  if (hex.length < 6)
    return void 0;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
  const halfAlpha = Math.max(a * 0.5, 0.25);
  return `rgba(${r}, ${g}, ${b}, ${halfAlpha.toFixed(2)})`;
}
__name(toSelectionOverlayColor, "toSelectionOverlayColor");
function createInlineObjectSpan(props, elements) {
  const span = document.createElement("span");
  span.style.cssText = `display: inline-block; width: ${props.size.x}px; height: ${props.size.y}px; position: relative;`;
  let image;
  if (props.backgroundElementId !== -1) {
    span.dataset.backgroundElementId = String(props.backgroundElementId);
    const imageDesc = elements.getDesc(props.backgroundElementId);
    if (imageDesc !== void 0 && imageDesc.type === RendererType.ImageFrame) {
      const imageFrame = imageDesc.desc;
      if (imageFrame.imageCreation !== null && !imageFrame.imageCreation.imageDataOmitted) {
        const contentType = getImageContentType(getImageFormatType(imageFrame.imageCreation.imageData));
        image = document.createElement("img");
        image.src = getImageDataUrl(contentType, imageFrame.imageCreation.imageData);
        const baseline = props.baseline === -1 ? props.size.y : props.baseline;
        image.style.cssText = `width: ${props.size.x}px; height: ${props.size.y}px; position: absolute; top: ${baseline - props.size.y}px; left: 0;`;
        span.appendChild(image);
      }
    }
  }
  const overlayColor = toSelectionOverlayColor(props.backgroundColor);
  if (overlayColor !== void 0) {
    const overlay = document.createElement("div");
    overlay.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: ${overlayColor}; pointer-events: none;`;
    span.appendChild(overlay);
  }
  return { span, image };
}
__name(createInlineObjectSpan, "createInlineObjectSpan");
function getTextRunStyle(props) {
  const font = props.fontProperties;
  const textDecorations = [];
  if (font.underline) {
    textDecorations.push("underline");
  }
  if (font.strikeline) {
    textDecorations.push("line-through");
  }
  let style = `color: ${props.textColor}; font-family: ${font.fontFamily}; font-size: ${font.size}px; line-height: 1; font-weight: ${font.bold ? "bold" : "normal"}; font-style: ${font.italic ? "italic" : "normal"};`;
  if (textDecorations.length > 0) {
    style += ` text-decoration: ${textDecorations.join(" ")};`;
  }
  if (props.backgroundColor !== "#00000000" && props.backgroundColor !== "#000000") {
    style += ` background-color: ${props.backgroundColor};`;
  }
  return style;
}
__name(getTextRunStyle, "getTextRunStyle");
function createStyledTextSpan(content, props) {
  const span = document.createElement("span");
  span.style.cssText = getTextRunStyle(props);
  const text = document.createTextNode(content);
  span.appendChild(text);
  return { span, text };
}
__name(createStyledTextSpan, "createStyledTextSpan");
function createPlainTextSpan(content) {
  const span = document.createElement("span");
  const text = document.createTextNode(content);
  span.appendChild(text);
  return { span, text };
}
__name(createPlainTextSpan, "createPlainTextSpan");
function buildBlocksForLine(text, lineStart, lineEnd, runs, elements) {
  const runsOnLine = runs.filter((r) => r.caretBegin < lineEnd && r.caretEnd > lineStart).map((r) => ({
    start: Math.max(r.caretBegin, lineStart),
    end: Math.min(r.caretEnd, lineEnd),
    run: r
  })).sort((a, b) => a.start - b.start);
  const blocks = [];
  let cursor = lineStart;
  for (const { start, end, run } of runsOnLine) {
    if (cursor < start) {
      const { span, text: textNode } = createPlainTextSpan(text.substring(cursor, start));
      blocks.push({ start: cursor, end: start, span, text: textNode });
    }
    if (run.props[0] === "DocumentInlineObjectRunProperty") {
      const { span, image } = createInlineObjectSpan(run.props[1], elements);
      blocks.push({ start, end, span, image });
    } else {
      const { span, text: textNode } = createStyledTextSpan(text.substring(start, end), run.props[1]);
      blocks.push({ start, end, span, text: textNode });
    }
    cursor = end;
  }
  if (cursor < lineEnd) {
    const { span, text: textNode } = createPlainTextSpan(text.substring(cursor, lineEnd));
    blocks.push({ start: cursor, end: lineEnd, span, text: textNode });
  }
  if (blocks.length === 0) {
    const { span, text: textNode } = createPlainTextSpan("");
    blocks.push({ start: lineStart, end: lineEnd, span, text: textNode });
  }
  return blocks;
}
__name(buildBlocksForLine, "buildBlocksForLine");
var ParagraphMeasurementsNodeName = "$GacUI-ParagraphMeasurementsNodeName";
var ParagraphCaretNodeName = "$GacUI-ParagraphCaretNodeName";
function getCollapsedCaretRect(node, offset) {
  const range = document.createRange();
  range.setStart(node, offset);
  range.setEnd(node, offset);
  const rects = range.getClientRects();
  if (rects.length > 0) {
    return rects[0];
  }
  const bounding = range.getBoundingClientRect();
  if (bounding.height > 0) {
    return bounding;
  }
  return null;
}
__name(getCollapsedCaretRect, "getCollapsedCaretRect");
function clientRectsChanged(prev, curr) {
  if (prev.length !== curr.length)
    return true;
  for (let i = 0; i < prev.length; i++) {
    if (Math.abs(prev[i].left - curr[i].left) > 0.5 || Math.abs(prev[i].top - curr[i].top) > 0.5 || Math.abs(prev[i].right - curr[i].right) > 0.5 || Math.abs(prev[i].bottom - curr[i].bottom) > 0.5) {
      return true;
    }
  }
  return false;
}
__name(clientRectsChanged, "clientRectsChanged");
function findRunForRange(runs, start, end) {
  return runs.find((r) => r.caretBegin <= start && r.caretEnd >= end);
}
__name(findRunForRange, "findRunForRange");
function getLineEdgePosition(line, atEnd, divRect) {
  if (line.blocks.length > 0) {
    const block = atEnd ? line.blocks[line.blocks.length - 1] : line.blocks[0];
    if (block.text !== void 0 && block.text.length > 0) {
      const rect2 = getCollapsedCaretRect(block.text, atEnd ? block.text.length : 0);
      if (rect2 !== null) {
        return {
          x: Math.round(rect2.left - divRect.left),
          y: Math.round(rect2.bottom - divRect.top)
        };
      }
    }
    const rect = block.span.getBoundingClientRect();
    return {
      x: Math.round((atEnd ? rect.right : rect.left) - divRect.left),
      y: Math.round(rect.bottom - divRect.top)
    };
  }
  const lineRect = line.element.getBoundingClientRect();
  return {
    x: Math.round(lineRect.left - divRect.left),
    y: Math.round(lineRect.bottom - divRect.top)
  };
}
__name(getLineEdgePosition, "getLineEdgePosition");
function fillParagraphMeasurements(textDiv, layout) {
  const units = [];
  const inlineObjectBounds = [];
  const runs = layout.paragraph.runsDiff ?? [];
  const divRect = textDiv.getBoundingClientRect();
  const defaultFontSize = layout.defaultFontSize;
  for (let lineIndex = 0; lineIndex < layout.lines.length; lineIndex++) {
    const line = layout.lines[lineIndex];
    for (const block of line.blocks) {
      if (block.start === block.end)
        continue;
      const run = findRunForRange(runs, block.start, block.end);
      if (run !== void 0 && run.props[0] === "DocumentInlineObjectRunProperty") {
        const props = run.props[1];
        const rect = block.span.getBoundingClientRect();
        const frontX = Math.round(rect.left - divRect.left);
        const backX = Math.round(rect.right - divRect.left);
        const y = Math.round(rect.bottom - divRect.top);
        const height = Math.round(rect.height);
        units.push({
          start: block.start,
          end: block.end,
          frontCaretBaseline: { x: frontX, y },
          backCaretBaseline: { x: backX, y },
          caretHeight: height
        });
        if (props.callbackId !== -1) {
          inlineObjectBounds.push({
            elementId: layout.paragraph.id,
            callbackId: props.callbackId,
            bounds: { x1: frontX, y1: y - height, x2: backX, y2: y }
          });
        }
      } else {
        const textNode = block.text;
        if (textNode === void 0 || textNode.length === 0)
          continue;
        const nodeLength = textNode.length;
        const measureRange = document.createRange();
        let cursor = 0;
        while (cursor < nodeLength) {
          measureRange.setStart(textNode, cursor);
          measureRange.setEnd(textNode, cursor + 1);
          let prevRects = Array.from(measureRange.getClientRects());
          let unitEnd = cursor + 1;
          while (unitEnd < nodeLength) {
            measureRange.setEnd(textNode, unitEnd + 1);
            const newRects = Array.from(measureRange.getClientRects());
            if (clientRectsChanged(prevRects, newRects)) {
              break;
            }
            prevRects = newRects;
            unitEnd++;
          }
          const frontRect = getCollapsedCaretRect(textNode, cursor);
          const backRect = getCollapsedCaretRect(textNode, unitEnd);
          if (frontRect !== null && backRect !== null) {
            units.push({
              start: block.start + cursor,
              end: block.start + unitEnd,
              frontCaretBaseline: {
                x: Math.round(frontRect.left - divRect.left),
                y: Math.round(frontRect.bottom - divRect.top)
              },
              backCaretBaseline: {
                x: Math.round(backRect.left - divRect.left),
                y: Math.round(backRect.bottom - divRect.top)
              },
              caretHeight: Math.round(frontRect.height)
            });
          }
          cursor = unitEnd;
        }
      }
    }
    if (lineIndex < layout.lines.length - 1) {
      const nextLine = layout.lines[lineIndex + 1];
      units.push({
        start: line.end,
        end: nextLine.start,
        frontCaretBaseline: getLineEdgePosition(line, true, divRect),
        backCaretBaseline: getLineEdgePosition(nextLine, false, divRect),
        caretHeight: defaultFontSize
      });
    }
  }
  layout.units = units;
  layout.inlineObjectBounds = inlineObjectBounds.length > 0 ? inlineObjectBounds : null;
  if (layout.caret !== null) {
    layout.caretVisible = true;
    setCaretVisible(textDiv, true, layout);
  }
}
__name(fillParagraphMeasurements, "fillParagraphMeasurements");
function renderParagraphMeasurements(textDiv, layout) {
  const existing = textDiv[ParagraphMeasurementsNodeName];
  if (existing !== void 0) {
    for (const el of existing) {
      el.remove();
    }
  }
  const elements = [];
  const runs = layout.paragraph.runsDiff ?? [];
  for (const unit of layout.units) {
    if (unit.frontCaretBaseline.y !== unit.backCaretBaseline.y)
      continue;
    const run = findRunForRange(runs, unit.start, unit.end);
    let borderColor;
    if (run !== void 0 && run.props[0] === "DocumentInlineObjectRunProperty") {
      borderColor = "#606000";
    } else if (unit.frontCaretBaseline.x <= unit.backCaretBaseline.x) {
      borderColor = "#006000";
    } else {
      borderColor = "#600000";
    }
    const x1 = Math.min(unit.frontCaretBaseline.x, unit.backCaretBaseline.x);
    const x2 = Math.max(unit.frontCaretBaseline.x, unit.backCaretBaseline.x);
    const y = unit.frontCaretBaseline.y;
    const h = unit.caretHeight;
    const div = document.createElement("div");
    div.style.cssText = `position: absolute; left: ${x1}px; top: ${y - h}px; width: ${x2 - x1}px; height: ${h}px; border: 1px solid ${borderColor}; box-sizing: border-box; pointer-events: none;`;
    textDiv.appendChild(div);
    elements.push(div);
  }
  textDiv[ParagraphMeasurementsNodeName] = elements;
  if (layout.caret !== null) {
    setCaretVisible(textDiv, layout.caretVisible, layout);
  }
}
__name(renderParagraphMeasurements, "renderParagraphMeasurements");
function isCaretVisible(textDiv) {
  const caretElement = textDiv[ParagraphCaretNodeName];
  if (caretElement === void 0)
    return false;
  return caretElement.style.display !== "none";
}
__name(isCaretVisible, "isCaretVisible");
function setCaretVisible(textDiv, visible, layout) {
  if (layout.caret === null) {
    visible = false;
  }
  layout.caretVisible = visible;
  if (!visible) {
    const caretElement2 = textDiv[ParagraphCaretNodeName];
    if (caretElement2 !== void 0) {
      caretElement2.style.display = "none";
    }
    return;
  }
  const caretPos = layout.caret.caret;
  const frontSide = layout.caret.frontSide;
  let caretX;
  let caretY;
  let caretHeight;
  for (const unit of layout.units) {
    if (frontSide && caretPos > unit.start && caretPos <= unit.end) {
      caretX = unit.backCaretBaseline.x;
      caretY = unit.backCaretBaseline.y;
      caretHeight = unit.caretHeight;
      break;
    } else if (!frontSide && caretPos >= unit.start && caretPos < unit.end) {
      caretX = unit.frontCaretBaseline.x;
      caretY = unit.frontCaretBaseline.y;
      caretHeight = unit.caretHeight;
      break;
    }
  }
  if (caretX === void 0 || caretY === void 0 || caretHeight === void 0) {
    for (const unit of layout.units) {
      if (frontSide && caretPos >= unit.start && caretPos < unit.end) {
        caretX = unit.frontCaretBaseline.x;
        caretY = unit.frontCaretBaseline.y;
        caretHeight = unit.caretHeight;
        break;
      } else if (!frontSide && caretPos > unit.start && caretPos <= unit.end) {
        caretX = unit.backCaretBaseline.x;
        caretY = unit.backCaretBaseline.y;
        caretHeight = unit.caretHeight;
        break;
      }
    }
  }
  if (caretX === void 0 || caretY === void 0 || caretHeight === void 0) {
    caretX = 0;
    caretY = layout.defaultFontSize;
    caretHeight = layout.defaultFontSize;
  }
  let caretElement = textDiv[ParagraphCaretNodeName];
  if (caretElement === void 0) {
    caretElement = document.createElement("div");
    caretElement.style.position = "absolute";
    caretElement.style.pointerEvents = "none";
    textDiv.appendChild(caretElement);
    textDiv[ParagraphCaretNodeName] = caretElement;
  }
  caretElement.style.display = "block";
  caretElement.style.left = `${caretX - 1}px`;
  caretElement.style.top = `${caretY - caretHeight}px`;
  caretElement.style.width = "2px";
  caretElement.style.height = `${caretHeight}px`;
  caretElement.style.backgroundColor = layout.caret.caretColor;
}
__name(setCaretVisible, "setCaretVisible");
function initializeParagraph(textDiv, desc, elements) {
  if (desc.paragraph.text === null) {
    throw new Error("initializeParagraph requires ElementDesc_DocumentParagraph.paragraph.text to exist.");
  }
  const text = desc.paragraph.text;
  const runs = desc.paragraph.runsDiff ?? [];
  const lineBreakRegex = /\r*\n/g;
  const lineRanges = [];
  let lineStart = 0;
  let match;
  while ((match = lineBreakRegex.exec(text)) !== null) {
    lineRanges.push({ start: lineStart, end: match.index });
    lineStart = match.index + match[0].length;
  }
  lineRanges.push({ start: lineStart, end: text.length });
  let alignStyle;
  switch (desc.paragraph.alignment) {
    case ElementHorizontalAlignment.Center:
      alignStyle = "center";
      break;
    case ElementHorizontalAlignment.Right:
      alignStyle = "right";
      break;
    default:
      alignStyle = "left";
      break;
  }
  const wrapStyle = desc.paragraph.wrapLine ? "pre-wrap" : "pre";
  const maxWidth = desc.paragraph.maxWidth;
  textDiv.style.cssText = `position: absolute; left: 0; top: 0; width: 100%; height: 100%; white-space: ${wrapStyle}; text-align: ${alignStyle};`;
  const lines = [];
  const defaultFontSize = elements.defaultFontSize;
  textDiv.replaceChildren();
  textDiv[ParagraphCaretNodeName] = void 0;
  textDiv[ParagraphMeasurementsNodeName] = void 0;
  for (const lineRange of lineRanges) {
    const blocks = buildBlocksForLine(text, lineRange.start, lineRange.end, runs, elements);
    const line = {
      start: lineRange.start,
      end: lineRange.end,
      blocks,
      element: document.createElement("div")
    };
    lines.push(line);
    if (desc.paragraph.wrapLine && maxWidth > 0) {
      line.element.style.width = `${maxWidth}px`;
    } else if (!desc.paragraph.wrapLine) {
      line.element.style.whiteSpace = "nowrap";
    }
    const isEmpty = lineRange.start === lineRange.end;
    if (isEmpty) {
      line.element.style.height = `${defaultFontSize}px`;
    }
    for (const block of blocks) {
      line.element.appendChild(block.span);
    }
    textDiv.appendChild(line.element);
  }
  const layout = {
    paragraph: desc.paragraph,
    caret: desc.caret,
    caretVisible: false,
    lines,
    defaultFontSize,
    // fillParagraphMeasurements will take care of these
    units: [],
    inlineObjectBounds: null
  };
  return layout;
}
__name(initializeParagraph, "initializeParagraph");

// ../../gaclib/renderer/lib/src/domRenderer/elementStyles.js
var CommonStyle = "background-color: none; display: block; position:absolute; box-sizing: border-box; overflow:hidden;";
var ExtraBorderNodeName = "$GacUI-ExtraBorder";
var ParagraphLayoutNodeName = "$GacUI-ParagraphLayout";
var SvgNS = "http://www.w3.org/2000/svg";
function getStyle_FocusRectangle_Border() {
  return "outline:1px dashed white; outline-offset:-1px; mix-blend-mode: difference;";
}
__name(getStyle_FocusRectangle_Border, "getStyle_FocusRectangle_Border");
function getStyle_BorderRadius(shape) {
  switch (shape.shapeType) {
    case ElementShapeType.Rectangle:
      return "";
    case ElementShapeType.Ellipse:
      return ` border-radius: 50%;`;
    case ElementShapeType.RoundRect:
      return ` border-radius: ${shape.radiusX}px / ${shape.radiusY}px;`;
    default:
      throw new Error(`Unsupported ElementShapeType: ${shape.shapeType}`);
  }
}
__name(getStyle_BorderRadius, "getStyle_BorderRadius");
function getStyle_SolidBorder_Border(desc) {
  return `outline:1px solid ${desc.borderColor}; outline-offset:-1px;${getStyle_BorderRadius(desc.shape)}`;
}
__name(getStyle_SolidBorder_Border, "getStyle_SolidBorder_Border");
function getStyle_SolidBackground_Border(desc) {
  return `background-color: ${desc.backgroundColor};${getStyle_BorderRadius(desc.shape)}`;
}
__name(getStyle_SolidBackground_Border, "getStyle_SolidBackground_Border");
function getStyle_GradientBackground_Border(desc) {
  let side;
  switch (desc.direction) {
    case ElementGradientrDirection.Horizontal:
      side = "right";
      break;
    case ElementGradientrDirection.Vertical:
      side = "bottom";
      break;
    case ElementGradientrDirection.Slash:
      side = "left bottom";
      break;
    case ElementGradientrDirection.Backslash:
      side = "right bottom";
      break;
    default:
      throw new Error(`Unsupported ElementGradientrDirection: ${desc.direction}`);
  }
  return `background: linear-gradient(to ${side}, ${desc.leftTopColor} 0%, ${desc.rightBottomColor} 100%);${getStyle_BorderRadius(desc.shape)}`;
}
__name(getStyle_GradientBackground_Border, "getStyle_GradientBackground_Border");
function getStyle_SinkBorder(desc) {
  return `border-style: solid; border-left-color: ${desc.leftTopColor}; border-top-color: ${desc.leftTopColor}; border-right-color: ${desc.rightBottomColor}; border-bottom-color: ${desc.rightBottomColor};`;
}
__name(getStyle_SinkBorder, "getStyle_SinkBorder");
function getStyle_SinkSplitter_Extra(desc) {
  switch (desc.direction) {
    case ElementSplitterDirection.Horizontal:
      return `${CommonStyle} width: 100%; height: 2px; top: 0; bottom: 0; margin: auto; border-top: 1px solid ${desc.leftTopColor}; border-bottom: 1px solid ${desc.rightBottomColor};`;
    case ElementSplitterDirection.Vertical:
      return `${CommonStyle} width: 2px; height: 100%; left: 0; right: 0; margin: auto; border-left: 1px solid ${desc.leftTopColor}; border-right: 1px solid ${desc.rightBottomColor};`;
    default:
      throw new Error(`Unsupported ElementSplitterDirection: ${desc.direction}`);
  }
}
__name(getStyle_SinkSplitter_Extra, "getStyle_SinkSplitter_Extra");
function getStyle_InnerShadow(desc) {
  const dirs = ["left", "top", "right", "bottom"];
  const background = `${dirs.map((_dir, i) => `linear-gradient(to ${dirs[(i + 2) % 4]}, ${desc.shadowColor} 0px, transparent ${desc.thickness}px), `).join("")}transparent`;
  const position = `${dirs.map((dir) => `${dir} center`).join(", ")}`;
  return `background: ${background}; position: ${position};`;
}
__name(getStyle_InnerShadow, "getStyle_InnerShadow");
function initializePolygon(svgElement, desc) {
  svgElement.setAttribute("width", `${desc.size.x}`);
  svgElement.setAttribute("height", `${desc.size.y}`);
  svgElement.setAttribute("viewBox", `0 0 ${desc.size.x} ${desc.size.y}`);
  svgElement.style.cssText = `${CommonStyle} inset: 0; margin: auto; width: ${desc.size.x}px; height: ${desc.size.y}px;`;
  let polygonElement = svgElement.childNodes[0];
  if (polygonElement === void 0 || svgElement.childNodes.length !== 1 || !(polygonElement instanceof SVGPolygonElement)) {
    polygonElement = document.createElementNS(SvgNS, "polygon");
    svgElement.replaceChildren(polygonElement);
  }
  polygonElement.setAttribute("fill", desc.backgroundColor);
  polygonElement.setAttribute("stroke", desc.borderColor);
  polygonElement.setAttribute("stroke-width", "1");
  polygonElement.setAttribute("points", desc.points.map((p) => `${p.x},${p.y}`).join(" "));
}
__name(initializePolygon, "initializePolygon");
function hasExtraBorder(target) {
  return target[ExtraBorderNodeName] !== void 0;
}
__name(hasExtraBorder, "hasExtraBorder");
function getExtraBorder(target) {
  return target[ExtraBorderNodeName];
}
__name(getExtraBorder, "getExtraBorder");
function ensureNoExtraBorder(target) {
  const element = target[ExtraBorderNodeName];
  if (element !== void 0) {
    target.removeChild(element);
    delete target[ExtraBorderNodeName];
  }
}
__name(ensureNoExtraBorder, "ensureNoExtraBorder");
function setExtraBorder(target, element) {
  if (hasExtraBorder(target)) {
    throw new Error("setExtraBorder cannot be called when an extra border element already exists");
  }
  target.insertBefore(element, target.firstChild);
  target[ExtraBorderNodeName] = element;
}
__name(setExtraBorder, "setExtraBorder");
function ensureExtraBorderDiv(target) {
  let element = target[ExtraBorderNodeName];
  if (!(element instanceof HTMLDivElement)) {
    ensureNoExtraBorder(target);
    element = document.createElement("div");
    setExtraBorder(target, element);
  }
  return element;
}
__name(ensureExtraBorderDiv, "ensureExtraBorderDiv");
function applyTypedStyle_WithoutExtraBorder(target, desc, getStyle) {
  target.style.cssText = `${CommonStyle} ${getStyle(desc)}`;
}
__name(applyTypedStyle_WithoutExtraBorder, "applyTypedStyle_WithoutExtraBorder");
function applyTypedStyle_WithExtraBorder(target, desc, getStyle) {
  target.style.cssText = CommonStyle;
  const element = ensureExtraBorderDiv(target);
  element.style.cssText = `${CommonStyle} left: 0px; top: 0px; width: 100%; height: 100%; ${getStyle(desc)}`;
}
__name(applyTypedStyle_WithExtraBorder, "applyTypedStyle_WithExtraBorder");
function applyTypedStyle_WithShapedBorder(target, desc, getStyle) {
  if (desc.shape.shapeType === ElementShapeType.Rectangle) {
    ensureNoExtraBorder(target);
    applyTypedStyle_WithoutExtraBorder(target, desc, getStyle);
  } else {
    applyTypedStyle_WithExtraBorder(target, desc, getStyle);
  }
}
__name(applyTypedStyle_WithShapedBorder, "applyTypedStyle_WithShapedBorder");
function getParagraphLayout(target) {
  return target[ParagraphLayoutNodeName];
}
__name(getParagraphLayout, "getParagraphLayout");
function setParagraphLayout(target, element) {
  target[ParagraphLayoutNodeName] = element;
}
__name(setParagraphLayout, "setParagraphLayout");
function applyTypedStyle(target, typedDesc, elements) {
  const savedLeft = target.style.left;
  const savedTop = target.style.top;
  const savedWidth = target.style.width;
  const savedHeight = target.style.height;
  const elementType = typedDesc.type;
  switch (typedDesc.type) {
    case RendererType.Raw:
      target.style.cssText = CommonStyle;
      break;
    case RendererType.FocusRectangle:
      applyTypedStyle_WithExtraBorder(target, void 0, getStyle_FocusRectangle_Border);
      break;
    case RendererType.SolidBorder:
      applyTypedStyle_WithShapedBorder(target, typedDesc.desc, getStyle_SolidBorder_Border);
      break;
    case RendererType.SolidBackground:
      applyTypedStyle_WithShapedBorder(target, typedDesc.desc, getStyle_SolidBackground_Border);
      break;
    case RendererType.GradientBackground:
      applyTypedStyle_WithShapedBorder(target, typedDesc.desc, getStyle_GradientBackground_Border);
      break;
    case RendererType.SinkBorder:
      applyTypedStyle_WithExtraBorder(target, typedDesc.desc, getStyle_SinkBorder);
      break;
    case RendererType.SinkSplitter:
      {
        target.style.cssText = CommonStyle;
        const element = ensureExtraBorderDiv(target);
        element.style.cssText = getStyle_SinkSplitter_Extra(typedDesc.desc);
      }
      break;
    case RendererType.InnerShadow:
      applyTypedStyle_WithoutExtraBorder(target, typedDesc.desc, getStyle_InnerShadow);
      break;
    case RendererType.ImageFrame:
      applyTypedStyle_WithoutExtraBorder(target, typedDesc.desc, getStyle_ImageFrame);
      break;
    case RendererType.Polygon:
      {
        target.style.cssText = CommonStyle;
        if (typedDesc.desc.points) {
          let svgElement = target[ExtraBorderNodeName];
          if (!(svgElement instanceof SVGSVGElement)) {
            ensureNoExtraBorder(target);
            svgElement = document.createElementNS(SvgNS, "svg");
            setExtraBorder(target, svgElement);
          }
          initializePolygon(svgElement, typedDesc.desc);
        } else {
          ensureNoExtraBorder(target);
        }
      }
      break;
    case RendererType.SolidLabel:
      {
        target.style.cssText = CommonStyle;
        const textDiv = ensureExtraBorderDiv(target);
        initializeText(textDiv, typedDesc.desc);
      }
      break;
    case RendererType.DocumentParagraph:
      {
        target.style.cssText = CommonStyle;
        const textDiv = ensureExtraBorderDiv(target);
        const existingLayout = getParagraphLayout(target);
        if (existingLayout === void 0) {
          const layout = initializeParagraph(textDiv, typedDesc.desc, elements);
          setParagraphLayout(target, layout);
        } else {
          const layout = initializeParagraph(textDiv, typedDesc.desc, elements);
          setParagraphLayout(target, layout);
        }
      }
      break;
    default:
      throw new Error(`Unsupported renderer type: ${elementType}`);
  }
  if (savedLeft !== "") {
    target.style.left = savedLeft;
  }
  if (savedTop !== "") {
    target.style.top = savedTop;
  }
  if (savedWidth !== "") {
    target.style.width = savedWidth;
  }
  if (savedHeight !== "") {
    target.style.height = savedHeight;
  }
}
__name(applyTypedStyle, "applyTypedStyle");
function applyCommonStyle(target) {
  target.style.cssText = CommonStyle;
}
__name(applyCommonStyle, "applyCommonStyle");
function applyBounds(target, bounds) {
  target.style.left = `${bounds.x1}px`;
  target.style.top = `${bounds.y1}px`;
  target.style.width = `${bounds.x2 - bounds.x1}px`;
  target.style.height = `${bounds.y2 - bounds.y1}px`;
  const paragraphLayout = getParagraphLayout(target);
  if (paragraphLayout) {
    fillParagraphMeasurements(getExtraBorder(target), paragraphLayout);
  }
}
__name(applyBounds, "applyBounds");
function renderDebugInfo(target) {
  const paragraphLayout = getParagraphLayout(target);
  if (paragraphLayout) {
    renderParagraphMeasurements(getExtraBorder(target), paragraphLayout);
  }
}
__name(renderDebugInfo, "renderDebugInfo");

// ../../gaclib/renderer/lib/src/domRenderer/elementMeasurer.js
var ElementHTMLMeasurer = class {
  static {
    __name(this, "ElementHTMLMeasurer");
  }
  _responses;
  _measuring = { fontHeights: [], minSizes: [], createdImages: [], inlineObjectBounds: [] };
  _idRespondRendererEndRendering = void 0;
  _textElementForTesting = document.createElement("div");
  _measuringSolidLabels = [];
  _measuredFontHeights = /* @__PURE__ */ new Map();
  _measuredTotalSizes = /* @__PURE__ */ new Map();
  _measuringImageTasks = [];
  _measuringImageTasksExecuted = 0;
  _measuringImageTasksExecuting = false;
  constructor(_responses) {
    this._responses = _responses;
  }
  requestMeasureSolidLabel(desc) {
    if (desc.measuringRequest !== null) {
      this._measuringSolidLabels.push([desc.id, desc.measuringRequest]);
    }
  }
  requestImageMetadata(id, imageCreation, renderingRecord) {
    this._measuringImageTasks.push([id, imageCreation]);
    void this._runMeasuringImageTasks(renderingRecord);
  }
  RequestRendererEndRendering(id, renderingRecord) {
    this._idRespondRendererEndRendering = id;
    if (this._measuringImageTasksExecuted === this._measuringImageTasks.length) {
      this._fireRespondRendererEndRendering(renderingRecord);
    }
  }
  _measureSolidLabel(id, request, renderingRecord) {
    if (renderingRecord.elements.getType(id) === void 0) {
      return void 0;
    }
    const typedDesc = renderingRecord.elements.getDescEnsured(id);
    if (typedDesc.type !== RendererType.SolidLabel) {
      throw new Error(`Element type mismatch: expected ${RendererType.SolidLabel}, got ${typedDesc.type}`);
    }
    const actualRequest = typedDesc.desc.measuringRequest ?? request;
    switch (actualRequest) {
      case ElementSolidLabelMeasuringRequest.FontHeight:
        {
          const key = `${typedDesc.desc.font.size}:${typedDesc.desc.font.fontFamily}`;
          if (this._measuredFontHeights.has(key)) {
            return void 0;
          }
          this._textElementForTesting.style.cssText = `box-sizing: border-box; width: max-content; height: max-content; ${getFontStyle(typedDesc.desc)}`;
          this._textElementForTesting.textContent = "Ag";
          document.body.appendChild(this._textElementForTesting);
          const computedStyle = window.getComputedStyle(this._textElementForTesting);
          const lineHeight = parseFloat(computedStyle.lineHeight);
          document.body.removeChild(this._textElementForTesting);
          const result = {
            fontFamily: typedDesc.desc.font.fontFamily,
            fontSize: typedDesc.desc.font.size,
            height: Math.round(lineHeight)
          };
          this._measuredFontHeights.set(key, result);
          this._measuring.fontHeights.push(result);
        }
        break;
      case ElementSolidLabelMeasuringRequest.TotalSize:
        {
          const virtualDom = renderingRecord.elementToDoms.get(id);
          if (!virtualDom) {
            return actualRequest;
          }
          this._textElementForTesting.style.cssText = `box-sizing: border-box; width: max-content; height: max-content; ${getFontStyle(typedDesc.desc)} white-space: ${typedDesc.desc.wrapLine ? "pre-wrap" : "pre"};`;
          if (typedDesc.desc.wrapLine) {
            const width = virtualDom.bounds.x2 - virtualDom.bounds.x1;
            this._textElementForTesting.style.width = `${width}px`;
          }
          this._textElementForTesting.textContent = normalizeText(typedDesc.desc);
          if (this._textElementForTesting.textContent === "") {
            this._textElementForTesting.textContent = " ";
          }
          document.body.appendChild(this._textElementForTesting);
          const minSize = {
            x: this._textElementForTesting.offsetWidth,
            y: this._textElementForTesting.offsetHeight
          };
          document.body.removeChild(this._textElementForTesting);
          if (this._measuredTotalSizes.has(typedDesc.desc.id)) {
            const original = this._measuredTotalSizes.get(typedDesc.desc.id);
            if (original.minSize.x === minSize.x && original.minSize.y === minSize.y) {
              return void 0;
            }
          }
          const result = {
            id: typedDesc.desc.id,
            minSize
          };
          this._measuredTotalSizes.set(typedDesc.desc.id, result);
          this._measuring.minSizes.push(result);
        }
        break;
    }
    return void 0;
  }
  _fireRespondRendererEndRendering(renderingRecord) {
    if (this._idRespondRendererEndRendering !== void 0) {
      const remaining = [];
      for (const [id, request] of this._measuringSolidLabels) {
        const nextRequest = this._measureSolidLabel(id, request, renderingRecord);
        if (nextRequest !== void 0) {
          remaining.push([id, nextRequest]);
        }
      }
      this._measuringSolidLabels = remaining;
      for (const [, virtualDom] of renderingRecord.elementToDoms) {
        const htmlElement = "htmlElement" in virtualDom ? virtualDom.htmlElement : void 0;
        if (htmlElement !== void 0) {
          const paragraphLayout = getParagraphLayout(htmlElement);
          if (paragraphLayout !== void 0 && paragraphLayout.inlineObjectBounds !== null) {
            for (const bound of paragraphLayout.inlineObjectBounds) {
              this._measuring.inlineObjectBounds.push(bound);
            }
          }
        }
      }
      this._responses.RespondRendererEndRendering(this._idRespondRendererEndRendering, this._measuring);
      this._measuring = { fontHeights: [], minSizes: [], createdImages: [], inlineObjectBounds: [] };
      this._idRespondRendererEndRendering = void 0;
    }
  }
  async _runMeasuringImageTasks(renderingRecord) {
    if (this._measuringImageTasksExecuting) {
      return;
    }
    this._measuringImageTasksExecuting = true;
    while (this._measuringImageTasksExecuted < this._measuringImageTasks.length) {
      const [id, imageCreation] = this._measuringImageTasks[this._measuringImageTasksExecuted++];
      const formatType = getImageFormatType(imageCreation.imageData);
      const contentType = getImageContentType(formatType);
      const imageUrl = getImageDataUrl(contentType, imageCreation.imageData);
      const imageElement = document.createElement("img");
      const imageLoaded = new Promise((resolve) => {
        imageElement.onload = () => resolve(true);
        imageElement.onerror = () => resolve(false);
      });
      imageElement.src = imageUrl;
      let imageMetadata;
      if (await imageLoaded) {
        imageMetadata = {
          id: imageCreation.id,
          format: formatType,
          frames: [{
            size: {
              x: imageElement.naturalWidth,
              y: imageElement.naturalHeight
            }
          }]
        };
      } else {
        imageMetadata = {
          id: imageCreation.id,
          format: ImageFormatType.Unknown,
          frames: [{ size: { x: 1, y: 1 } }]
        };
      }
      if (id === void 0) {
        this._measuring.createdImages.push(imageMetadata);
      } else {
        this._responses.RespondImageCreated(id, imageMetadata);
      }
    }
    this._fireRespondRendererEndRendering(renderingRecord);
    this._measuringImageTasksExecuting = false;
    this._measuringImageTasks = [];
    this._measuringImageTasksExecuted = 0;
  }
};

// ../../gaclib/renderer/lib/src/dom/virtualDom.js
var RootVirtualDomId = -1;
var ClippedVirtualDomId = -2;
var VirtualDomBase = class {
  static {
    __name(this, "VirtualDomBase");
  }
  id;
  _props;
  _parent;
  _children;
  constructor(id, _props) {
    this.id = id;
    this._props = _props;
    this._parent = void 0;
    this._children = [];
  }
  get parent() {
    return this._parent;
  }
  get children() {
    return this._children;
  }
  get bounds() {
    if (!this.parent) {
      return this._props.globalBounds;
    }
    const parentProps = this.parent.props;
    return {
      x1: this._props.globalBounds.x1 - parentProps.globalBounds.x1,
      y1: this._props.globalBounds.y1 - parentProps.globalBounds.y1,
      x2: this._props.globalBounds.x2 - parentProps.globalBounds.x1,
      y2: this._props.globalBounds.y2 - parentProps.globalBounds.y1
    };
  }
  get props() {
    return this._props;
  }
  updateTypedDesc(elementId, typedDesc) {
    void elementId;
    void typedDesc;
    throw new Error("updateTypedDesc is not supported for this virtual DOM type.");
  }
  updateGlobalBounds(globalBounds) {
    void globalBounds;
    throw new Error("updateGlobalBounds is not supported for this virtual DOM type.");
  }
  updateProps(props) {
    void props;
    throw new Error("updateProps is not supported for this virtual DOM type.");
  }
  isRootOfSelf(child) {
    let current = this;
    while (true) {
      if (!current._parent) {
        return current === child;
      }
      current = current._parent;
    }
  }
  updateChildren(children) {
    const expectedType = this.getExpectedChildType();
    const self = this;
    for (const child of children) {
      if (!this.isExpectedChildType(child)) {
        throw new Error(`All children must be ${expectedType} instances.`);
      }
      if (child === self) {
        throw new Error("Child cannot be this node itself.");
      }
      if (child._parent !== void 0 && child._parent !== self) {
        throw new Error("Child already has a different parent.");
      }
      if (this.isRootOfSelf(child)) {
        throw new Error("Child cannot be the root of this node.");
      }
    }
    for (const child of this._children) {
      child._parent = void 0;
    }
    this._children = [...children];
    for (const child of this._children) {
      child._parent = self;
    }
    this.onUpdateChildren(this._children);
  }
};
var VirtualDomBaseRoot = class extends VirtualDomBase {
  static {
    __name(this, "VirtualDomBaseRoot");
  }
  constructor() {
    super(RootVirtualDomId, {
      globalBounds: { x1: 0, y1: 0, x2: 0, y2: 0 },
      hitTestResult: void 0,
      cursor: void 0,
      typedDesc: void 0,
      elementId: void 0
    });
  }
};
var VirtualDomBaseValidArea = class extends VirtualDomBase {
  static {
    __name(this, "VirtualDomBaseValidArea");
  }
  constructor(id, validArea) {
    super(id, {
      globalBounds: validArea,
      hitTestResult: void 0,
      cursor: void 0,
      typedDesc: void 0,
      elementId: void 0
    });
  }
  updateGlobalBounds(globalBounds) {
    this._props = {
      ...this._props,
      globalBounds
    };
  }
};
var VirtualDomBaseOrdinary = class extends VirtualDomBase {
  static {
    __name(this, "VirtualDomBaseOrdinary");
  }
  constructor(id, props) {
    super(id, props);
  }
  updateTypedDesc(elementId, typedDesc) {
    if (elementId === void 0 !== (typedDesc === void 0)) {
      throw new Error("elementId and typedDesc must be both undefined or not undefined");
    }
    this._props = {
      ...this._props,
      elementId,
      typedDesc
    };
    this.onUpdateTypedDesc(elementId, typedDesc);
  }
  updateGlobalBounds(globalBounds) {
    this._props = {
      ...this._props,
      globalBounds
    };
  }
  updateProps(props) {
    this.updateTypedDesc(props.elementId, props.typedDesc);
    this._props = {
      ...props
    };
  }
};

// ../../gaclib/renderer/lib/src/domRenderer/virtualDomRenderer.js
function mapCursorToCSS(cursor) {
  switch (cursor) {
    case WindowSystemCursorType.SmallWaiting:
    case WindowSystemCursorType.LargeWaiting:
      return "wait";
    case WindowSystemCursorType.Arrow:
      return "default";
    case WindowSystemCursorType.Cross:
      return "crosshair";
    case WindowSystemCursorType.Hand:
      return "pointer";
    case WindowSystemCursorType.Help:
      return "help";
    case WindowSystemCursorType.IBeam:
      return "text";
    case WindowSystemCursorType.SizeAll:
      return "move";
    case WindowSystemCursorType.SizeNESW:
      return "nesw-resize";
    case WindowSystemCursorType.SizeNS:
      return "ns-resize";
    case WindowSystemCursorType.SizeNWSE:
      return "nwse-resize";
    case WindowSystemCursorType.SizeWE:
      return "ew-resize";
    default:
      return void 0;
  }
}
__name(mapCursorToCSS, "mapCursorToCSS");
function mapHitTestToCSS(hitTestResult) {
  switch (hitTestResult) {
    case WindowHitTestResult.BorderLeft:
    case WindowHitTestResult.BorderRight:
      return "ew-resize";
    case WindowHitTestResult.BorderTop:
    case WindowHitTestResult.BorderBottom:
      return "ns-resize";
    case WindowHitTestResult.BorderLeftTop:
    case WindowHitTestResult.BorderRightBottom:
      return "nwse-resize";
    case WindowHitTestResult.BorderRightTop:
    case WindowHitTestResult.BorderLeftBottom:
      return "nesw-resize";
    default:
      return void 0;
  }
}
__name(mapHitTestToCSS, "mapHitTestToCSS");
var VirtualDomHtmlRoot = class extends VirtualDomBaseRoot {
  static {
    __name(this, "VirtualDomHtmlRoot");
  }
  htmlElement;
  constructor() {
    super();
    this.htmlElement = document.createElement("div");
  }
  getExpectedChildType() {
    return "VirtualDomHtmlValidArea or VirtualDomHtmlOrdinary";
  }
  isExpectedChildType(child) {
    return child instanceof VirtualDomHtmlValidArea || child instanceof VirtualDomHtmlOrdinary;
  }
  onUpdateChildren(children) {
    const htmlChildren = children.map((child) => child.htmlElement);
    this.htmlElement.replaceChildren(...htmlChildren);
    const border = getExtraBorder(this.htmlElement);
    if (border) {
      this.htmlElement.insertBefore(border, this.htmlElement.firstChild);
    }
  }
};
var VirtualDomHtmlValidArea = class _VirtualDomHtmlValidArea extends VirtualDomBaseValidArea {
  static {
    __name(this, "VirtualDomHtmlValidArea");
  }
  htmlElement;
  constructor(id, validArea) {
    super(id, validArea);
    this.htmlElement = document.createElement("div");
  }
  getExpectedChildType() {
    return "VirtualDomHtmlValidArea or VirtualDomHtmlOrdinary";
  }
  isExpectedChildType(child) {
    return child instanceof _VirtualDomHtmlValidArea || child instanceof VirtualDomHtmlOrdinary;
  }
  onUpdateChildren(children) {
    const htmlChildren = children.map((child) => child.htmlElement);
    this.htmlElement.replaceChildren(...htmlChildren);
    const border = getExtraBorder(this.htmlElement);
    if (border) {
      this.htmlElement.insertBefore(border, this.htmlElement.firstChild);
    }
  }
};
var VirtualDomHtmlOrdinary = class _VirtualDomHtmlOrdinary extends VirtualDomBaseOrdinary {
  static {
    __name(this, "VirtualDomHtmlOrdinary");
  }
  elements;
  htmlElement;
  constructor(id, props, elements, pendingElements) {
    super(id, props);
    this.elements = elements;
    const pendingHtml = props.elementId !== void 0 && pendingElements !== void 0 ? pendingElements.get(props.elementId) : void 0;
    if (pendingHtml !== void 0) {
      this.htmlElement = pendingHtml;
      pendingElements.delete(props.elementId);
    } else {
      this.htmlElement = document.createElement("div");
      this.onUpdateTypedDesc(props.elementId, props.typedDesc);
    }
    this.applyCursorStyle(props);
  }
  getExpectedChildType() {
    return "VirtualDomHtmlValidArea or VirtualDomHtmlOrdinary";
  }
  isExpectedChildType(child) {
    return child instanceof VirtualDomHtmlValidArea || child instanceof _VirtualDomHtmlOrdinary;
  }
  onUpdateTypedDesc(elementId, typedDesc) {
    void elementId;
    if (typedDesc === void 0) {
      applyCommonStyle(this.htmlElement);
    } else {
      applyTypedStyle(this.htmlElement, typedDesc, this.elements);
    }
    this.applyCursorStyle(this.props);
  }
  applyCursorStyle(props) {
    let cursorCSS;
    if (props.cursor !== void 0) {
      cursorCSS = mapCursorToCSS(props.cursor);
    } else if (props.hitTestResult !== void 0) {
      cursorCSS = mapHitTestToCSS(props.hitTestResult);
    }
    if (cursorCSS !== void 0) {
      this.htmlElement.style.cursor = cursorCSS;
    } else {
      this.htmlElement.style.removeProperty("cursor");
    }
  }
  updateProps(props) {
    super.updateProps(props);
    this.applyCursorStyle(props);
  }
  onUpdateChildren(children) {
    const htmlChildren = children.map((child) => child.htmlElement);
    this.htmlElement.replaceChildren(...htmlChildren);
    const border = getExtraBorder(this.htmlElement);
    if (border) {
      this.htmlElement.insertBefore(border, this.htmlElement.firstChild);
    }
  }
};
var VirtualDomHtmlProvider = class {
  static {
    __name(this, "VirtualDomHtmlProvider");
  }
  elements;
  constructor(elements) {
    this.elements = elements;
  }
  createDom(id, props, pendingElements) {
    return new VirtualDomHtmlOrdinary(id, props, this.elements, pendingElements);
  }
  createDomForRoot() {
    return new VirtualDomHtmlRoot();
  }
  createDomForValidArea(id, validArea) {
    return new VirtualDomHtmlValidArea(id, validArea);
  }
  fixBounds(virtualDom, target, width, height) {
    if (!(virtualDom instanceof VirtualDomHtmlRoot || virtualDom instanceof VirtualDomHtmlValidArea || virtualDom instanceof VirtualDomHtmlOrdinary)) {
      throw new Error("VirtualDom must be VirtualDomHtml instance.");
    }
    if (virtualDom.parent !== void 0) {
      throw new Error("fixBounds can only be called on root VirtualDom (with no parent).");
    }
    virtualDom.htmlElement.style.position = "relative";
    virtualDom.htmlElement.style.boxSizing = "border-box";
    virtualDom.htmlElement.style.width = `${width}px`;
    virtualDom.htmlElement.style.height = `${height}px`;
    target.replaceChildren(virtualDom.htmlElement);
    this.fixBoundsRecursive(virtualDom);
  }
  fixBoundsRecursive(virtualDom) {
    for (const child of virtualDom.children) {
      if (child instanceof VirtualDomHtmlRoot || child instanceof VirtualDomHtmlValidArea || child instanceof VirtualDomHtmlOrdinary) {
        applyBounds(child.htmlElement, child.bounds);
        if (this.elements.renderDebugInfo) {
          renderDebugInfo(child.htmlElement);
        }
        if (child.props.typedDesc && child.props.typedDesc.type === RendererType.SolidLabel && child.props.typedDesc.desc.ellipse && child.props.typedDesc.desc.wrapLine) {
          onSolidLabelResized(child.htmlElement);
        }
        this.fixBoundsRecursive(child);
      }
    }
  }
};

// ../../gaclib/renderer/lib/src/GacUIElementManager.js
function getDefaultElementManagerConfig() {
  return {
    renderDebugInfo: false,
    defaultFontSize: 12
  };
}
__name(getDefaultElementManagerConfig, "getDefaultElementManagerConfig");
var ElementManager = class {
  static {
    __name(this, "ElementManager");
  }
  _elements = /* @__PURE__ */ new Map();
  _config;
  constructor(config) {
    this._config = getDefaultElementManagerConfig();
    if (config) {
      this._config = Object.assign(this._config, config);
    }
  }
  get elements() {
    return this._elements;
  }
  get renderDebugInfo() {
    return this._config.renderDebugInfo;
  }
  get defaultFontSize() {
    return this._config.defaultFontSize;
  }
  set defaultFontSize(value) {
    this._config.defaultFontSize = value;
  }
  create(id, type) {
    if (this._elements.has(id)) {
      throw new Error(`Element with id ${id} already exists`);
    }
    this._elements.set(id, { type });
  }
  createWithDesc(id, typedDesc) {
    this.create(id, typedDesc.type);
    this.updateDesc(id, typedDesc);
  }
  destroy(id) {
    this._elements.delete(id);
  }
  getType(id) {
    const element = this._elements.get(id);
    return element?.type;
  }
  getDesc(id) {
    const element = this._elements.get(id);
    return element?.desc;
  }
  getDescEnsured(id) {
    const desc = this.getDesc(id);
    if (!desc) {
      throw new Error(`Element with id ${id} does not have a description`);
    }
    return desc;
  }
  updateDesc(id, desc) {
    const element = this._elements.get(id);
    if (element === void 0) {
      throw new Error(`Element with id ${id} does not exist`);
    }
    if (element.type !== desc.type) {
      throw new Error(`Element type mismatch: expected ${element.type}, got ${desc.type}`);
    }
    element.desc = desc;
  }
};

// ../../gaclib/renderer/lib/src/dom/virtualDomBuilding.js
function intersectRects(rect1, rect2) {
  return {
    x1: Math.max(rect1.x1, rect2.x1),
    y1: Math.max(rect1.y1, rect2.y1),
    x2: Math.min(rect1.x2, rect2.x2),
    y2: Math.min(rect1.y2, rect2.y2)
  };
}
__name(intersectRects, "intersectRects");
function areRectsEqual(rect1, rect2) {
  return rect1.x1 === rect2.x1 && rect1.y1 === rect2.y1 && rect1.x2 === rect2.x2 && rect1.y2 === rect2.y2;
}
__name(areRectsEqual, "areRectsEqual");
function processAndUpdateChildren(renderingDom, virtualDom, record, provider) {
  const parentValidArea = renderingDom.id === RootVirtualDomId ? void 0 : renderingDom.content.validArea;
  const children = [];
  if (renderingDom.children) {
    for (const child of renderingDom.children) {
      if (child !== null) {
        const childVirtualDom = createVirtualDomTree(child, record, provider, parentValidArea);
        children.push(childVirtualDom);
      }
    }
  }
  virtualDom.updateChildren(children);
}
__name(processAndUpdateChildren, "processAndUpdateChildren");
function fillVirtualDom(content, record, provider, id, pendingElements) {
  let typedDesc = void 0;
  if (content.element !== null) {
    typedDesc = record.elements.getDescEnsured(content.element);
  }
  const props = {
    globalBounds: content.bounds,
    hitTestResult: content.hitTestResult !== null ? content.hitTestResult : void 0,
    cursor: content.cursor !== null ? content.cursor : void 0,
    typedDesc,
    elementId: content.element !== null ? content.element : void 0
  };
  const virtualDom = provider.createDom(id, props, pendingElements);
  if (content.element !== null) {
    if (record.elementToDoms.has(content.element)) {
      throw new Error(`RenderingDomContent.element ID ${content.element} is already mapped to another IVirtualDom. Each element must have 1:1 mapping with IVirtualDom.`);
    }
    record.elementToDoms.set(content.element, virtualDom);
  }
  return virtualDom;
}
__name(fillVirtualDom, "fillVirtualDom");
function createVirtualDom(id, content, record, provider, parentValidArea, pendingElements) {
  if (record.doms.has(id)) {
    throw new Error(`Duplicate RenderingDom ID found: ${id}. Each RenderingDom must have a unique ID.`);
  }
  const naturalValidArea = parentValidArea ? intersectRects(content.bounds, parentValidArea) : content.bounds;
  if (areRectsEqual(content.validArea, naturalValidArea)) {
    const virtualDom = fillVirtualDom(content, record, provider, id, pendingElements);
    if (id >= 0) {
      record.doms.set(id, virtualDom);
    }
    return [virtualDom, virtualDom];
  } else {
    const outerVirtualDom = provider.createDomForValidArea(id, content.validArea);
    const innerVirtualDom = fillVirtualDom(content, record, provider, ClippedVirtualDomId, pendingElements);
    if (id >= 0) {
      record.doms.set(id, outerVirtualDom);
    }
    outerVirtualDom.updateChildren([innerVirtualDom]);
    return [outerVirtualDom, innerVirtualDom];
  }
}
__name(createVirtualDom, "createVirtualDom");
function createVirtualDomTree(renderingDom, record, provider, parentValidArea) {
  const [outerVirtualDom, innerVirtualDom] = createVirtualDom(renderingDom.id, renderingDom.content, record, provider, parentValidArea);
  processAndUpdateChildren(renderingDom, innerVirtualDom, record, provider);
  return outerVirtualDom;
}
__name(createVirtualDomTree, "createVirtualDomTree");
function createVirtualDomFromRenderingDom(renderingDom, elements, provider) {
  if (renderingDom.id !== RootVirtualDomId || renderingDom.content.hitTestResult !== null || renderingDom.content.cursor !== null || renderingDom.content.element !== null || renderingDom.content.bounds.x1 !== 0 || renderingDom.content.bounds.y1 !== 0 || renderingDom.content.bounds.x2 !== 0 || renderingDom.content.bounds.y2 !== 0 || renderingDom.content.validArea.x1 !== 0 || renderingDom.content.validArea.y1 !== 0 || renderingDom.content.validArea.x2 !== 0 || renderingDom.content.validArea.y2 !== 0) {
    throw new Error("Root RenderingDom does not match expected screen format");
  }
  const record = {
    screen: provider.createDomForRoot(),
    doms: /* @__PURE__ */ new Map(),
    elementToDoms: /* @__PURE__ */ new Map(),
    elements
  };
  processAndUpdateChildren(renderingDom, record.screen, record, provider);
  return record;
}
__name(createVirtualDomFromRenderingDom, "createVirtualDomFromRenderingDom");
function collectPropsBeforeDiff(outerDom, parentValidArea, props) {
  let validArea;
  let innerDom = outerDom;
  if (outerDom.id >= 0) {
    const isValidAreaDom = outerDom.id >= 0 && outerDom.children.length === 1 && outerDom.children[0].id === ClippedVirtualDomId;
    if (isValidAreaDom) {
      innerDom = outerDom.children[0];
    }
    let parent = outerDom.parent;
    if (parent.id === ClippedVirtualDomId) {
      parent = parent.parent;
    }
    const naturalValidArea = parentValidArea ? intersectRects(parentValidArea, innerDom.props.globalBounds) : innerDom.props.globalBounds;
    validArea = isValidAreaDom ? outerDom.props.globalBounds : naturalValidArea;
    props.set(outerDom.id, {
      bounds: innerDom.props.globalBounds,
      validArea,
      parentId: parent.id,
      outerDom,
      innerDom
    });
  }
  for (const child of innerDom.children) {
    collectPropsBeforeDiff(child, validArea, props);
  }
}
__name(collectPropsBeforeDiff, "collectPropsBeforeDiff");
function collectPropsAfterDiff(diffs, props) {
  for (const diff of diffs) {
    if (diff.diffType == RenderingDom_DiffType.Created) {
      if (!diff.content) {
        throw new Error(`RenderingDom_Diff with Created must have content available: ${JSON.stringify(diff, void 0, 4)}`);
      }
      if (diff.id < 0 || props.has(diff.id)) {
        throw new Error(`RenderingDom_Diff with Created must use unused ID: ${JSON.stringify(diff, void 0, 4)}`);
      }
      props.set(diff.id, {
        bounds: diff.content.bounds,
        validArea: diff.content.validArea,
        parentId: -2
      });
    }
  }
  for (const diff of diffs) {
    if (diff.diffType == RenderingDom_DiffType.Modified) {
      if (diff.id === RootVirtualDomId) {
        if (diff.content) {
          throw new Error(`RenderingDom_Diff with Modified should not have content for RootVirtualDomId: ${JSON.stringify(diff, void 0, 4)}`);
        }
        if (!diff.children) {
          throw new Error(`RenderingDom_Diff with Modified must have children for RootVirtualDomId: ${JSON.stringify(diff, void 0, 4)}`);
        }
      } else {
        if (!props.has(diff.id)) {
          throw new Error(`RenderingDom_Diff with Modified must use existing ID: ${JSON.stringify(diff, void 0, 4)}`);
        }
        if (diff.content) {
          const propsBeforeDiff = props.get(diff.id);
          propsBeforeDiff.bounds = diff.content.bounds;
          propsBeforeDiff.validArea = diff.content.validArea;
        }
      }
    }
  }
  for (const diff of diffs) {
    if (diff.diffType == RenderingDom_DiffType.Deleted) {
      if (!props.has(diff.id)) {
        throw new Error(`RenderingDom_Diff with Deleted must use existing ID: ${JSON.stringify(diff, void 0, 4)}`);
      }
    }
  }
  for (const diff of diffs) {
    switch (diff.diffType) {
      case RenderingDom_DiffType.Created:
      case RenderingDom_DiffType.Modified:
        if (diff.children) {
          for (const child of diff.children) {
            if (!props.has(child)) {
              throw new Error(`RenderingDom_Diff should not use invalid child id ${diff.diffType}: ${JSON.stringify(diff, void 0, 4)}`);
            }
            props.get(child).parentId = diff.id;
          }
        }
        break;
    }
  }
  for (const diff of diffs) {
    if (diff.diffType == RenderingDom_DiffType.Created) {
      if (props.get(diff.id).parentId === -2) {
        throw new Error(`RenderingDom_Diff should not be dangling: ${JSON.stringify(diff, void 0, 4)}`);
      }
    }
  }
}
__name(collectPropsAfterDiff, "collectPropsAfterDiff");
function ensureChildrenClippedHierarchy(innerDom, validArea, props, record, provider) {
  const newChildren = innerDom.children.map((child) => ensureClippedHierarchy(child, validArea, props, record, provider));
  if (innerDom.children.length === newChildren.length && innerDom.children.every((child, index) => child === newChildren[index])) {
    return;
  }
  innerDom.updateChildren(newChildren);
}
__name(ensureChildrenClippedHierarchy, "ensureChildrenClippedHierarchy");
function ensureClippedHierarchy(virtualDom, validArea, props, record, provider) {
  const currentProps = props.get(virtualDom.id);
  const naturalValidArea = validArea ? intersectRects(validArea, currentProps.bounds) : currentProps.bounds;
  const expectedClipped = !areRectsEqual(currentProps.validArea, naturalValidArea);
  const actualClipped = currentProps.outerDom !== currentProps.innerDom;
  if (expectedClipped !== actualClipped) {
    const domProps = currentProps.innerDom.props;
    const children = [...currentProps.innerDom.children];
    currentProps.innerDom.updateChildren([]);
    if (expectedClipped) {
      currentProps.outerDom = provider.createDomForValidArea(virtualDom.id, currentProps.validArea);
      currentProps.innerDom = provider.createDom(ClippedVirtualDomId, domProps);
      currentProps.outerDom.updateChildren([currentProps.innerDom]);
    } else {
      currentProps.outerDom = provider.createDom(virtualDom.id, domProps);
      currentProps.innerDom = currentProps.outerDom;
    }
    currentProps.innerDom.updateChildren(children);
    record.doms.set(currentProps.outerDom.id, currentProps.outerDom);
    if (domProps.elementId !== void 0) {
      record.elementToDoms.set(domProps.elementId, currentProps.innerDom);
    }
  } else if (expectedClipped && !areRectsEqual(currentProps.validArea, currentProps.outerDom.props.globalBounds)) {
    currentProps.outerDom.updateGlobalBounds(currentProps.validArea);
  }
  ensureChildrenClippedHierarchy(currentProps.innerDom, currentProps.validArea, props, record, provider);
  return currentProps.outerDom;
}
__name(ensureClippedHierarchy, "ensureClippedHierarchy");
function updateVirtualDomWithRenderingDomDiff(diffsInOrder, record, provider, pendingElements) {
  if (!diffsInOrder.diffsInOrder) {
    return;
  }
  const props = /* @__PURE__ */ new Map();
  collectPropsBeforeDiff(record.screen, void 0, props);
  collectPropsAfterDiff(diffsInOrder.diffsInOrder, props);
  for (const diff of diffsInOrder.diffsInOrder) {
    const self = props.get(diff.id);
    switch (diff.diffType) {
      case RenderingDom_DiffType.Created:
        {
          const parent = props.get(self.parentId);
          const [outerDom, innerDom] = createVirtualDom(diff.id, diff.content, record, provider, parent?.validArea, pendingElements);
          self.innerDom = innerDom;
          self.outerDom = outerDom;
        }
        break;
      case RenderingDom_DiffType.Modified:
        if (diff.children) {
          if (diff.id === RootVirtualDomId) {
            record.screen.updateChildren([]);
          } else {
            self.innerDom.updateChildren([]);
          }
        }
        if (diff.content) {
          const newProps = {
            globalBounds: diff.content.bounds,
            hitTestResult: diff.content.hitTestResult !== null ? diff.content.hitTestResult : void 0,
            cursor: diff.content.cursor !== null ? diff.content.cursor : void 0,
            typedDesc: diff.content.element !== null ? record.elements.getDescEnsured(diff.content.element) : void 0,
            elementId: diff.content.element !== null ? diff.content.element : void 0
          };
          if (self.innerDom.props.elementId !== (diff.content.element !== null ? diff.content.element : void 0)) {
            if (self.innerDom.props.elementId !== void 0) {
              record.elementToDoms.delete(self.innerDom.props.elementId);
            }
            if (diff.content.element !== null) {
              record.elementToDoms.set(diff.content.element, self.innerDom);
            }
          }
          self.innerDom.updateProps(newProps);
        }
        break;
      case RenderingDom_DiffType.Deleted:
        record.doms.delete(diff.id);
        self.innerDom.updateChildren([]);
        if (self.innerDom.props.elementId !== void 0) {
          record.elementToDoms.delete(self.innerDom.props.elementId);
        }
        break;
    }
  }
  for (const diff of diffsInOrder.diffsInOrder) {
    if (diff.diffType === RenderingDom_DiffType.Created || diff.diffType === RenderingDom_DiffType.Modified) {
      if (diff.children) {
        const newChildren = diff.children.map((childId) => props.get(childId).outerDom);
        if (diff.id === RootVirtualDomId) {
          record.screen.updateChildren(newChildren);
        } else {
          const self = props.get(diff.id);
          self.innerDom.updateChildren(newChildren);
        }
      }
    }
  }
  ensureChildrenClippedHierarchy(record.screen, void 0, props, record, provider);
}
__name(updateVirtualDomWithRenderingDomDiff, "updateVirtualDomWithRenderingDomDiff");

// ../../gaclib/renderer/lib/src/keyMapping.js
function mapJavaScriptKeyToGacUIKey(event) {
  const codeMapping = mapByEventCode(event.code);
  if (codeMapping !== null) {
    return codeMapping;
  }
  const keyMapping = mapByEventKey(event.key);
  if (keyMapping !== null) {
    return keyMapping;
  }
  return mapByKeyCode(event.keyCode);
}
__name(mapJavaScriptKeyToGacUIKey, "mapJavaScriptKeyToGacUIKey");
function mapByEventCode(code) {
  const codeMap = {
    // Letters
    "KeyA": remoteProtocolPrimitiveTypes_exports.Key.KEY_A,
    "KeyB": remoteProtocolPrimitiveTypes_exports.Key.KEY_B,
    "KeyC": remoteProtocolPrimitiveTypes_exports.Key.KEY_C,
    "KeyD": remoteProtocolPrimitiveTypes_exports.Key.KEY_D,
    "KeyE": remoteProtocolPrimitiveTypes_exports.Key.KEY_E,
    "KeyF": remoteProtocolPrimitiveTypes_exports.Key.KEY_F,
    "KeyG": remoteProtocolPrimitiveTypes_exports.Key.KEY_G,
    "KeyH": remoteProtocolPrimitiveTypes_exports.Key.KEY_H,
    "KeyI": remoteProtocolPrimitiveTypes_exports.Key.KEY_I,
    "KeyJ": remoteProtocolPrimitiveTypes_exports.Key.KEY_J,
    "KeyK": remoteProtocolPrimitiveTypes_exports.Key.KEY_K,
    "KeyL": remoteProtocolPrimitiveTypes_exports.Key.KEY_L,
    "KeyM": remoteProtocolPrimitiveTypes_exports.Key.KEY_M,
    "KeyN": remoteProtocolPrimitiveTypes_exports.Key.KEY_N,
    "KeyO": remoteProtocolPrimitiveTypes_exports.Key.KEY_O,
    "KeyP": remoteProtocolPrimitiveTypes_exports.Key.KEY_P,
    "KeyQ": remoteProtocolPrimitiveTypes_exports.Key.KEY_Q,
    "KeyR": remoteProtocolPrimitiveTypes_exports.Key.KEY_R,
    "KeyS": remoteProtocolPrimitiveTypes_exports.Key.KEY_S,
    "KeyT": remoteProtocolPrimitiveTypes_exports.Key.KEY_T,
    "KeyU": remoteProtocolPrimitiveTypes_exports.Key.KEY_U,
    "KeyV": remoteProtocolPrimitiveTypes_exports.Key.KEY_V,
    "KeyW": remoteProtocolPrimitiveTypes_exports.Key.KEY_W,
    "KeyX": remoteProtocolPrimitiveTypes_exports.Key.KEY_X,
    "KeyY": remoteProtocolPrimitiveTypes_exports.Key.KEY_Y,
    "KeyZ": remoteProtocolPrimitiveTypes_exports.Key.KEY_Z,
    // Numbers
    "Digit0": remoteProtocolPrimitiveTypes_exports.Key.KEY_0,
    "Digit1": remoteProtocolPrimitiveTypes_exports.Key.KEY_1,
    "Digit2": remoteProtocolPrimitiveTypes_exports.Key.KEY_2,
    "Digit3": remoteProtocolPrimitiveTypes_exports.Key.KEY_3,
    "Digit4": remoteProtocolPrimitiveTypes_exports.Key.KEY_4,
    "Digit5": remoteProtocolPrimitiveTypes_exports.Key.KEY_5,
    "Digit6": remoteProtocolPrimitiveTypes_exports.Key.KEY_6,
    "Digit7": remoteProtocolPrimitiveTypes_exports.Key.KEY_7,
    "Digit8": remoteProtocolPrimitiveTypes_exports.Key.KEY_8,
    "Digit9": remoteProtocolPrimitiveTypes_exports.Key.KEY_9,
    // Function keys
    "F1": remoteProtocolPrimitiveTypes_exports.Key.KEY_F1,
    "F2": remoteProtocolPrimitiveTypes_exports.Key.KEY_F2,
    "F3": remoteProtocolPrimitiveTypes_exports.Key.KEY_F3,
    "F4": remoteProtocolPrimitiveTypes_exports.Key.KEY_F4,
    "F5": remoteProtocolPrimitiveTypes_exports.Key.KEY_F5,
    "F6": remoteProtocolPrimitiveTypes_exports.Key.KEY_F6,
    "F7": remoteProtocolPrimitiveTypes_exports.Key.KEY_F7,
    "F8": remoteProtocolPrimitiveTypes_exports.Key.KEY_F8,
    "F9": remoteProtocolPrimitiveTypes_exports.Key.KEY_F9,
    "F10": remoteProtocolPrimitiveTypes_exports.Key.KEY_F10,
    "F11": remoteProtocolPrimitiveTypes_exports.Key.KEY_F11,
    "F12": remoteProtocolPrimitiveTypes_exports.Key.KEY_F12,
    "F13": remoteProtocolPrimitiveTypes_exports.Key.KEY_F13,
    "F14": remoteProtocolPrimitiveTypes_exports.Key.KEY_F14,
    "F15": remoteProtocolPrimitiveTypes_exports.Key.KEY_F15,
    "F16": remoteProtocolPrimitiveTypes_exports.Key.KEY_F16,
    "F17": remoteProtocolPrimitiveTypes_exports.Key.KEY_F17,
    "F18": remoteProtocolPrimitiveTypes_exports.Key.KEY_F18,
    "F19": remoteProtocolPrimitiveTypes_exports.Key.KEY_F19,
    "F20": remoteProtocolPrimitiveTypes_exports.Key.KEY_F20,
    "F21": remoteProtocolPrimitiveTypes_exports.Key.KEY_F21,
    "F22": remoteProtocolPrimitiveTypes_exports.Key.KEY_F22,
    "F23": remoteProtocolPrimitiveTypes_exports.Key.KEY_F23,
    "F24": remoteProtocolPrimitiveTypes_exports.Key.KEY_F24,
    // Arrow keys
    "ArrowLeft": remoteProtocolPrimitiveTypes_exports.Key.KEY_LEFT,
    "ArrowUp": remoteProtocolPrimitiveTypes_exports.Key.KEY_UP,
    "ArrowRight": remoteProtocolPrimitiveTypes_exports.Key.KEY_RIGHT,
    "ArrowDown": remoteProtocolPrimitiveTypes_exports.Key.KEY_DOWN,
    // Navigation keys
    "Home": remoteProtocolPrimitiveTypes_exports.Key.KEY_HOME,
    "End": remoteProtocolPrimitiveTypes_exports.Key.KEY_END,
    "PageUp": remoteProtocolPrimitiveTypes_exports.Key.KEY_PRIOR,
    "PageDown": remoteProtocolPrimitiveTypes_exports.Key.KEY_NEXT,
    "Insert": remoteProtocolPrimitiveTypes_exports.Key.KEY_INSERT,
    "Delete": remoteProtocolPrimitiveTypes_exports.Key.KEY_DELETE,
    // Special keys
    "Enter": remoteProtocolPrimitiveTypes_exports.Key.KEY_RETURN,
    "Space": remoteProtocolPrimitiveTypes_exports.Key.KEY_SPACE,
    "Tab": remoteProtocolPrimitiveTypes_exports.Key.KEY_TAB,
    "Backspace": remoteProtocolPrimitiveTypes_exports.Key.KEY_BACK,
    "Escape": remoteProtocolPrimitiveTypes_exports.Key.KEY_ESCAPE,
    // Modifier keys
    "ShiftLeft": remoteProtocolPrimitiveTypes_exports.Key.KEY_LSHIFT,
    "ShiftRight": remoteProtocolPrimitiveTypes_exports.Key.KEY_RSHIFT,
    "ControlLeft": remoteProtocolPrimitiveTypes_exports.Key.KEY_LCONTROL,
    "ControlRight": remoteProtocolPrimitiveTypes_exports.Key.KEY_RCONTROL,
    "AltLeft": remoteProtocolPrimitiveTypes_exports.Key.KEY_LMENU,
    "AltRight": remoteProtocolPrimitiveTypes_exports.Key.KEY_RMENU,
    "MetaLeft": remoteProtocolPrimitiveTypes_exports.Key.KEY_LWIN,
    "MetaRight": remoteProtocolPrimitiveTypes_exports.Key.KEY_RWIN,
    // Lock keys
    "CapsLock": remoteProtocolPrimitiveTypes_exports.Key.KEY_CAPITAL,
    "NumLock": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMLOCK,
    "ScrollLock": remoteProtocolPrimitiveTypes_exports.Key.KEY_SCROLL,
    // Numpad
    "Numpad0": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD0,
    "Numpad1": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD1,
    "Numpad2": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD2,
    "Numpad3": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD3,
    "Numpad4": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD4,
    "Numpad5": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD5,
    "Numpad6": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD6,
    "Numpad7": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD7,
    "Numpad8": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD8,
    "Numpad9": remoteProtocolPrimitiveTypes_exports.Key.KEY_NUMPAD9,
    "NumpadDecimal": remoteProtocolPrimitiveTypes_exports.Key.KEY_DECIMAL,
    "NumpadDivide": remoteProtocolPrimitiveTypes_exports.Key.KEY_DIVIDE,
    "NumpadMultiply": remoteProtocolPrimitiveTypes_exports.Key.KEY_MULTIPLY,
    "NumpadSubtract": remoteProtocolPrimitiveTypes_exports.Key.KEY_SUBTRACT,
    "NumpadAdd": remoteProtocolPrimitiveTypes_exports.Key.KEY_ADD,
    "NumpadEnter": remoteProtocolPrimitiveTypes_exports.Key.KEY_RETURN,
    // Punctuation
    "Semicolon": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_1,
    "Equal": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_PLUS,
    "Comma": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_COMMA,
    "Minus": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_MINUS,
    "Period": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_PERIOD,
    "Slash": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_2,
    "Backquote": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_3,
    "BracketLeft": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_4,
    "Backslash": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_5,
    "BracketRight": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_6,
    "Quote": remoteProtocolPrimitiveTypes_exports.Key.KEY_OEM_7,
    // Other special keys
    "Pause": remoteProtocolPrimitiveTypes_exports.Key.KEY_PAUSE,
    "PrintScreen": remoteProtocolPrimitiveTypes_exports.Key.KEY_SNAPSHOT,
    "ContextMenu": remoteProtocolPrimitiveTypes_exports.Key.KEY_APPS
  };
  return codeMap[code] ?? null;
}
__name(mapByEventCode, "mapByEventCode");
function mapByEventKey(key) {
  const keyMap = {
    // Special keys that might not be caught by code mapping
    "Clear": remoteProtocolPrimitiveTypes_exports.Key.KEY_CLEAR,
    "Help": remoteProtocolPrimitiveTypes_exports.Key.KEY_HELP,
    "Select": remoteProtocolPrimitiveTypes_exports.Key.KEY_SELECT,
    "Print": remoteProtocolPrimitiveTypes_exports.Key.KEY_PRINT,
    "Execute": remoteProtocolPrimitiveTypes_exports.Key.KEY_EXECUTE,
    "Cancel": remoteProtocolPrimitiveTypes_exports.Key.KEY_CANCEL,
    // Fallback for basic keys (using logical names)
    "a": remoteProtocolPrimitiveTypes_exports.Key.KEY_A,
    "A": remoteProtocolPrimitiveTypes_exports.Key.KEY_A,
    "b": remoteProtocolPrimitiveTypes_exports.Key.KEY_B,
    "B": remoteProtocolPrimitiveTypes_exports.Key.KEY_B,
    "c": remoteProtocolPrimitiveTypes_exports.Key.KEY_C,
    "C": remoteProtocolPrimitiveTypes_exports.Key.KEY_C,
    "d": remoteProtocolPrimitiveTypes_exports.Key.KEY_D,
    "D": remoteProtocolPrimitiveTypes_exports.Key.KEY_D,
    "e": remoteProtocolPrimitiveTypes_exports.Key.KEY_E,
    "E": remoteProtocolPrimitiveTypes_exports.Key.KEY_E,
    "f": remoteProtocolPrimitiveTypes_exports.Key.KEY_F,
    "F": remoteProtocolPrimitiveTypes_exports.Key.KEY_F,
    "g": remoteProtocolPrimitiveTypes_exports.Key.KEY_G,
    "G": remoteProtocolPrimitiveTypes_exports.Key.KEY_G,
    "h": remoteProtocolPrimitiveTypes_exports.Key.KEY_H,
    "H": remoteProtocolPrimitiveTypes_exports.Key.KEY_H,
    "i": remoteProtocolPrimitiveTypes_exports.Key.KEY_I,
    "I": remoteProtocolPrimitiveTypes_exports.Key.KEY_I,
    "j": remoteProtocolPrimitiveTypes_exports.Key.KEY_J,
    "J": remoteProtocolPrimitiveTypes_exports.Key.KEY_J,
    "k": remoteProtocolPrimitiveTypes_exports.Key.KEY_K,
    "K": remoteProtocolPrimitiveTypes_exports.Key.KEY_K,
    "l": remoteProtocolPrimitiveTypes_exports.Key.KEY_L,
    "L": remoteProtocolPrimitiveTypes_exports.Key.KEY_L,
    "m": remoteProtocolPrimitiveTypes_exports.Key.KEY_M,
    "M": remoteProtocolPrimitiveTypes_exports.Key.KEY_M,
    "n": remoteProtocolPrimitiveTypes_exports.Key.KEY_N,
    "N": remoteProtocolPrimitiveTypes_exports.Key.KEY_N,
    "o": remoteProtocolPrimitiveTypes_exports.Key.KEY_O,
    "O": remoteProtocolPrimitiveTypes_exports.Key.KEY_O,
    "p": remoteProtocolPrimitiveTypes_exports.Key.KEY_P,
    "P": remoteProtocolPrimitiveTypes_exports.Key.KEY_P,
    "q": remoteProtocolPrimitiveTypes_exports.Key.KEY_Q,
    "Q": remoteProtocolPrimitiveTypes_exports.Key.KEY_Q,
    "r": remoteProtocolPrimitiveTypes_exports.Key.KEY_R,
    "R": remoteProtocolPrimitiveTypes_exports.Key.KEY_R,
    "s": remoteProtocolPrimitiveTypes_exports.Key.KEY_S,
    "S": remoteProtocolPrimitiveTypes_exports.Key.KEY_S,
    "t": remoteProtocolPrimitiveTypes_exports.Key.KEY_T,
    "T": remoteProtocolPrimitiveTypes_exports.Key.KEY_T,
    "u": remoteProtocolPrimitiveTypes_exports.Key.KEY_U,
    "U": remoteProtocolPrimitiveTypes_exports.Key.KEY_U,
    "v": remoteProtocolPrimitiveTypes_exports.Key.KEY_V,
    "V": remoteProtocolPrimitiveTypes_exports.Key.KEY_V,
    "w": remoteProtocolPrimitiveTypes_exports.Key.KEY_W,
    "W": remoteProtocolPrimitiveTypes_exports.Key.KEY_W,
    "x": remoteProtocolPrimitiveTypes_exports.Key.KEY_X,
    "X": remoteProtocolPrimitiveTypes_exports.Key.KEY_X,
    "y": remoteProtocolPrimitiveTypes_exports.Key.KEY_Y,
    "Y": remoteProtocolPrimitiveTypes_exports.Key.KEY_Y,
    "z": remoteProtocolPrimitiveTypes_exports.Key.KEY_Z,
    "Z": remoteProtocolPrimitiveTypes_exports.Key.KEY_Z,
    "0": remoteProtocolPrimitiveTypes_exports.Key.KEY_0,
    "1": remoteProtocolPrimitiveTypes_exports.Key.KEY_1,
    "2": remoteProtocolPrimitiveTypes_exports.Key.KEY_2,
    "3": remoteProtocolPrimitiveTypes_exports.Key.KEY_3,
    "4": remoteProtocolPrimitiveTypes_exports.Key.KEY_4,
    "5": remoteProtocolPrimitiveTypes_exports.Key.KEY_5,
    "6": remoteProtocolPrimitiveTypes_exports.Key.KEY_6,
    "7": remoteProtocolPrimitiveTypes_exports.Key.KEY_7,
    "8": remoteProtocolPrimitiveTypes_exports.Key.KEY_8,
    "9": remoteProtocolPrimitiveTypes_exports.Key.KEY_9
  };
  return keyMap[key] ?? null;
}
__name(mapByEventKey, "mapByEventKey");
function mapByKeyCode(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return keyCode;
  }
  if (keyCode >= 48 && keyCode <= 57) {
    return keyCode;
  }
  if (keyCode >= 112 && keyCode <= 123) {
    return keyCode;
  }
  const keyCodeMap = {
    8: remoteProtocolPrimitiveTypes_exports.Key.KEY_BACK,
    9: remoteProtocolPrimitiveTypes_exports.Key.KEY_TAB,
    13: remoteProtocolPrimitiveTypes_exports.Key.KEY_RETURN,
    16: remoteProtocolPrimitiveTypes_exports.Key.KEY_SHIFT,
    17: remoteProtocolPrimitiveTypes_exports.Key.KEY_CONTROL,
    18: remoteProtocolPrimitiveTypes_exports.Key.KEY_MENU,
    20: remoteProtocolPrimitiveTypes_exports.Key.KEY_CAPITAL,
    27: remoteProtocolPrimitiveTypes_exports.Key.KEY_ESCAPE,
    32: remoteProtocolPrimitiveTypes_exports.Key.KEY_SPACE,
    33: remoteProtocolPrimitiveTypes_exports.Key.KEY_PRIOR,
    34: remoteProtocolPrimitiveTypes_exports.Key.KEY_NEXT,
    35: remoteProtocolPrimitiveTypes_exports.Key.KEY_END,
    36: remoteProtocolPrimitiveTypes_exports.Key.KEY_HOME,
    37: remoteProtocolPrimitiveTypes_exports.Key.KEY_LEFT,
    38: remoteProtocolPrimitiveTypes_exports.Key.KEY_UP,
    39: remoteProtocolPrimitiveTypes_exports.Key.KEY_RIGHT,
    40: remoteProtocolPrimitiveTypes_exports.Key.KEY_DOWN,
    45: remoteProtocolPrimitiveTypes_exports.Key.KEY_INSERT,
    46: remoteProtocolPrimitiveTypes_exports.Key.KEY_DELETE
  };
  return keyCodeMap[keyCode] ?? null;
}
__name(mapByKeyCode, "mapByKeyCode");

// ../../gaclib/renderer/lib/src/GacUIRendererImpl.js
var GacUIHtmlRendererExitError = class extends Error {
  static {
    __name(this, "GacUIHtmlRendererExitError");
  }
  constructor() {
    super("IGacUIRenderer exited due to receiving RequestControllerConnectionStopped.");
  }
};
function mergeRunsDiff(existingRuns, diffRuns) {
  let result = [...existingRuns];
  for (const diff of diffRuns) {
    const newResult = [];
    for (const existing of result) {
      if (existing.caretEnd <= diff.caretBegin || existing.caretBegin >= diff.caretEnd) {
        newResult.push(existing);
      } else {
        if (existing.caretBegin < diff.caretBegin) {
          newResult.push({ ...existing, caretEnd: diff.caretBegin });
        }
        if (existing.caretEnd > diff.caretEnd) {
          newResult.push({ ...existing, caretBegin: diff.caretEnd });
        }
      }
    }
    newResult.push(diff);
    result = newResult;
  }
  result.sort((a, b) => a.caretBegin - b.caretBegin);
  return result;
}
__name(mergeRunsDiff, "mergeRunsDiff");
var GacUIRendererImpl = class _GacUIRendererImpl {
  static {
    __name(this, "GacUIRendererImpl");
  }
  _settings;
  _responses;
  _events;
  _stopping = false;
  _provider;
  _measurer;
  _renderingRecord;
  _images = /* @__PURE__ */ new Map();
  _pendingElements = /* @__PURE__ */ new Map();
  _screenConfig;
  _windowConfig;
  _fontConfig;
  _resizeObserver;
  _caretBlinkTimer = null;
  _caretBlinkElementId = null;
  /****************************************************************************************
   * Font Configuration
   ***************************************************************************************/
  static stripFontQuotes(fontFamily) {
    return fontFamily.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
  }
  generateFontConfig() {
    const styles = window.getComputedStyle(this._settings.target);
    const defaultFontFamily = _GacUIRendererImpl.stripFontQuotes(styles.fontFamily.split(",")[0].trim());
    const defaultFont = {
      fontFamily: defaultFontFamily,
      size: 12,
      bold: false,
      italic: false,
      underline: false,
      strikeline: false,
      antialias: false,
      verticalAntialias: false
    };
    let supportedFonts;
    if (this._settings.fontFamilies !== void 0) {
      supportedFonts = this._settings.fontFamilies.map((f) => _GacUIRendererImpl.stripFontQuotes(f));
      if (!supportedFonts.includes(defaultFontFamily)) {
        supportedFonts.unshift(defaultFontFamily);
      }
    } else {
      supportedFonts = [defaultFontFamily];
    }
    return {
      defaultFont,
      supportedFonts
    };
  }
  /****************************************************************************************
   * Size Configuration
   ***************************************************************************************/
  _getBounds() {
    return {
      x1: { value: 0 },
      y1: { value: 0 },
      x2: { value: this._settings.target.clientWidth },
      y2: { value: this._settings.target.clientHeight }
    };
  }
  _onSizeChanged() {
    const bounds = this._getBounds();
    this._screenConfig.bounds = bounds;
    this._screenConfig.clientBounds = bounds;
    this._windowConfig.bounds = bounds;
    this._windowConfig.clientBounds = bounds;
    this._events.OnControllerScreenUpdated(this._screenConfig);
    this._events.OnWindowBoundsUpdated(this._windowConfig);
  }
  /****************************************************************************************
   * Constructor
   ***************************************************************************************/
  constructor(_settings) {
    this._settings = _settings;
    this._settings.target.innerText = "Starting GacUI HTML Renderer ...";
    const bounds = this._getBounds();
    const customFramePadding = {
      left: { value: 8 },
      top: { value: 8 },
      right: { value: 8 },
      bottom: { value: 8 }
    };
    this._screenConfig = {
      bounds,
      clientBounds: bounds,
      scalingX: 1,
      scalingY: 1
    };
    this._windowConfig = {
      bounds,
      clientBounds: bounds,
      sizeState: WindowSizeState.Maximized,
      customFramePadding
    };
    this._fontConfig = this.generateFontConfig();
  }
  get requests() {
    return this;
  }
  _start(responses, events, elements, provider, measurer) {
    this._responses = responses;
    this._events = events;
    this._provider = provider;
    this._measurer = measurer;
    elements.defaultFontSize = this._fontConfig.defaultFont.size;
    this._renderingRecord = createVirtualDomFromRenderingDom({
      id: RootVirtualDomId,
      content: {
        hitTestResult: null,
        cursor: null,
        element: null,
        bounds: { x1: 0, y1: 0, x2: 0, y2: 0 },
        validArea: { x1: 0, y1: 0, x2: 0, y2: 0 }
      },
      children: null
    }, elements, this._provider);
    this._installEvents();
    this._resizeObserver = new ResizeObserver(() => this._onSizeChanged());
    this._resizeObserver.observe(this._settings.target);
  }
  stop() {
    this._stopping = true;
    this._stopCaretBlink();
    this._resizeObserver.disconnect();
    this._uninstallEvents();
  }
  _stopCaretBlink() {
    if (this._caretBlinkTimer !== null) {
      clearInterval(this._caretBlinkTimer);
      this._caretBlinkTimer = null;
    }
    this._caretBlinkElementId = null;
  }
  _startCaretBlink(elementId) {
    this._stopCaretBlink();
    this._caretBlinkElementId = elementId;
    this._caretBlinkTimer = setInterval(() => {
      if (this._caretBlinkElementId === null)
        return;
      const data = this._paragraphElements.get(this._caretBlinkElementId);
      if (data === void 0)
        return;
      const layout = getParagraphLayout(data.htmlElement);
      if (layout === void 0)
        return;
      if (layout.caret === null)
        return;
      layout.caretVisible = !layout.caretVisible;
      setCaretVisible(data.textDiv, layout.caretVisible, layout);
      this._settings.blink?.();
    }, 500);
  }
  requestStopToCore(forceExit) {
    if (forceExit) {
      this._events.OnControllerForceExit();
    } else {
      this._events.OnControllerRequestExit();
    }
  }
  _areBoundsEqual(a, b) {
    return a.x1.value === b.x1.value && a.y1.value === b.y1.value && a.x2.value === b.x2.value && a.y2.value === b.y2.value;
  }
  _areSizeEqual(a, b) {
    return a.x.value === b.x2.value - b.x1.value && a.y.value === b.y2.value - b.y1.value;
  }
  /****************************************************************************************
   * Controller
   ***************************************************************************************/
  RequestControllerGetFontConfig(id) {
    this._responses.RespondControllerGetFontConfig(id, this._fontConfig);
  }
  RequestControllerGetScreenConfig(id) {
    this._responses.RespondControllerGetScreenConfig(id, this._screenConfig);
  }
  RequestControllerConnectionEstablished() {
    this._events.OnWindowActivatedUpdated(true);
  }
  RequestControllerConnectionStopped() {
    this.stop();
    throw new GacUIHtmlRendererExitError();
  }
  /****************************************************************************************
   * MainWindow
   ***************************************************************************************/
  RequestWindowGetBounds(id) {
    this._responses.RespondWindowGetBounds(id, this._windowConfig);
  }
  RequestWindowNotifySetTitle(requestArgs) {
    document.title = requestArgs;
  }
  RequestWindowNotifySetBounds(requestArgs) {
    if (!this._areBoundsEqual(requestArgs, this._windowConfig.bounds)) {
      this._events.OnWindowBoundsUpdated(this._windowConfig);
    }
  }
  RequestWindowNotifySetClientSize(requestArgs) {
    if (!this._areSizeEqual(requestArgs, this._windowConfig.clientBounds)) {
      this._events.OnWindowBoundsUpdated(this._windowConfig);
    }
  }
  RequestWindowNotifyMinSize(requestArgs) {
    this._settings.suggestMinSize(requestArgs.x.value, requestArgs.y.value);
  }
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  RequestWindowNotifySetCaret(requestArgs) {
  }
  /****************************************************************************************
   * IO
   ***************************************************************************************/
  _globalShortcutKeys = [];
  RequestIOUpdateGlobalShortcutKey(requestArgs) {
    if (requestArgs) {
      this._globalShortcutKeys = requestArgs;
    }
  }
  RequestIOIsKeyPressing(id, requestArgs) {
    throw new Error(`Not Implemented (RequestIOIsKeyPressing)
ID: ${id}
Arguments: ${JSON.stringify(requestArgs, void 0, 4)}`);
  }
  RequestIOIsKeyToggled(id, requestArgs) {
    throw new Error(`Not Implemented (RequestIOIsKeyToggled)
ID: ${id}
Arguments: ${JSON.stringify(requestArgs, void 0, 4)}`);
  }
  /****************************************************************************************
   * Renderer (Elements)
   ***************************************************************************************/
  RequestRendererUpdateElement_SolidBorder(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.SolidBorder, desc: requestArgs });
  }
  RequestRendererUpdateElement_SinkBorder(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.SinkBorder, desc: requestArgs });
  }
  RequestRendererUpdateElement_SinkSplitter(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.SinkSplitter, desc: requestArgs });
  }
  RequestRendererUpdateElement_SolidBackground(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.SolidBackground, desc: requestArgs });
  }
  RequestRendererUpdateElement_GradientBackground(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.GradientBackground, desc: requestArgs });
  }
  RequestRendererUpdateElement_InnerShadow(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.InnerShadow, desc: requestArgs });
  }
  RequestRendererUpdateElement_Polygon(requestArgs) {
    this._updateElement(requestArgs.id, { type: RendererType.Polygon, desc: requestArgs });
  }
  RequestRendererUpdateElement_SolidLabel(requestArgs) {
    const fixedRequestArgs = requestArgs;
    if (requestArgs.text === null || requestArgs.font === null) {
      const typedDesc = this._renderingRecord.elements.getDescEnsured(requestArgs.id);
      if (typedDesc.type !== RendererType.SolidLabel) {
        throw new Error(`Element type mismatch: expected ${RendererType.SolidLabel}, got ${typedDesc.type}`);
      }
      if (fixedRequestArgs.text === null) {
        fixedRequestArgs.text = typedDesc.desc.text;
      }
      if (fixedRequestArgs.font === null) {
        fixedRequestArgs.font = typedDesc.desc.font;
      }
    }
    if (fixedRequestArgs.text === null || fixedRequestArgs.font === null) {
      throw new Error(`In ElementDesc_SolidLabel, text or font should not be omitted if they were not offered before.`);
    }
    this._updateElement(fixedRequestArgs.id, { type: RendererType.SolidLabel, desc: fixedRequestArgs });
    this._measurer.requestMeasureSolidLabel(fixedRequestArgs);
  }
  /****************************************************************************************
   * Renderer (ImageElement)
   ***************************************************************************************/
  RequestImageCreated(id, requestArgs) {
    if (this._images.has(requestArgs.id)) {
      throw new Error(`Image ID ${requestArgs.id} is already in use`);
    }
    if (requestArgs.imageDataOmitted) {
      throw new Error(`imageDataOmitted must be false for RequestImageCreated`);
    }
    this._images.set(requestArgs.id, requestArgs);
    this._measurer.requestImageMetadata(id, requestArgs, this._renderingRecord);
  }
  RequestImageDestroyed(requestArgs) {
    this._images.delete(requestArgs);
  }
  RequestRendererUpdateElement_ImageFrame(requestArgs) {
    if (requestArgs.imageId === null) {
      if (requestArgs.imageCreation !== null) {
        throw new Error(`When imageId is null, imageCreation must be null too`);
      }
    }
    if (requestArgs.imageId !== null) {
      if (requestArgs.imageCreation === null) {
        if (!this._images.has(requestArgs.imageId)) {
          throw new Error(`Image with ID ${requestArgs.imageId} must have been registered`);
        }
      } else if (requestArgs.imageCreation.imageDataOmitted) {
        if (!this._images.has(requestArgs.imageId)) {
          throw new Error(`Image with ID ${requestArgs.imageId} must have been registered when imageDataOmitted is true`);
        }
      } else {
        if (this._images.has(requestArgs.imageCreation.id)) {
          throw new Error(`Image with ID ${requestArgs.imageCreation.id} is already registered`);
        }
        this._images.set(requestArgs.imageCreation.id, requestArgs.imageCreation);
      }
    }
    if (requestArgs.imageCreation !== null && !requestArgs.imageCreation.imageDataOmitted) {
      this._measurer.requestImageMetadata(void 0, this._images.get(requestArgs.imageId), this._renderingRecord);
    }
    let finalRequestArgs = requestArgs;
    if (requestArgs.imageId !== null && (requestArgs.imageCreation === null || requestArgs.imageCreation.imageDataOmitted)) {
      const registeredImage = this._images.get(requestArgs.imageId);
      if (registeredImage === void 0) {
        throw new Error(`Unable to find registered image with ID ${requestArgs.imageId}`);
      }
      finalRequestArgs = {
        ...requestArgs,
        imageCreation: registeredImage
      };
    }
    this._updateElement(finalRequestArgs.id, { type: RendererType.ImageFrame, desc: finalRequestArgs });
    for (const [, data] of this._paragraphElements) {
      const layout = getParagraphLayout(data.htmlElement);
      if (layout !== void 0) {
        updateParagraphInlineImages(layout, finalRequestArgs.id, this._renderingRecord.elements);
      }
    }
  }
  /****************************************************************************************
   * Renderer (DocumentElement)
   ***************************************************************************************/
  // Map from element ID to paragraph tracking data
  _paragraphElements = /* @__PURE__ */ new Map();
  _paragraphCarets = /* @__PURE__ */ new Map();
  _reconcileParagraphElements() {
    for (const [elementId, data] of this._paragraphElements) {
      const virtualDom = this._renderingRecord.elementToDoms.get(elementId);
      if (virtualDom === void 0 || !("htmlElement" in virtualDom)) {
        continue;
      }
      const newHtml = virtualDom.htmlElement;
      if (newHtml === data.htmlElement) {
        continue;
      }
      const newTextDiv = getExtraBorder(newHtml);
      if (newTextDiv !== void 0) {
        this._paragraphElements.set(elementId, { htmlElement: newHtml, textDiv: newTextDiv });
        this._applyStoredParagraphCaret(elementId);
      }
    }
  }
  _getStoredParagraphCaret(elementId) {
    if (this._paragraphCarets.has(elementId)) {
      return this._paragraphCarets.get(elementId) ?? null;
    }
    const typedDesc = this._renderingRecord.elements.getDesc(elementId);
    if (typedDesc !== void 0 && typedDesc.type === RendererType.DocumentParagraph) {
      return typedDesc.desc.caret;
    }
    return null;
  }
  _setStoredParagraphCaret(elementId, caret) {
    this._paragraphCarets.set(elementId, caret);
    const typedDesc = this._renderingRecord.elements.getDesc(elementId);
    if (typedDesc !== void 0 && typedDesc.type === RendererType.DocumentParagraph) {
      typedDesc.desc.caret = caret;
    }
  }
  _applyStoredParagraphCaret(elementId) {
    const caret = this._getStoredParagraphCaret(elementId);
    if (caret === null && this._caretBlinkElementId === elementId) {
      this._stopCaretBlink();
    }
    const data = this._paragraphElements.get(elementId);
    if (data === void 0) {
      return;
    }
    const layout = getParagraphLayout(data.htmlElement);
    if (layout === void 0) {
      return;
    }
    layout.caret = caret;
    layout.caretVisible = caret !== null;
    setCaretVisible(data.textDiv, layout.caretVisible, layout);
    if (caret !== null) {
      this._startCaretBlink(elementId);
    }
  }
  _getParagraphLayout(elementId) {
    const data = this._paragraphElements.get(elementId);
    if (data === void 0) {
      throw new Error(`Paragraph element ${elementId} not found.`);
    }
    const layout = getParagraphLayout(data.htmlElement);
    if (layout === void 0) {
      throw new Error(`Paragraph layout for element ${elementId} not found.`);
    }
    return { layout, textDiv: data.textDiv };
  }
  _measureParagraphDocumentSize(htmlElement, textDiv, layout) {
    const isInDom = htmlElement.isConnected;
    let savedHtmlStyle;
    if (!isInDom) {
      savedHtmlStyle = htmlElement.style.cssText;
      htmlElement.style.position = "absolute";
      htmlElement.style.left = "-9999px";
      htmlElement.style.top = "-9999px";
      htmlElement.style.visibility = "hidden";
      document.body.appendChild(htmlElement);
    }
    const savedHeight = textDiv.style.height;
    const savedWidth = textDiv.style.width;
    textDiv.style.height = "auto";
    if (!layout.paragraph.wrapLine) {
      textDiv.style.width = "auto";
    } else if (layout.paragraph.maxWidth > 0) {
      textDiv.style.width = `${layout.paragraph.maxWidth}px`;
    }
    fillParagraphMeasurements(textDiv, layout);
    const documentSize = {
      x: textDiv.scrollWidth,
      y: textDiv.scrollHeight
    };
    textDiv.style.height = savedHeight;
    textDiv.style.width = savedWidth;
    if (!isInDom) {
      document.body.removeChild(htmlElement);
      htmlElement.style.cssText = savedHtmlStyle;
    }
    return documentSize;
  }
  RequestRendererUpdateElement_DocumentParagraph(id, requestArgs) {
    if (this._stopping) {
      this._responses.RespondRendererUpdateElement_DocumentParagraph(id, { documentSize: { x: 0, y: 0 } });
      return;
    }
    const elementId = requestArgs.id;
    let fullDesc;
    const existingTypedDesc = this._renderingRecord.elements.getDesc(elementId);
    if (requestArgs.text !== null) {
      fullDesc = {
        paragraph: requestArgs,
        caret: this._getStoredParagraphCaret(elementId)
      };
    } else {
      if (existingTypedDesc === void 0 || existingTypedDesc.type !== RendererType.DocumentParagraph) {
        throw new Error(`Element ${elementId} is not a DocumentParagraph or has no previous desc.`);
      }
      const existingDesc = existingTypedDesc.desc;
      const mergedRunsDiff = mergeRunsDiff(existingDesc.paragraph.runsDiff ?? [], requestArgs.runsDiff ?? []);
      fullDesc = {
        paragraph: {
          ...existingDesc.paragraph,
          ...requestArgs,
          text: existingDesc.paragraph.text,
          // text never changes incrementally
          runsDiff: mergedRunsDiff
        },
        caret: this._getStoredParagraphCaret(elementId)
      };
    }
    this._paragraphCarets.set(elementId, fullDesc.caret);
    const typedDesc = { type: RendererType.DocumentParagraph, desc: fullDesc };
    this._updateElement(elementId, typedDesc);
    const virtualDom = this._renderingRecord.elementToDoms.get(elementId);
    let htmlElement = virtualDom !== void 0 && "htmlElement" in virtualDom ? virtualDom.htmlElement : void 0;
    if (htmlElement === void 0) {
      htmlElement = document.createElement("div");
      applyTypedStyle(htmlElement, typedDesc, this._renderingRecord.elements);
      this._pendingElements.set(elementId, htmlElement);
    }
    const textDiv = getExtraBorder(htmlElement);
    if (textDiv !== void 0) {
      this._paragraphElements.set(elementId, { htmlElement, textDiv });
      const layout = getParagraphLayout(htmlElement);
      if (layout !== void 0) {
        const documentSize = this._measureParagraphDocumentSize(htmlElement, textDiv, layout);
        this._applyStoredParagraphCaret(elementId);
        this._responses.RespondRendererUpdateElement_DocumentParagraph(id, { documentSize });
        return;
      }
    }
    this._responses.RespondRendererUpdateElement_DocumentParagraph(id, { documentSize: { x: 0, y: 0 } });
  }
  RequestDocumentParagraph_GetCaret(id, requestArgs) {
    const { layout } = this._getParagraphLayout(requestArgs.id);
    const text = layout.paragraph.text;
    const units = layout.units;
    const caret = requestArgs.caret;
    let newCaret = caret;
    let preferFrontSide = true;
    switch (requestArgs.relativePosition) {
      case CaretRelativePosition.CaretFirst:
        newCaret = 0;
        preferFrontSide = true;
        break;
      case CaretRelativePosition.CaretLast:
        newCaret = text.length;
        preferFrontSide = false;
        break;
      case CaretRelativePosition.CaretMoveLeft:
        {
          let found = false;
          for (let i = units.length - 1; i >= 0; i--) {
            if (units[i].end <= caret && units[i].start < caret) {
              newCaret = units[i].start;
              preferFrontSide = true;
              found = true;
              break;
            }
            if (units[i].start < caret) {
              newCaret = units[i].start;
              preferFrontSide = true;
              found = true;
              break;
            }
          }
          if (!found) {
            newCaret = 0;
            preferFrontSide = true;
          }
        }
        break;
      case CaretRelativePosition.CaretMoveRight:
        {
          let found = false;
          for (const unit of units) {
            if (unit.start >= caret && unit.end > caret) {
              newCaret = unit.end;
              preferFrontSide = false;
              found = true;
              break;
            }
            if (unit.end > caret) {
              newCaret = unit.end;
              preferFrontSide = false;
              found = true;
              break;
            }
          }
          if (!found) {
            newCaret = text.length;
            preferFrontSide = false;
          }
        }
        break;
      case CaretRelativePosition.CaretLineFirst:
        {
          const line = this._findLineForCaret(layout, caret);
          newCaret = line !== void 0 ? line.start : 0;
          preferFrontSide = true;
        }
        break;
      case CaretRelativePosition.CaretLineLast:
        {
          const line = this._findLineForCaret(layout, caret);
          newCaret = line !== void 0 ? line.end : text.length;
          preferFrontSide = false;
        }
        break;
      case CaretRelativePosition.CaretMoveUp:
      case CaretRelativePosition.CaretMoveDown:
        {
          const currentUnit = this._findUnitForCaret(units, caret);
          if (currentUnit === void 0) {
            break;
          }
          const currentX = currentUnit.frontCaretBaseline.x;
          const currentY = currentUnit.frontCaretBaseline.y;
          const isUp = requestArgs.relativePosition === CaretRelativePosition.CaretMoveUp;
          let targetUnit;
          let bestDistance = Infinity;
          for (const unit of units) {
            if (unit.frontCaretBaseline.y !== unit.backCaretBaseline.y)
              continue;
            if (isUp && unit.frontCaretBaseline.y < currentY) {
              const dx = Math.abs(unit.frontCaretBaseline.x - currentX);
              const dy = currentY - unit.frontCaretBaseline.y;
              const distance = dy * 1e4 + dx;
              if (targetUnit === void 0 || unit.frontCaretBaseline.y > targetUnit.frontCaretBaseline.y || unit.frontCaretBaseline.y === targetUnit.frontCaretBaseline.y && dx < bestDistance % 1e4) {
                targetUnit = unit;
                bestDistance = distance;
              }
            } else if (!isUp && unit.frontCaretBaseline.y > currentY) {
              const dx = Math.abs(unit.frontCaretBaseline.x - currentX);
              const dy = unit.frontCaretBaseline.y - currentY;
              const distance = dy * 1e4 + dx;
              if (targetUnit === void 0 || unit.frontCaretBaseline.y < targetUnit.frontCaretBaseline.y || unit.frontCaretBaseline.y === targetUnit.frontCaretBaseline.y && dx < bestDistance % 1e4) {
                targetUnit = unit;
                bestDistance = distance;
              }
            }
          }
          if (targetUnit !== void 0) {
            const distFront = Math.abs(targetUnit.frontCaretBaseline.x - currentX);
            const distBack = Math.abs(targetUnit.backCaretBaseline.x - currentX);
            if (distFront <= distBack) {
              newCaret = targetUnit.start;
              preferFrontSide = true;
            } else {
              newCaret = targetUnit.end;
              preferFrontSide = false;
            }
          }
        }
        break;
    }
    this._responses.RespondDocumentParagraph_GetCaret(id, { newCaret, preferFrontSide });
  }
  _findLineForCaret(layout, caret) {
    for (const line of layout.lines) {
      if (caret >= line.start && caret <= line.end) {
        return line;
      }
    }
    for (let i = 0; i < layout.lines.length - 1; i++) {
      const line = layout.lines[i];
      const next = layout.lines[i + 1];
      if (caret > line.end && caret < next.start) {
        return line;
      }
    }
    return layout.lines.length > 0 ? layout.lines[layout.lines.length - 1] : void 0;
  }
  _findUnitForCaret(units, caret) {
    for (const unit of units) {
      if (caret >= unit.start && caret <= unit.end) {
        return unit;
      }
    }
    return void 0;
  }
  RequestDocumentParagraph_GetCaretBounds(id, requestArgs) {
    const { layout } = this._getParagraphLayout(requestArgs.id);
    const units = layout.units;
    const text = layout.paragraph.text;
    const frontSideBounds = [];
    const backSideBounds = [];
    for (let pos = 0; pos <= text.length; pos++) {
      let frontRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
      let backRect = { x1: 0, y1: 0, x2: 0, y2: 0 };
      for (const unit of units) {
        if (pos >= unit.start && pos <= unit.end) {
          const x = pos < unit.end ? unit.frontCaretBaseline.x : unit.backCaretBaseline.x;
          const y = pos < unit.end ? unit.frontCaretBaseline.y : unit.backCaretBaseline.y;
          const h = unit.caretHeight;
          frontRect = { x1: x, y1: y - h, x2: x + 1, y2: y };
          break;
        }
      }
      for (const unit of units) {
        if (pos >= unit.start && pos <= unit.end) {
          const x = pos > unit.start ? unit.backCaretBaseline.x : unit.frontCaretBaseline.x;
          const y = pos > unit.start ? unit.backCaretBaseline.y : unit.frontCaretBaseline.y;
          const h = unit.caretHeight;
          backRect = { x1: x, y1: y - h, x2: x + 1, y2: y };
          break;
        }
      }
      frontSideBounds.push(frontRect);
      backSideBounds.push(backRect);
    }
    this._responses.RespondDocumentParagraph_GetCaretBounds(id, { frontSideBounds, backSideBounds });
  }
  RequestDocumentParagraph_GetInlineObjectFromPoint(id, requestArgs) {
    const { layout } = this._getParagraphLayout(requestArgs.id);
    const runs = layout.paragraph.runsDiff ?? [];
    const point = requestArgs.point;
    for (const unit of layout.units) {
      if (unit.frontCaretBaseline.y !== unit.backCaretBaseline.y)
        continue;
      const x1 = Math.min(unit.frontCaretBaseline.x, unit.backCaretBaseline.x);
      const x2 = Math.max(unit.frontCaretBaseline.x, unit.backCaretBaseline.x);
      const y2 = unit.frontCaretBaseline.y;
      const y1 = y2 - unit.caretHeight;
      if (point.x >= x1 && point.x <= x2 && point.y >= y1 && point.y <= y2) {
        const run = runs.find((r) => r.caretBegin <= unit.start && r.caretEnd >= unit.end && r.props[0] === "DocumentInlineObjectRunProperty");
        if (run !== void 0) {
          this._responses.RespondDocumentParagraph_GetInlineObjectFromPoint(id, run);
          return;
        }
      }
    }
    this._responses.RespondDocumentParagraph_GetInlineObjectFromPoint(id, null);
  }
  RequestDocumentParagraph_GetNearestCaretFromTextPos(id, requestArgs) {
    const { layout } = this._getParagraphLayout(requestArgs.id);
    const units = layout.units;
    const textPos = requestArgs.textPos;
    for (const unit of units) {
      if (textPos >= unit.start && textPos <= unit.end) {
        const distToStart = textPos - unit.start;
        const distToEnd = unit.end - textPos;
        this._responses.RespondDocumentParagraph_GetNearestCaretFromTextPos(id, distToStart <= distToEnd ? unit.start : unit.end);
        return;
      }
    }
    let nearestPos = 0;
    let nearestDist = Infinity;
    for (const unit of units) {
      const distToStart = Math.abs(textPos - unit.start);
      const distToEnd = Math.abs(textPos - unit.end);
      if (distToStart < nearestDist) {
        nearestDist = distToStart;
        nearestPos = unit.start;
      }
      if (distToEnd < nearestDist) {
        nearestDist = distToEnd;
        nearestPos = unit.end;
      }
    }
    this._responses.RespondDocumentParagraph_GetNearestCaretFromTextPos(id, nearestPos);
  }
  RequestDocumentParagraph_IsValidCaret(id, requestArgs) {
    const { layout } = this._getParagraphLayout(requestArgs.id);
    const caret = requestArgs.caret;
    let valid = false;
    for (const unit of layout.units) {
      if (caret === unit.start || caret === unit.end) {
        valid = true;
        break;
      }
    }
    this._responses.RespondDocumentParagraph_IsValidCaret(id, valid);
  }
  RequestDocumentParagraph_OpenCaret(requestArgs) {
    this._setStoredParagraphCaret(requestArgs.id, requestArgs);
    this._applyStoredParagraphCaret(requestArgs.id);
  }
  RequestDocumentParagraph_CloseCaret(requestArgs) {
    this._setStoredParagraphCaret(requestArgs, null);
    this._applyStoredParagraphCaret(requestArgs);
  }
  /****************************************************************************************
   * Renderer
   ***************************************************************************************/
  _updateElement(id, typedDesc) {
    if (this._stopping) {
      return;
    }
    this._renderingRecord.elements.updateDesc(id, typedDesc);
    const virtualDom = this._renderingRecord.elementToDoms.get(id);
    if (virtualDom) {
      virtualDom.updateTypedDesc(id, typedDesc);
    }
  }
  RequestRendererCreated(requestArgs) {
    if (requestArgs === null) {
      return;
    }
    for (const creation of requestArgs) {
      this._renderingRecord.elements.create(creation.id, creation.type);
      if (creation.type === RendererType.FocusRectangle || creation.type === RendererType.Raw) {
        this._updateElement(creation.id, { type: creation.type });
      }
    }
  }
  RequestRendererDestroyed(requestArgs) {
    if (requestArgs === null) {
      return;
    }
    for (const id of requestArgs) {
      if (this._caretBlinkElementId === id) {
        this._stopCaretBlink();
      }
      this._paragraphElements.delete(id);
      this._paragraphCarets.delete(id);
      this._renderingRecord.elements.destroy(id);
    }
  }
  RequestRendererIdle() {
    this._settings.idle?.();
  }
  RequestRendererBeginRendering(requestArgs) {
    if (requestArgs.updatedElements) {
      for (const elementDesc of requestArgs.updatedElements) {
        switch (elementDesc[0]) {
          case "ElementDesc_SolidBorder":
            this.RequestRendererUpdateElement_SolidBorder(elementDesc[1]);
            break;
          case "ElementDesc_SinkBorder":
            this.RequestRendererUpdateElement_SinkBorder(elementDesc[1]);
            break;
          case "ElementDesc_SinkSplitter":
            this.RequestRendererUpdateElement_SinkSplitter(elementDesc[1]);
            break;
          case "ElementDesc_SolidBackground":
            this.RequestRendererUpdateElement_SolidBackground(elementDesc[1]);
            break;
          case "ElementDesc_GradientBackground":
            this.RequestRendererUpdateElement_GradientBackground(elementDesc[1]);
            break;
          case "ElementDesc_InnerShadow":
            this.RequestRendererUpdateElement_InnerShadow(elementDesc[1]);
            break;
          case "ElementDesc_Polygon":
            this.RequestRendererUpdateElement_Polygon(elementDesc[1]);
            break;
          case "ElementDesc_SolidLabel":
            this.RequestRendererUpdateElement_SolidLabel(elementDesc[1]);
            break;
          case "ElementDesc_ImageFrame":
            this.RequestRendererUpdateElement_ImageFrame(elementDesc[1]);
            break;
          default: {
            const _exhaustive = elementDesc;
            throw new Error(`Unknown type in ElementBeginRendering.updatedElements: ${_exhaustive[0]}`);
          }
        }
      }
    }
  }
  RequestRendererEndRendering(id) {
    if (this._stopping) {
      this._responses.RespondRendererEndRendering(id, { fontHeights: [], minSizes: [], createdImages: [], inlineObjectBounds: [] });
      return;
    }
    this._measurer.RequestRendererEndRendering(id, this._renderingRecord);
  }
  RequestRendererRenderDom(requestArgs) {
    if (this._stopping) {
      return;
    }
    if (requestArgs) {
      this._renderingRecord = createVirtualDomFromRenderingDom(requestArgs, this._renderingRecord.elements, this._provider);
      this._provider.fixBounds(this._renderingRecord.screen, this._settings.target, this._windowConfig.bounds.x2.value - this._windowConfig.bounds.x1.value, this._windowConfig.bounds.y2.value - this._windowConfig.bounds.y1.value);
      this._reconcileParagraphElements();
    }
  }
  RequestRendererRenderDomDiff(requestArgs) {
    if (this._stopping) {
      return;
    }
    const pendingElements = this._pendingElements.size > 0 ? this._pendingElements : void 0;
    updateVirtualDomWithRenderingDomDiff(requestArgs, this._renderingRecord, this._provider, pendingElements);
    this._pendingElements = /* @__PURE__ */ new Map();
    this._provider.fixBounds(this._renderingRecord.screen, this._settings.target, this._windowConfig.bounds.x2.value - this._windowConfig.bounds.x1.value, this._windowConfig.bounds.y2.value - this._windowConfig.bounds.y1.value);
    this._reconcileParagraphElements();
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  /****************************************************************************************
   * MainWindow (ignored)
   ***************************************************************************************/
  RequestWindowNotifySetEnabled(requestArgs) {
  }
  RequestWindowNotifySetTopMost(requestArgs) {
  }
  RequestWindowNotifySetShowInTaskBar(requestArgs) {
  }
  RequestWindowNotifySetCustomFrameMode(requestArgs) {
  }
  RequestWindowNotifySetMaximizedBox(requestArgs) {
  }
  RequestWindowNotifySetMinimizedBox(requestArgs) {
  }
  RequestWindowNotifySetBorder(requestArgs) {
  }
  RequestWindowNotifySetSizeBox(requestArgs) {
  }
  RequestWindowNotifySetIconVisible(requestArgs) {
  }
  RequestWindowNotifySetTitleBar(requestArgs) {
  }
  RequestWindowNotifyActivate() {
  }
  RequestWindowNotifyShow(requestArgs) {
  }
  /****************************************************************************************
   * IO (ignored)
   ***************************************************************************************/
  RequestIORequireCapture() {
  }
  RequestIOReleaseCapture() {
  }
  /****************************************************************************************
   * Renderer (ignored)
   ***************************************************************************************/
  RequestRendererBeginBoundary(requestArgs) {
    throw new Error(`Should not be called (RequestRendererBeginBoundary)`);
  }
  RequestRendererRenderElement(requestArgs) {
    throw new Error(`Should not be called (RequestRendererRenderElement)`);
  }
  RequestRendererEndBoundary() {
    throw new Error("Should not be called (RequestRendererEndBoundary)");
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
  /****************************************************************************************
   * IO Events
   ***************************************************************************************/
  // Event handlers map for all types of events
  _eventHandlers = /* @__PURE__ */ new Map();
  // Key state tracking
  _pressedKeys = /* @__PURE__ */ new Set();
  // Double-click tracking: when mousedown has detail===2, we need to send
  // dblclick before the subsequent mouseup to match GacUI's expected order:
  // down → up → down → dblclick → up
  _pendingDoubleClick = void 0;
  // Helper method to get relative coordinates
  _ioGetRelativeCoordinates(event) {
    const rect = this._settings.target.getBoundingClientRect();
    return {
      x: Math.round(event.clientX - rect.left),
      y: Math.round(event.clientY - rect.top)
    };
  }
  // Helper method to create IOMouseInfo
  _ioCreateMouseInfo(event, wheel = 0) {
    const coords = this._ioGetRelativeCoordinates(event);
    return {
      ctrl: event.ctrlKey,
      shift: event.shiftKey,
      alt: event.altKey,
      osSuper: event.metaKey,
      left: (event.buttons & 1) !== 0,
      middle: (event.buttons & 4) !== 0,
      right: (event.buttons & 2) !== 0,
      x: { value: coords.x },
      y: { value: coords.y },
      wheel,
      nonClient: false
    };
  }
  // Helper method to get IOMouseButton from mouse event
  _ioGetMouseButton(event) {
    switch (event.button) {
      case 0:
        return IOMouseButton.Left;
      case 1:
        return IOMouseButton.Middle;
      case 2:
        return IOMouseButton.Right;
      case 3:
        return IOMouseButton.Mouse4;
      case 4:
        return IOMouseButton.Mouse5;
      default:
        return void 0;
    }
  }
  // Helper method to create IOKeyInfo
  _ioCreateKeyInfo(event, autoRepeatKeyDown) {
    const keyCode = mapJavaScriptKeyToGacUIKey(event);
    if (keyCode === null) {
      return null;
    }
    return {
      code: keyCode,
      ctrl: event.ctrlKey,
      shift: event.shiftKey,
      alt: event.altKey,
      osSuper: event.metaKey,
      capslock: event.getModifierState("CapsLock"),
      autoRepeatKeyDown
    };
  }
  // Helper method to hook any type of event
  _ioHookEvent(eventName, handler) {
    this._eventHandlers.set(eventName, handler);
    this._settings.target.addEventListener(eventName, handler);
  }
  _installEvents() {
    this._ioHookEvent("mousedown", (event) => {
      const mouseEvent = event;
      const button = this._ioGetMouseButton(mouseEvent);
      if (this._events !== void 0 && button !== void 0) {
        if (button === IOMouseButton.Mouse4 || button === IOMouseButton.Mouse5) {
          mouseEvent.preventDefault();
        }
        const info = this._ioCreateMouseInfo(mouseEvent);
        this._events.OnIOButtonDown({ button, info });
        if (mouseEvent.detail >= 2) {
          this._pendingDoubleClick = { button, info };
        }
      }
    });
    this._ioHookEvent("mouseup", (event) => {
      const mouseEvent = event;
      const button = this._ioGetMouseButton(mouseEvent);
      if (this._events !== void 0 && button !== void 0) {
        if (button === IOMouseButton.Mouse4 || button === IOMouseButton.Mouse5) {
          mouseEvent.preventDefault();
        }
        if (this._pendingDoubleClick !== void 0 && this._pendingDoubleClick.button === button) {
          this._events.OnIOButtonDoubleClick(this._pendingDoubleClick);
          this._pendingDoubleClick = void 0;
        }
        this._events.OnIOButtonUp({
          button,
          info: this._ioCreateMouseInfo(mouseEvent)
        });
      }
    });
    this._ioHookEvent("mousemove", (event) => {
      const mouseEvent = event;
      if (this._events !== void 0) {
        this._events.OnIOMouseMoving(this._ioCreateMouseInfo(mouseEvent));
      }
    });
    this._ioHookEvent("mouseenter", () => {
      if (this._events !== void 0) {
        this._events.OnIOMouseEntered();
      }
    });
    this._ioHookEvent("mouseleave", () => {
      if (this._events !== void 0) {
        this._events.OnIOMouseLeaved();
      }
    });
    this._ioHookEvent("wheel", (event) => {
      const wheelEvent = event;
      if (this._events !== void 0) {
        let wheel = 0;
        if (wheelEvent.deltaY !== 0) {
          wheel = wheelEvent.deltaY > 0 ? -120 : 120;
          this._events.OnIOVWheel(this._ioCreateMouseInfo(wheelEvent, wheel));
        } else if (wheelEvent.deltaX !== 0) {
          wheel = wheelEvent.deltaX > 0 ? -120 : 120;
          this._events.OnIOHWheel(this._ioCreateMouseInfo(wheelEvent, wheel));
        }
      }
      wheelEvent.preventDefault();
    });
    this._ioHookEvent("keydown", (event) => {
      const keyEvent = event;
      const keyCode = mapJavaScriptKeyToGacUIKey(keyEvent);
      if (this._events !== void 0 && keyCode !== null) {
        const autoRepeatKeyDown = this._pressedKeys.has(keyCode);
        this._pressedKeys.add(keyCode);
        const keyInfo = this._ioCreateKeyInfo(keyEvent, autoRepeatKeyDown);
        if (keyInfo !== null) {
          this._events.OnIOKeyDown(keyInfo);
          for (let i = 0; i < this._globalShortcutKeys.length; i++) {
            const shortcut = this._globalShortcutKeys[i];
            if (shortcut.code === keyInfo.code && shortcut.ctrl === keyInfo.ctrl && shortcut.shift === keyInfo.shift && shortcut.alt === keyInfo.alt && shortcut.osSuper === keyInfo.osSuper) {
              this._events.OnIOGlobalShortcutKey(shortcut.id);
              break;
            }
          }
        }
      }
      if (this._events !== void 0) {
        const key = keyEvent.key;
        let charCode;
        if (key.length === 1) {
          charCode = key;
        } else if (key === "Enter") {
          charCode = "\r";
        } else if (key === "Tab") {
          charCode = "	";
        }
        if (charCode !== void 0) {
          this._events.OnIOChar({
            code: charCode,
            ctrl: keyEvent.ctrlKey,
            shift: keyEvent.shiftKey,
            alt: keyEvent.altKey,
            osSuper: keyEvent.metaKey,
            capslock: keyEvent.getModifierState("CapsLock")
          });
        }
      }
      if (!this._settings.isShortcutReservedForBrowser(keyEvent)) {
        keyEvent.preventDefault();
      }
    });
    this._ioHookEvent("keyup", (event) => {
      const keyEvent = event;
      const keyCode = mapJavaScriptKeyToGacUIKey(keyEvent);
      if (this._events !== void 0 && keyCode !== null) {
        this._pressedKeys.delete(keyCode);
        const keyInfo = this._ioCreateKeyInfo(keyEvent, false);
        if (keyInfo !== null) {
          this._events.OnIOKeyUp(keyInfo);
        }
      }
      if (!this._settings.isShortcutReservedForBrowser(keyEvent)) {
        keyEvent.preventDefault();
      }
    });
    this._ioHookEvent("blur", () => {
      this._pressedKeys.clear();
    });
  }
  _uninstallEvents() {
    for (const [eventName, handler] of this._eventHandlers) {
      this._settings.target.removeEventListener(eventName, handler);
    }
    this._eventHandlers.clear();
    this._pressedKeys.clear();
  }
};

// ../../gaclib/renderer/lib/src/shortcuts.js
function isShortcutReservedForBrowser(event) {
  if (event.ctrlKey || event.metaKey) {
    switch (event.key.toLowerCase()) {
      case "w":
      // Close tab - too dangerous to block
      case "q":
      // Quit browser
      case "n":
      // New window
      case "r":
      // Refresh (also covered by F5)
      case "t":
      // New tab
      case "shift+t":
      // Reopen closed tab
      case "l":
      // Focus address bar
      case "d":
      // Bookmark
      case "j":
      // Downloads
      case "u":
      // View source
      case "shift+i":
      // Developer tools
      case "shift+j":
      // Developer console
      case "shift+delete":
        return true;
    }
  }
  switch (event.key) {
    case "F5":
    // Refresh
    case "F11":
    // Fullscreen
    case "F12":
      return true;
  }
  if (event.altKey) {
    switch (event.key) {
      case "Tab":
      // Alt+Tab window switching
      case "F4":
        return true;
    }
  }
  return false;
}
__name(isShortcutReservedForBrowser, "isShortcutReservedForBrowser");

// ../../gaclib/renderer/lib/src/index.js
var GacUIHtmlRendererImpl = class extends GacUIRendererImpl {
  static {
    __name(this, "GacUIHtmlRendererImpl");
  }
  start(responses, events) {
    const elements = new ElementManager();
    super._start(responses, events, elements, new VirtualDomHtmlProvider(elements), new ElementHTMLMeasurer(responses));
  }
};
function createHtmlRenderer(settings) {
  return new GacUIHtmlRendererImpl(settings);
}
__name(createHtmlRenderer, "createHtmlRenderer");
export {
  ClippedVirtualDomId,
  ElementHTMLMeasurer,
  ElementManager,
  GacUIHtmlRendererExitError,
  GacUIHtmlRendererImpl,
  GacUIRendererImpl,
  RootVirtualDomId,
  VirtualDomHtmlProvider,
  applyBounds,
  applyCommonStyle,
  applyFeatureGates,
  applyTypedStyle,
  createHtmlRenderer,
  createVirtualDomFromRenderingDom,
  fillParagraphMeasurements,
  getDefaultElementManagerConfig,
  getExtraBorder,
  getFeatureGates,
  getFontStyle,
  getImageContentType,
  getImageDataUrl,
  getImageFormatType,
  getImageUrl,
  getParagraphLayout,
  getStyle_ImageFrame,
  hasExtraBorder,
  initializeParagraph,
  initializeText,
  isCaretVisible,
  isShortcutReservedForBrowser,
  normalizeText,
  onSolidLabelResized,
  renderDebugInfo,
  renderParagraphMeasurements,
  setCaretVisible,
  setParagraphLayout,
  updateParagraphInlineImages,
  updateVirtualDomWithRenderingDomDiff
};
//# sourceMappingURL=gacui.js.map
