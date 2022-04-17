/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const CategoriesContainer = styled(View)`
    align-items: center;
    /* width: 50%; */
    justify-content: space-between;
    margin-top: 15px;
    /* padding-top: 1px; */
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    /* margin-top: 10px; */



    /* padding: 20px; */

    background-color: ${(props) => props.theme.colors.white};
`;

export const ScrollContainer = styled(ScrollView)`
  
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


