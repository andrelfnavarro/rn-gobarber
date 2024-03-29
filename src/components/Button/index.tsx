import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  ...remainingProps
}) => {
  return (
    <Container {...remainingProps}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
