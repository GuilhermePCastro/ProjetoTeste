import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(5)}px;
    width: 100%;
    height: ${RFValue(55)}px;
    padding: 0  ${RFValue(12)}px;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.COLORS.GRAY6};
    flex-direction: row;
    align-items: center;

`;

export const InputContainer = styled.TextInput`
    flex: 1;
    border: 0;
    height: ${RFValue(55)}px;
    border-radius: ${RFValue(10)}px;
    font-family:  ${({theme}) => theme.FONTS.POPPINSLIGHT};
    font-size: ${RFValue(14)}px;
`;


