import React from 'react';
import { StyleSheet, Image } from 'react-native';
import pfp from '@assets/imgs/pfp.jpg';
import { Layout } from '@ui-kitten/components';

const PfpBigImage = () => {
    return (
        <Image source={pfp} style={style.pfp}/>
    );
}

const style = StyleSheet.create({
    pfp: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10,
    },
});

export default PfpBigImage;
