import React,{useState} from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import LoadingComponent from '@components/Loading/Component/LoadingComponent';
const imagencategoria = {uri: 'https://i2.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg'};

const Etapa = (props) => {
    
    const [count, setCount] = useState(1);
    
    return (
      <>
      {(!props.Etapa)? <LoadingComponent/>
      :
      <Layout style={style.container}>          
          <View style={style.containerTexto}>
            {props.Etapa.map(item=>{   
                return(
                    <>
                    <Text style={style.texto}>{item.Description}</Text>
                    </>
                )
            })}  
          </View>
      </Layout>
    }
      </>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 10,
        flex: 1,
        height: 150,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10
        ,
    },
    image: {
        width: 70,
        height: 70,
    },
    texto: {
        color: '#fff',
        fontSize: 14,
    },
    containerTexto: {
        flexWrap: 'wrap',
    },
});

export default Etapa;
