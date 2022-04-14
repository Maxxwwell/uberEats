/* eslint-disable prettier/prettier */


import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { Scaffold } from './styles';
import HeaderTabs from '../../components/headerTabs/HeaderTabs';
import { colors } from '../../theme/colors';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';

export default function Home() {
  return (
    <Scaffold testID="home-screen">
      <StatusBar backgroundColor={colors.black} />
      <HeaderTabs />
      <SearchBar />
      <Categories />
    </Scaffold>
  );
}
