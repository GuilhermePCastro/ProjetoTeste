import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons'
import { Container, InputContainer } from './styles';
import { useTheme } from 'styled-components';
import { TouchableOpacity, TextInputProps } from 'react-native';


interface InputProps extends TextInputProps{
    leftIcon?: boolean;
    iconLeftName?: React.ComponentProps<typeof Ionicons>["name"];
    secureTextEntry?:boolean;
}

const input: React.FC<InputProps> = ({leftIcon, iconLeftName, secureTextEntry, ...rest }) => {

    const [secury, setSecury] = useState(secureTextEntry);
    const { COLORS } = useTheme();

    function verificouSenha(){
        setSecury(!secury);
    }

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconLeftName}
                    size={24}
                    color={COLORS.GRAY3}
                    style={{ padding: 5, paddingRight: 10, marginBottom: 4}}
                />
            )}

            <InputContainer {...rest}
                secureTextEntry={secury}
                underlineColorAndroid='transparent'
                placeholderTextColor={COLORS.GRAY3}
            />

            {secureTextEntry && (
                <TouchableOpacity onPress={verificouSenha}>
                    <Ionicons
                        name={secury ? 'eye-outline' : 'eye-off-outline'}
                        size={24}
                        color={COLORS.GRAY3}
                        style={{ padding: 5, paddingLeft: 10}}
                    />
                </TouchableOpacity>
            )}
        </Container>
    );
}

export default input;
