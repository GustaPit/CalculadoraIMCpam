import React from "react";
import { Text,StyleSheet } from 'react-native';

const Result = ({ imc }) => {  //função que pega o resultado do imc, e mostra pro usuario
    return(
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({
    result:{
        marginTop: 20,
        fontSize: 22,            //estilização da mensagem de texto mostrando o calculo do imc
        textAlign: 'center',     //centralizada,em negrito e com margem para distanciar dos outros componentes de cima
        color: '#333',
        fontWeight: 'bold',
    },
});

export default Result;