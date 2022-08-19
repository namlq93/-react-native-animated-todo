import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Avatar, Center, Heading, HStack, IconButton, useColorModeValue, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import AnimatedColorBox from './animated-color-box';
import ThemeToggle from './theme-toggle';
import MenuButton from './menu-button';

const Sidebar = ({ state, navigation }: DrawerContentComponentProps) => {
  const currentRoute = state.routeNames[state.index];
  const handlePressBackButton = () => {
    navigation.closeDrawer();
  };
  const handlePressMenuMain = () => {
    navigation.navigate('Main');
  };
  const handlePressMenuAbout = () => {
    navigation.navigate('About');
  };

  return (
    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('blue.50', 'darkBlue.800')} p={7}>
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700'),
            }}
          />
        </HStack>
        <Avatar
          source={require('../assets/profile-image.png')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          {`Nam \nLe Quy`}
        </Heading>
        <MenuButton active={currentRoute === 'Main'} onPress={handlePressMenuMain} icon="inbox">
          Tasks
        </MenuButton>
        <MenuButton active={currentRoute === 'About'} onPress={handlePressMenuAbout} icon="info">
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  );
};

export default Sidebar;
