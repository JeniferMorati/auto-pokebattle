import React from "react";
import AppRouter from "./core/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { MainProvider } from "./context/main";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainProvider>
          <AppRouter />
        </MainProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
