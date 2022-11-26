import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";

import WelcomePage1 from "./src/pages/welcome/WelcomePage1";
import WelcomePage2 from "./src/pages/welcome/WelcomePage2";
import WelcomePage3 from "./src/pages/welcome/WelcomePage3";
import Onboarding from "./src/components/Onboarding";
import HomePage from "./src/pages/shop/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  // push notifications
  registerNNPushToken(4987, "MlbT33J7dgW3YgaI361cUu");
  // get App ID and App Token from NativeNotify.com

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }}>
          {(props) => <Onboarding {...props} />}
        </Stack.Screen>
        <Stack.Screen name="WelcomePage3" options={{ headerShown: false }}>
          {(props) => <WelcomePage3 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="WelcomePage1" options={{ headerShown: false }}>
          {() => <WelcomePage1 />}
        </Stack.Screen>
        <Stack.Screen name="WelcomePage2" options={{ headerShown: false }}>
          {() => <WelcomePage2 />}
        </Stack.Screen>
        <Stack.Screen name="HomePage" options={{ headerShown: false }}>
          {(props) => <HomePage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
