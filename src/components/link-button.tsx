import React from 'react';
import * as Linking from 'expo-linking';
import { Button, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
  href: string;
}

const LinkButton = ({ href, ...props }: Props) => {
  const handlePress = () => {
    Linking.openURL(href);
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...props} onPress={handlePress} />;
};

export default LinkButton;
