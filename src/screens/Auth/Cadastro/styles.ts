import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from "@src/styles/theme";


export const ContentHeader = styled.View`
    width: 90%;
    margin:  auto;
    align-items: center;
    justify-content: center;
    padding-top: ${RFValue(20)}px;
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
`;


