import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Sidebar from './components/sidebar';
import AboutScreen from './screens/about-screen';
import MainScreen from './screens/main-screen';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      // eslint-disable-next-line react/jsx-props-no-spreading
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default Navigator;
