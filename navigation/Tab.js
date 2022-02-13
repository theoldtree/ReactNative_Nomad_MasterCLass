import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useColorScheme } from "react-native";
import Movie from "../Screens/MovieScreen/Movie";
import Search from "../Screens/SearchScreen/Search";
import TV from "../Screens/TVScreen/TV";
import { Ionicons } from "@expo/vector-icons";
import {
  BLACK_COLOR,
  DARK_GREY,
  LIGHT_GREY,
  YELLOW_COLOR,
} from "../styles/constants";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "Dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: !isDark ? BLACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: !isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: !isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: !isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: {
          backgroundColor: !isDark ? BLACK_COLOR : "white",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          marginTop: 5,
          marginBottom: 5,
        },
        headerTitleStyle: {
          color: !isDark ? "white" : BLACK_COLOR,
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movie}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "film" : "film-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={TV}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="tv-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
