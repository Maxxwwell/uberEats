/* eslint-disable prettier/prettier */


import { View, Text, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Scaffold } from './styles';
import HeaderTabs from '../../components/headerTabs/HeaderTabs';
import { colors } from '../../theme/colors';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantItems from '../../components/restaurant-items/RestaurantItems';
import { restaurants } from '../../components/restaurant-items/restaurants';

const YELP_API_KEY = 'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

export default function Home() {

  // const [restaurantData, setRestaurantData] = useState(restaurants);
  // const getRestaurantsFromYelp = () => {
  //   const yelpURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego';

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };
  //   return fetch(yelpURL, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) => setRestaurantData(json.businesses));
  // };


  return (
    <Scaffold testID="home-screen">
      <StatusBar backgroundColor={colors.black} />
      {/* <HeaderTabs />
      <SearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />

      </ScrollView> */}
      <Text>Maxwell</Text>

    </Scaffold>
  );
}
