/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { Card, HeartIcon, RatingStyle, ResImage, ResInfoContainer, ResRating, RestaurantContainer, ResTime, ResTitle, Row } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { restaurants } from './restaurants';


export default function RestaurantItems(props) {
    return (
        <>
            {
                props.restaurantData.map((restaurant, index) => (
                    <Card activeOpacity={0.9} style={{ elevation: 5 }} key={index}>

                        <RestaurantContainer>
                            <RestaurantImage image={restaurant.image_url} />
                            <RestaurantInfo
                                name={restaurant.name}
                                rating={restaurant.ratings}

                            />
                        </RestaurantContainer>
                    </Card>

                ))
            }
        </>
    );
}

const RestaurantImage = (props) => (
    <>
        <ResImage source={{
            uri: props.image,
        }}
        />
        <HeartIcon>
            <Icon name="heart-outline" size={25} color={colors.white} />
        </HeartIcon>
    </>

);

const RestaurantInfo = (props) => (

    <ResInfoContainer>
        <Row>
            <ResTitle>{props.name}</ResTitle>
            <RatingStyle>
                <ResRating>{props.rating}</ResRating>
            </RatingStyle>
        </Row>

        <ResTime>30-45 • min</ResTime>


    </ResInfoContainer>


);
