import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 30,
        fontFamily: 'Oswald_400Regular',
    },
    form: {
        width: "90%",
    },
    input: {
        borderRadius: 30,
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        borderColor: '#F24333',
        borderWidth: 1,
    },
    formExtra: {
        marginTop: 15,
        width: "90%",
        alignItems: 'flex-end',
    },
    formExtraText: {
        fontSize: 15,
    },
    button: {
        width: "90%",
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 30,
    },
    buttonLogar: {
        borderColor: '#F24333',
    },
    buttonCadastrar: {
        borderColor: '#FFF',
        backgroundColor: '#F24333',
    },
    buttonCadastrarText: {
        color: '#FFF',
    },
});

export default style;