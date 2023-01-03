import React from 'react';
import { Button, IconeGoole, Title } from './styles';
import PngGoogle from "../../assets/google.png";
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps{
    title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest}) => {
    return (
        <Button {...rest} style={{ elevation: 2}}>
            <IconeGoole source={PngGoogle} resizeMode="contain"/>
            <Title>{title}</Title>
        </Button>
    );
}

export { ButtonSocialGoogle };
