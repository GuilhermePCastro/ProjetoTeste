import React from 'react';
import { Text } from 'react-native'
import { Container, Title, Content } from './styles';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { variants } from './Variant';
import { useTheme } from 'styled-components';


interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black';
    style?: TouchableOpacityProps['style'];
}

const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => { },
    iconName,
    isLoading,
    disabled,
    variant = 'primary',
    style,
    ...rest }
) => {

    const theme = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={buttonStyle.button}
        >


               {isLoading ? (
                    <ActivityIndicator color={theme.COLORS.GRAY1} />
               ): (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            size={20}
                            color={buttonStyle.icon.color}
                        />
                    )}
                    <Title style={buttonStyle.title}>{title}</Title>
                </Content>
               )}

        </Container>
    );

}

export { Button };
