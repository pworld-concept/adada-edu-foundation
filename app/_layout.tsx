import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const navigation = useNavigation("");
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            statusBarColor: Colors[colorScheme ?? "light"].tint,
            title: "Home",
            headerRight: () => (
              <View style={styles.header}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  Adada Edu Foundation
                </Text>
              </View>
            ),
            header: ({}) => (
              <SafeAreaView
                style={[
                  styles.header,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#1a9b02",
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../assets/images/adada-logo.png")}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Adada Edu Foundation
                  </Text>
                </View>
                <View style={styles.header}>
                  <FontAwesome5
                    onPress={() => navigation.navigate("(auth)/login" as never)}
                    name="user-circle"
                    size={24}
                    color={Colors[colorScheme ?? "light"].icon}
                  />
                </View>
              </SafeAreaView>
            ),
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="(auth)/login"
          options={{
            headerTitle: "Login",
            headerTintColor: Colors[colorScheme ?? "light"].icon,
            statusBarColor: Colors[colorScheme ?? "light"].tint,
            headerStyle: {
              backgroundColor: Colors[colorScheme ?? "light"].tint,
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "auto",
    padding: 10,
    paddingTop: 20,
  },
});
