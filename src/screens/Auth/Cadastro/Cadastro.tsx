import React from 'react';
import { SafeAreaView, Text, KeyboardAvoidingView } from 'react-native';
import {
    Container,
    ContentHeader,
    Title,
    Descripition,
    ContentBody,
    ContentFooter,
    TextButton,
    TitleTextButton,
    Link,
} from './styles';
import Input from './../../../components/input'
import { Button } from './../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Cadastro: React.FC = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Sinta imediatamente a facilidade de transação apenas se cadastrando</Title>
                    <Descripition>Preencha os dados abaixo</Descripition>
                </ContentHeader>

                <ContentBody>
                    <Input
                        iconLeftName='person-outline'
                        placeholder='Nome'
                        leftIcon
                    />
                    <Input
                        iconLeftName='mail-outline'
                        placeholder='E-mail'
                        leftIcon
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType='email-address'
                    />
                    <Input
                        placeholder='Senha'
                        leftIcon
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                        iconLeftName='lock-closed-outline'
                    />

                    <Button
                        title='Cadastrar'
                        onPress={handleLogin}
                    />



                </ContentBody>

                <ContentFooter>

                    <TextButton onPress={handleLogin}>
                        <TitleTextButton>Já tem um conta ? <Link>Login</Link></TitleTextButton>
                    </TextButton>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    );
}

export { Cadastro };
