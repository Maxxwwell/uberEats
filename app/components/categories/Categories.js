/* eslint-disable prettier/prettier */
import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { CategoriesContainer, CategoryIcon, CategoryText, ScrollContainer } from './styles';
import { items } from './items';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

export default function Categories() {
    return (
        <ScrollContainer
            showsHorizontalScrollIndicator={false}
            horizontal>
            {
                items.map((item, index) => (
                    <CategoriesContainer key={index}>
                        <CategoryIcon source={items[index].image} />
                        <CategoryText>{items[index].text}</CategoryText>

                    </CategoriesContainer>
                ))
            }


        </ScrollContainer>

    );
}
