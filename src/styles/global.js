import { StyleSheet, Platform, StatusBar } from 'react-native';

const style = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Oswald_400Regular',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+15 : 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    backButtonView: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
});

export default style;