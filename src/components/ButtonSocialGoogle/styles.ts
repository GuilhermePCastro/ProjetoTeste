import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
    width: ${RFValue(140)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: ${RFValue(10)}px;
    border-radius: ${RFValue(15)}px;

    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
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

