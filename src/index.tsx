import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AboutScreen from './screens/about-screen';
import MainScreen from './screens/main-screen';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default Navigator;
