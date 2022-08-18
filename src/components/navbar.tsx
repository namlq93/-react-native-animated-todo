import React from 'react';
import { HStack, IconButton } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const NavBar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const handlePressMenuButton = () => {
    navigation.openDrawer();
  };

  return (
    <HStack h={40} alignItems="center" p={4}>
      <IconButton
        // position="absolute"
        // top="80px"
        // left="16px"
        // size="lg"
        // bg="amber.400"
        onPress={handlePressMenuButton}
        borderRadius="full"
        _icon={{
          as: Feather,
          name: 'menu',
          size: 6,
          color: 'white',
        }}
      />
    </HStack>
  );
};

export default NavBar;
