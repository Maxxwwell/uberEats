/* eslint-disable prettier/prettier */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from '../../theme/icons';
import { TabIcon } from './styles';
import Home from '../../screens/home/Home';
import Search from '../../screens/search/Search';
import Grocery from '../../screens/grocery/Grocery';
import Orders from '../../screens/orders/Orders';
import Account from '../../screens/account/Account';
import { colors } from '../../theme/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    header: () => null,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarActiveTintColor: colors.black,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 3,
                        fontWeight: '600',
                    },
                    tabBarStyle: {
                        elevation: 3,
                        height: 58,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderTopColor: colors.offwhite,
                        backgroundColor: colors.offwhite,
                    },
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? icons.home_filled : icons.home;
                        } else if (route.name === 'Search') {
                            iconName = focused ? icons.search_filled : icons.search;
                        } else if (route.name === 'Grocery') {
                            iconName = focused ? icons.grocery_filled : icons.grocery;
                        } else if (route.name === 'Orders') {
                            iconName = focused ? icons.orders : icons.orders_filled;
                        } else if (route.name === 'Account') {
                            iconName = focused ? icons.account_filled : icons.account;
                        }
                        return <TabIcon source={iconName} />;
                    },
                })
            }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Grocery" component={Grocery} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Account" component={Account} />

        </Tab.Navigator>
    );
}
