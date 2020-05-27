import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Restaurant from '../screens/Restaurant';
import Favorites from '../screens/Favorites';
import TopRestaurant from '../screens/TopRestaurant';
import Search from '../screens/Search';
import Account from '../screens/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="restaurants" 
                component={Restaurant} 
                options={{ title: 'Restaurantes' }}></Tab.Screen>
                <Tab.Screen 
                name="favorites" 
                component={Favorites}
                options={{ title: 'Favoritos'}}></Tab.Screen>
                <Tab.Screen 
                name="top-restaurants" 
                component={TopRestaurant}
                options={{ title: 'Top 5'}}></Tab.Screen>
                <Tab.Screen 
                name="search" 
                component={Search}
                options={{ title: 'Buscar'}}></Tab.Screen>
                <Tab.Screen 
                name="account" 
                component={Account}
                options={{ title: 'Cuenta'}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}