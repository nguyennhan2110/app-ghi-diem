import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { MainBottomBar } from "@/components/templates/BottomTabs";

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <MainBottomBar></MainBottomBar>
      </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;
