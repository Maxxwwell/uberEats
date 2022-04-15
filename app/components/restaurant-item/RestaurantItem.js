/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { Card, HeartIcon, RatingStyle, ResImage, ResInfoContainer, ResRating, RestaurantContainer, ResTime, ResTitle, Row } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';


export default function RestaurantItem() {
    return (
        <Card activeOpacity={0.9 } style={{elevation: 5}}>
            <RestaurantContainer>
                <RestaurantImage />
                <RestaurantInfo />
            </RestaurantContainer>
        </Card>
    );
}

const RestaurantImage = () => (
    <>
        <ResImage source={{
            uri: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_fastfood2.jpg',
        }}
        />
        <HeartIcon>
            <Icon name="heart-outline" size={25} color={colors.white} />
        </HeartIcon>
    </>

);

const RestaurantInfo = () => (

    <ResInfoContainer>
        <Row>
            <ResTitle>Kentucky Fried Chicken</ResTitle>
            <RatingStyle>
                <ResRating>4.5</ResRating>
            </RatingStyle>
        </Row>

        <ResTime>30-45 • min</ResTime>


    </ResInfoContainer>


);
