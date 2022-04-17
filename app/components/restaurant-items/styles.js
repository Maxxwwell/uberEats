/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

export const Card = styled(TouchableOpacity)`
    /* margin-bottom: 40px; */
    
`;

export const RestaurantContainer = styled(View)`
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.white};
    padding: 10px;
        margin-bottom: 20px;

    

`;

export const ResImage = styled(Image)`
    width: 100%;
    height: 240px;
`;


export const HeartIcon = styled(TouchableOpacity)`
    position: absolute;
    right: 15px;
    top: 10px;
`;


export const ResInfoContainer = styled(View)`
    padding-top: 5px;


`;

export const ResTitle = styled(Text)`
    color: ${(props) => props.theme.colors.black};
    font-size: 18px;
    font-weight: bold;

`;

export const ResTime = styled(Text)`

`;


export const RatingStyle = styled(View)`
    height: 28px;
    width: 28px;
    margin-top: 1px;
    /* border-radius: 20px; */
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.offwhite};

`;

export const ResRating = styled(Text)`
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
`;


export const Row = styled(View)`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
`;




