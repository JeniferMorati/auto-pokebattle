import React from "react";
import AppRouter from "./core/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
