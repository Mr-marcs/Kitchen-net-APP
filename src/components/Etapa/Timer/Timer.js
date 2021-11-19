import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';


const Timer = (props) => {
    const [isFechado, setIsFechado] = useState(true);
    const Colapse = () => {
        setIsFechado(!isFechado);
    }
    
    const [tempoCorrendo, setTempoCorrendo] = useState(false);
    const Tempo = () => {
        setTempoCorrendo(!tempoCorrendo);
    }

    return(
        <View style={style.container}>
            <TouchableOpacity style={style.Buttoncontainer} onPress={Colapse}>
                <View style={{flex: 1, alignItems: 'center', paddingLeft: 30, flexDirection: 'row', backgroundColor: '#fff'}}>
                    <Icon name={isFechado ? "plus" : "minus"} size={24} color="#000"/>
                    <Text>Timer</Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isFechado}>
                <View style={style.dicaContainer}>
                    <CountDown
                        until={60}
                        showSeparator
                        onFinish={() => alert('finished')}
                        digitStyle={{backgroundColor: '#fff'}}
                        size={20}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{h: null, m: null, s: null}}
                        running={tempoCorrendo}
                        style={style.contador}
                    />
                    <View style={{flexDirection: 'row' }}>
                        <TouchableOpacity onPress={Tempo} style={style.button}>
                            <Text style={{color: '#fff'}}>{tempoCorrendo ? "Pausar" : "Começar"}</Text>
                        </TouchableOpacity>
                    </View>
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
  button:{
    marginTop: 20,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#E24333',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    borderRadius: 20,
  },
});

export default Timer;