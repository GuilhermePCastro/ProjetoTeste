import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
    width: 100%;
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-top: ${RFValue(50)}px;;
`;

export const Descripition = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
