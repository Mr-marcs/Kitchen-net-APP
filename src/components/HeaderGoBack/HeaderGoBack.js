import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HeaderGoBack = () => {
    const navigation = useNavigation();
    return (
        <Layout style={style.header}>
            <View style={style.item1}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.highlight}>
                    <Icon name="md-arrow-back" size={24} color="#000"/>
                </TouchableOpacity>
            </View>
        </Layout>
    );
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    header: {
        width: '100%',
        paddingTop: 25,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    item1: {
        flexGrow: 1,
    },
    item2: {
        paddingRight: 10,
    },
    item3: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
});

export default HeaderGoBack;
