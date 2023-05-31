import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Arena, Login } from "../pages";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
        name="Arena"
        component={Arena}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
