import React from 'react';
import { View, Text } from 'react-native';
import {
    ContentHeader,
    ContentBody,
    ContentFooter
} from './styles';

import {
    Container,
    Descripition,
    Title,
    TextButton,
    TitleTextButton,
    Link
} from '../../../styles/stylesPadrao'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/input';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';


const RecuperarSenha: React.FC = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ContentHeader>
                    <Title>Recupere sua senha</Title>
                    <Descripition>Coloque seu e-mail que enviaremos um link para que você possa redefinir a sua senha</Descripition>
                </ContentHeader>

                <ContentBody>
                    <Input
                        iconLeftName='mail-outline'
                        placeholder='E-mail'
                        leftIcon
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType='email-address'
                    />

                    <Button
                        title="Enviar e-mail"
                        onPress={() => {}}
                        style={{ marginTop: 5}}
                    />
                </ContentBody>

                <ContentFooter>
                    <TextButton onPress={handleLogin}>
                        <TitleTextButton>
                            <Link>Voltar para o Login</Link>
                        </TitleTextButton>
                    </TextButton>
                </ContentFooter>

            </ScrollView>
        </Container>
    );
}

export { RecuperarSenha };
