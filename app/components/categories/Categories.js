/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { CategoriesContainer, CategoryIcon, CategoryText } from './styles';
import { items } from './items';
import { ScrollView } from 'react-native-gesture-handler';


export default function Categories() {
    return (
        <ScrollView
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


        </ScrollView>

    );
}
