/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const SearchContainer = styled(View)`
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.white};

`;

export const IconContainer = styled(View)`
    margin-left: 10px;
`;


export const IconButton = styled(View)`
    background-color: ${(props) => props.theme.colors.white};
    margin-right: 8px;
    flex-direction: row;
    padding: 9px;
    border-radius: 30px;
    align-items: center;
`;

export const SearchText = styled(Text)`
    margin-left: 5px;
    color: ${(props) => props.theme.colors.black};

`;
