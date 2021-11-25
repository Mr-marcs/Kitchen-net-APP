import React, { useState } from "react";
import { StyleSheet, Dimensions, View, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Layout, Tab, Text } from '@ui-kitten/components';
import CarouselPages from "@components/CarouselPages/CarouselPages";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import axios from 'axios'
import LoadingComponent from "@components/Loading/Component/LoadingComponent";
const items = ["Mais curtidas", "Mais recentes", "Em alta"];

const CarouselPopularity = () => {
    const TabBarView = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#E24333', height: 4}}
            style={{elevation: 0}}
            tabStyle={{width: 'auto', backgroundColor: '#fff'}}
            indicatorContainerStyle={{height: 52}}
            labelStyle={{color: '#000', fontSize: 10}}
            scrollEnabled
        />
    );
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        {key: 'first', title: 'Mais curtidas'},
        {key: 'second', title: 'Mais recentes'},
        {key: 'third', title: 'Em alta'},
    ]);
    const FirstRoute = () => {
        return(
            <View>
                <Text>asdasd</Text>
            </View>
        );
    }
    const SecondRoute = () => {
        return(
            <View>
                <Text>asdasd</Text>
            </View>
        );
    }
    return (
        <Layout style={style.container}>
            <TabView
                lazy
                renderLazyPlaceholder={LoadingComponent}
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                    third: FirstRoute,
                })}
                renderTabBar={TabBarView}
            />
            {/*<TabView
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
            </TabView>*/}
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
