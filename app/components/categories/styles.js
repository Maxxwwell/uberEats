/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

export const CategoriesContainer = styled(View)`
  align-items: center;
    width: 100px;
    height: 70px;
    margin-top: 10px;
    padding-top: 5px;
    background-color: ${(props) => props.theme.colors.white};
`;

export const CategoryIcon = styled(Image)`
    width: 50px;
    height: 40px;

    /* object-fit: 'contain'; */
`;


export const CategoryText = styled(Text)`
    font-weight: bold;
    color: ${(props) => props.theme.colors.black};

`;


