import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Movie from '../Screens/Movie';
import Search from '../Screens/Search';
import TV from '../Screens/TV';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

