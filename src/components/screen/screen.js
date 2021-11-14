import React from 'react';
import { Layout } from '@ui-kitten/components';
import Global from '@styles/global';

class Screen extends React.Component{
    render(){
        return(
            <Layout style={Global.fundo}>
                {this.props.children}
            </Layout>
        );
    }
}

export default Screen;