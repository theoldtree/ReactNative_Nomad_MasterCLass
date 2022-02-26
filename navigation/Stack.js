import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../Screens/Detail/Detail";
import { BLACK_COLOR } from "../styles/constants";

const NativeStack = createNativeStackNavigator();

export default function Stack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: BLACK_COLOR },
        headerTitleStyle: { color: "white" },
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  );
}
