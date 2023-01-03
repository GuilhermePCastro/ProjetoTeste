import React from 'react';
import { Button, IconeFacebook, Title } from './styles';
import PngFacebook from "../../assets/facebook.png";
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface Props extends TouchableOpacityProps{
    title: string;
    iconName?: keyof typeof AntDesign.glyphMap;
    size: number
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, iconName, size, ...rest}) => {

    const { COLORS } = useTheme() ;
    return (
        <Button {...rest} style={{ elevation: 2}}>
            <AntDesign name={iconName} size={size} color={COLORS.WHITE}/>
            <Title>{title}</Title>
        </Button>
    );
}

export { ButtonSocialFacebook };
