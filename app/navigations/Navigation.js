import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import TopRestaurantStack from './TopRestaurantStack';
import AccountStack from './AccountStack';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="account"
            tabBarOptions={{
                inactiveTintColor: "#646464",
                activeTintColor: "#00a680"
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}
            >
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

function screenOptions(route, color ) {
    let iconName;
    console.log(route.name);
    switch (route.name) {
        case "restaurants":
            iconName = "compass-outline"
            break;
        case "favorites":
            iconName = "heart-outline"
            break;
        case "top-restaurants":
            iconName = "star-outline"
            break;
        case "search":
            iconName = "magnify"
            break;
        case "account":
            iconName = "home-outline"
            break;
        default:
             break;
    }
    return (
        <Icon type="material-community" 
        name={iconName}
        size={22}
        color={color}></Icon>
    )
}