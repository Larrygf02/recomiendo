import React from 'react';
//import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Restaurant from '../screens/Restaurant';
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="restaurants" component={Restaurant}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}