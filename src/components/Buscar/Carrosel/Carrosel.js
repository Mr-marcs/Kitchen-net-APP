import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Text } from '@ui-kitten/components';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ReceitasOFiciais from './Tabs/ReceitasOficiais/ReceitasOficiais';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';
import ReceitasComunidade from './Tabs/ReceitasComunidade/ReceitasComunidade';
import Pessoas from './Tabs/Pessoas/Pessoas';
import ListaReceitas from '@components/Buscar/Carrosel/Tabs/ListasReceitas/ListaReceitas';

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

const Tabs = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Receitas Oficiais' },
        { key: 'second', title: 'Receitas da Comunidade' },
        { key: 'third', title: 'Pessoas' },
        { key: 'forth', title: 'Listas de Receitas' },
    ]);
    

    const SecondRoute = () => (
        <Text>LOL2</Text>
    );

    const renderScene = SceneMap({
        first: ReceitasOFiciais,
        second: ReceitasComunidade,
        third: Pessoas,
        forth: ListaReceitas,
    });

    return (
        <TabView
            lazy
            renderLazyPlaceholder={LoadingComponent}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={TabBarView}
        />
    );
}

export default Tabs;