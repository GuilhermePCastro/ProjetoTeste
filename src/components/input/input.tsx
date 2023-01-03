import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { Container, InputContainer } from './styles';
import { useTheme } from 'styled-components';


interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconLeftName?: React.ComponentProps<typeof Ionicons>["name"];
    iconRightName?: React.ComponentProps<typeof Ionicons>["name"];
    placeholder?:string;
}

const input: React.FC<InputProps> = ({ rightIcon, leftIcon, iconLeftName, iconRightName, ...rest }) => {

    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconLeftName}
                    size={24}
                    color={COLORS.GRAY4}
                    style={{ padding: 5, paddingRight: 10, marginBottom: 4}}
                />
            )}

            <InputContainer {...rest}
            placeholderTextColor={COLORS.GRAY4} />

            {rightIcon && (
                <Ionicons
                    name={iconRightName}
                    size={24}
                    color={COLORS.GRAY4}
                    style={{ padding: 5, paddingLeft: 10}}
                />
            )}
        </Container>
    );
}

export default input;
