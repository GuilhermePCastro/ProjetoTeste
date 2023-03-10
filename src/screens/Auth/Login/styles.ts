import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Pressable, Text } from 'react-native'

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
    width: 100%;
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
`;


export const ViewButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


export const ButtonSingUp = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TitleButtomSingUp = styled.Text`
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.COLORS.GRAY2};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;


export const ContentForgotPassword = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
`;

export const TextForgotPassword = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.BLUE2};
    text-decoration: underline;
`;

export const ButtonForgot = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-top: ${RFValue(10)}px;
    width: 50%;
`;


