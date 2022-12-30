import { ButtonSocialFacebook } from '../../components/ButtonSocialFacebook/ButtonSocialFacebook';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';

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
                    <ButtonSocialFacebook title="Facebook" />

                </ViewButton>

            </ContentHeader>

            <ContentBody>

            </ContentBody>

            <ContentFooter>

            </ContentFooter>

        </Container>
    </SafeAreaView>
  );
}

export {Login};
