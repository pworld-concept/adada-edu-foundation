import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather, FontAwesome5, Foundation } from "@expo/vector-icons";
import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // useEffect(() => {
  //   const backPressed = () => {
  //     Alert.alert(
  //       "Exit App",
  //       "Do you want to exit?",
  //       [
  //         {
  //           text: "No",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel",
  //         },
  //         { text: "Yes", onPress: () => BackHandler.exitApp() },
  //       ],
  //       { cancelable: false }
  //     );
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backPressed
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].icon,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].inactiveIcon,
        headerShown: false,
        headerTintColor: "white",
        lazy: true,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].tint,
          paddingBottom: 10,
          paddingTop: 10,
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="online-training"
        options={{
          title: "Online training",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="chalkboard-teacher" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="hand-holding-heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="indent-more" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
