import React from 'react';
import { Button, IconeFacebook, Title } from './styles';
import PngFacebook from "../../assets/facebook.png";
import { RectButtonProps } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

interface Props extends RectButtonProps{
    title: string;
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
    size: number
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, iconName, size, ...rest}) => {
    return (
        <Button {...rest} style={{ elevation: 2}}>
            <IconeFacebook name={iconName} size={size}/>
            <Title>{title}</Title>
        </Button>
    );
}

export { ButtonSocialFacebook };
