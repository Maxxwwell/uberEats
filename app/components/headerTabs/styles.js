/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const HeaderContainer = styled(View)`
    /* flex: 1; */
    flex-direction: row;
    align-self: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 8px;

    background-color: ${(props) => props.theme.colors.white};
`;

export const Button = styled(TouchableOpacity)`
    margin-top: 10px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    /* padding-left: 15px;
    padding-right: 15px; */
    width: 100px;
    height: 35px;

`;

export const HeaderText = styled(Text)`
    /* color: ${(props) => props.theme.colors.white}; */
    font-size: 16px;
    font-weight: 900;
`;


