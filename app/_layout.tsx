import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Alert, I18nManager, StatusBar, View } from "react-native";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // تحقق من حالة RTL الحالية
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    }
  }, []);
  // const [isLoggedIn, setLoggedIn] = useState(false);

  const [fontsLoaded] = useFonts({
    "Noto-Kufi-Arabic-Regular": require("../assets/fonts/NotoKufiArabic-Regular.ttf"),
    "Noto-Kufi-Arabic-Bold": require("../assets/fonts/NotoKufiArabic-Bold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/login/index" />
          <Stack.Screen name="(routes)/sign-up/index" />
          <Stack.Screen name="(routes)/drive-home/index" />
          {/* <Stack.Screen name="(routes)/home/index" /> */}
          {/* <Stack.Screen name="(routes)/profile/index" /> */}
          <Stack.Screen name="(routes)/ride/index" />
          <Stack.Screen name="(routes)/driver-signup/index" />
          {/* Add other screens here */}
        </Stack>
        </AuthProvider>
    </>
  );
}
