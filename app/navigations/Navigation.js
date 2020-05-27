import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Restaurant from '../screens/Restaurant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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