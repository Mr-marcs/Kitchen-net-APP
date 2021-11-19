import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';


const Dica = () => {
    const [isFechado, setIsFechado] = useState(true);
    const Colapse = () => {
        setIsFechado(!isFechado);
    }
    
    return(
        <View style={style.container}>
            <TouchableOpacity style={style.Buttoncontainer} onPress={Colapse}>
                <View style={{flex: 1, alignItems: 'center', paddingLeft: 30, flexDirection: 'row', backgroundColor: '#fff'}}>
                    <Icon name={isFechado ? "plus" : "minus"} size={24} color="#000"/>
                    <Text>Dica</Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isFechado}>
                <View style={style.dicaContainer}>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </Text>
                </View>         
            </Collapsible>
        </View>
    );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  Buttoncontainer: {
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
  },
  dicaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ddd',
  },
});

export default Dica;