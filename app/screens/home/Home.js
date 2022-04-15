/* eslint-disable prettier/prettier */


import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { Scaffold } from './styles';
import HeaderTabs from '../../components/headerTabs/HeaderTabs';
import { colors } from '../../theme/colors';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantItem from '../../components/restaurant-item/RestaurantItem';

export default function Home() {
  return (
    <Scaffold testID="home-screen">
      <StatusBar backgroundColor={colors.black} />
      <HeaderTabs />
      <SearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
        {/* <RestaurantItem />
        <RestaurantItem /> */}

      </ScrollView>

    </Scaffold>
  );
}
