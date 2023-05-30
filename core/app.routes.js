import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Arena, Login } from "../pages";

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Arena"
        component={Arena}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
