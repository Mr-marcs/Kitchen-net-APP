import React, { useState } from "react";
import { StyleSheet, View, Animated, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import CarouselPages from "@components/CarouselPages/CarouselPages";
import axios from 'axios'
const items = ["Mais curtidas", "Mais recentes", "Em alta"];

const CarouselPopularity = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Layout style={style.container}>
            <TabView
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
                <Tab title="Mais curtidas" >
                    <CarouselPages Index={0}/>
                </Tab>
                <Tab title="Mais recentes">
                    <CarouselPages Index={1} />
                </Tab>
                <Tab title="Em alta">
                    <CarouselPages Index={2}/>
                </Tab>
            </TabView>
        </Layout>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    pages: {
        marginTop: 10,
    }
});

export default CarouselPopularity;
