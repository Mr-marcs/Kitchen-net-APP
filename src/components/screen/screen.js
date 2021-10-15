import React from 'react';
import { View } from 'react-native';
import Global from '@styles/global';

class Screen extends React.Component{
    render(){
        return(
            <View style={Global.fundo}>
                {this.props.children}
            </View>
        );
    }
}

export default Screen;