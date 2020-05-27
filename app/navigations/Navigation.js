import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import TopRestaurantStack from './TopRestaurantStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="restaurants"
                component={RestaurantsStack}
                options={{ title: 'Restaurantes' }}>
                </Tab.Screen>
                <Tab.Screen 
                name="favorites" 
                component={FavoritesStack}
                options={{ title: 'Favoritos'}}></Tab.Screen>
                <Tab.Screen 
                name="top-restaurants" 
                component={TopRestaurantStack}
                options={{ title: 'Top 5'}}></Tab.Screen>
                <Tab.Screen 
                name="search" 
                component={SearchStack}
                options={{ title: 'Buscar'}}></Tab.Screen>
                <Tab.Screen 
                name="account" 
                component={AccountStack}
                options={{ title: 'Cuenta'}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}