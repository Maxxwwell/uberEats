/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from '../bottomTabs/BottomTabs';
import Home from '../../screens/home/Home';
import Search from '../../screens/search/Search';
import Orders from '../../screens/orders/Orders';
import Account from '../../screens/account/Account';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTabs">
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="BottomTabs" component={BottomTabs} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Search"
                    component={Search}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Orders"
                    component={Orders}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Account"
                    component={Account}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
