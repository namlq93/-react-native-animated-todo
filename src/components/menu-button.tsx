import React from 'react';
import { Button, Icon, useColorModeValue } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface Props {
  active: boolean;
  icon: string;
  children: React.ReactNode;
  onPress: () => void;
}

const MenuButton = ({ active, icon, children, onPress }: Props) => {
  const colorScheme = useColorModeValue('blue', 'darkBlue');
  const inactiveTextColor = useColorModeValue('blue.500', undefined);
  const pressedBgColor = useColorModeValue('primary.100', 'primary.600');

  return (
    <Button
      size="lg"
      colorScheme={colorScheme}
      _pressed={{
        bg: pressedBgColor,
      }}
      _text={{
        color: active ? 'blue.50' : inactiveTextColor,
      }}
      bg={active ? undefined : 'transparent'}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
