import styled from 'styled-components/native';
import { Pressable, Text,TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(30)}px;
    background-color: ${({theme}) => theme.COLORS.PURPLEDARK1};
    border-radius: ${RFValue(10)}px;

`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family:  ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color:  ${({theme}) => theme.COLORS.WHITE};
    font-size: ${RFValue(18)}px;

`;

