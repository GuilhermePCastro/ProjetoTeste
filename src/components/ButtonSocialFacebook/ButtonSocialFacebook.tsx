import React from 'react';
import { Button, Title } from './styles';
import PngFacebook from "../../assets/facebook.png";
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
    title: string
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, ...rest}) => {
    return (
        <Button {...rest}>

            <Title>{title}</Title>
        </Button>
    );
}

export { ButtonSocialFacebook };
