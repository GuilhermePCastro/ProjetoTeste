import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from "@src/styles/theme";
import { Pressable } from "react-native"

export const Container = styled.View`
    padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    width: 90%;
    margin:  auto;
    align-items: center;
    justify-content: center;
    padding-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-top: ${RFValue(50)}px;
    color: ${({ theme }) => theme.COLORS.PURPLEDARK2};
`;

export const Descripition = styled.Text`
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(14)}px;
    margin-bottom: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
`;

export const TextButton = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TitleTextButton = styled.Text`
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.COLORS.GRAY2};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Link = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.BLUE2};
    text-decoration: underline;
`;
