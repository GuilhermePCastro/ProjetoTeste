import { ButtonSocialFacebook } from '../../components/ButtonSocialFacebook/ButtonSocialFacebook';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import Input from '../../components/input/input';

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Descripition,
    ViewButton
} from './styles';



const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>

                    <Title>Seja bem-vindo(a) {"\n"} ao WalletApp</Title>

                    <Descripition>Entrar com rede sociais</Descripition>

                    <ViewButton>

                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialFacebook iconName="facebook-f" title="Facebook" size={24} />

                    </ViewButton>

                </ContentHeader>

                <ContentBody>
                    <Input
                        iconLeftName="mail-outline"
                        leftIcon
                        placeholder='E-mail' />
                    <Input
                        leftIcon
                        rightIcon
                        iconRightName='eye-off-outline'
                        iconLeftName='lock-closed-outline'
                        placeholder='Senha'/>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    );
}

export { Login };
