import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import {TouchableOpacity } from 'react-native'

export const IconeFacebook = styled.TouchableOpacity`
    color: ${({ theme }) => theme.COLORS.WHITE};
`;


export const Button = styled.TouchableOpacity`
    width: ${RFValue(140)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: ${RFValue(10)}px;
    border-radius: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.COLORS.TYPOSOCIAL};
`;



export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    margin-left: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

