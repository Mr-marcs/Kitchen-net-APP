import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from '@components/screen/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Screen>
            <Text>Lol</Text>
        </Screen>
    );
}

export default Home;
