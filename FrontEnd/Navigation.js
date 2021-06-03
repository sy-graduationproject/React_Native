import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Memo from './Memo';
import Settings from './Settings';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: 'skyblue' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Memo"
                component={Memo}
                options={{
                    tabBarLabel: 'Memo',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="lead-pencil" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings" size={26} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
            <MyTabs />
    );
}