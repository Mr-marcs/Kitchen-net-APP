import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@pages/AreaAcessada/home/home';
import Feed from '@pages/AreaAcessada/feed/feed';
import Receita from '@pages/AreaAcessada/Receita/Receita';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChefHat from '@assets/svg/chefhat.svg';
import Panela from '@assets/svg/panela.svg';
import Perfil from '@pages/AreaAcessada/Perfil/Perfil';
import AdicionarReceita from '@pages/AreaAcessada/AdicionarReceita/AdicionarReceita';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false,
                tabBarBackgroudColor: '#F24333',
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#bababa',
                tabBarStyle:{
                    backgroundColor: '#F24333',
                    paddingVertical: 2,
                    paddingBottom: 3,
                },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({color}) => {
                        return(
                            <Ionicons name="home" color={color} size={24}/>
                        );
                    },
                }}
            />
            <Tab.Screen 
                name="Feed" 
                component={Feed}
                options={{
                  tabBarIcon: ({color}) => {
                    return(
                        <Ionicons name="newspaper-outline" color={color} size={24}/>
                    );
                  },
                }}
            />
            <Tab.Screen 
                name="AdicionarReceita" 
                component={View}
                options={{
                    tabBarIcon: ({color}) => {
                        return(
                            <Panela width={38} height={38} fill={color} />
                        );
                    },
                    tabBarLabel: () => null,
                }}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('AdicionarReceita');
                    }
                })}
            />
            <Tab.Screen 
                name="Receita" 
                component={Receita}
                options={{
                    tabBarIcon: ({color}) => {
                        return(
                            <ChefHat width={24} height={24} fill={color} />
                        );
                    },
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    tabBarIcon: ({color}) => {
                        return(
                            <Ionicons name="person" color={color} size={24} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
