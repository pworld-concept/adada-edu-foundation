/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#25811E";
const tintColorDark = "#25811E";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#fff",
    inactiveIcon: "#7cdc6a",
    tabIconDefault: "#fff",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    inactiveIcon: "#7cdc6a",
    tint: tintColorDark,
    icon: "#fff",
    tabIconDefault: "#fff",
    tabIconSelected: tintColorDark,
  },
};
