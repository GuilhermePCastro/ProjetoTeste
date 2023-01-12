import { ButtonSocialFacebook } from './../../../components/ButtonSocialFacebook/ButtonSocialFacebook';
import React from 'react';
import { SafeAreaView, Text, KeyboardAvoidingView } from 'react-native';
import { ButtonSocialGoogle } from './../../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import Input from './../../../components/input/input';
import { Button } from './../../../components/Button'
import {
    Container,
    Title,
    Descripition,
    Link,
 } from './../../../styles/stylesPadrao'

import {
    ContentHeader,
    ContentBody,
    ContentFooter,
    ViewButton,
    ButtonSingUp,
    TitleButtomSingUp,
    ContentForgotPassword,
    TextForgotPassword,
    ButtonForgot,
} from './styles';


import { useNavigation } from '@react-navigation/native';



const Login: React.FC = () => {

    const navigation = useNavigation();

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }

    const handleRecuperarSenha = () => {
        navigation.navigate('RecuperarSenha');
    }


    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior='position'
                enabled
            >
                <Container>
                    <ContentHeader>

                        <Title>Seja bem-vindo(a) {"\n"} ao WalletApp</Title>

                        <Descripition>Entrar com rede sociais</Descripition>

                        <ViewButton>

                            <ButtonSocialGoogle title="Google"/>
                            <ButtonSocialFacebook iconName="facebook-square" title="Facebook" size={24} />

                        </ViewButton>

                    </ContentHeader>

                    <ContentBody>
                        <Input
                            iconLeftName="mail-outline"
                            leftIcon
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType='email-address'
                            placeholder='E-mail' />



                        <Input
                            leftIcon
                            secureTextEntry
                            iconLeftName='lock-closed-outline'
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType='default'
                            placeholder='Senha'/>

                        <ContentForgotPassword>
                            <ButtonForgot onPress={handleRecuperarSenha}>
                                <TextForgotPassword>Esqueceu a sua senha ?</TextForgotPassword>
                            </ButtonForgot>
                        </ContentForgotPassword>

                        <Button
                            title="Entrar"
                            onPress={()=>{}}
                            variant='primary'

                        />

                    </ContentBody>

                    <ContentFooter>
                        <ButtonSingUp style={{marginTop: 20}} onPress={handleCadastro}>
                            <TitleButtomSingUp>Não tem cadastro ainda ? <Link>Cadastre-se</Link></TitleButtomSingUp>
                        </ButtonSingUp>
                    </ContentFooter>



                </Container>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export { Login };
