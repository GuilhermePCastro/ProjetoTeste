import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import {TouchableOpacity } from 'react-native'

export const Button = styled.TouchableOpacity`
    width: 55%;
    height: ${RFValue(55)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const IconeGoole = styled.Image`
    height: ${RFValue(25)}px;
    width: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    margin-left: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

