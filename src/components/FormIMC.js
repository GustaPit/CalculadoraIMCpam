import { View, TextInput, Button,Text, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
 
const FormIMC = () => {
    const [peso, setPeso] = useState('');           //definindo variaveis/constantes
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
 
    const CalcularIMC = () => {       //Função para calcular o IMC digitado pelo usuario
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;  //parseFloat transforma a String para numero
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);  //transforma a string em numero e limita ela a 2 numeros após a virgula
            setImc(imcCalculado);
        }
    };
     const ClassificacaoIMC = ({ imc }) => {   
        const num = parseFloat(imc);   //Pega e joga o imc em outra const e com o parse float, faz a string virar numero
    
        const getClassificacao = () => {
          if (num < 18.5) return 'Abaixo do peso';   //caso o imc calculado, seja menor que 18.5, será mostrado para
          if (num < 25) return 'Peso normal';        //o usuario a msg que ele esta abaixo do peso, e assim por diante
          if (num < 30) return 'Sobrepeso';            
          if (num < 35) return 'Obesidade grau 1';
          if (num < 40) return 'Obesidade grau 2';   //caso o imc calculado ultrpasse 40, entao retorna Obesidade Morbida
          return 'Obesidade mórbida';
        };
            
        /*View's para pode adicionar estilização ao container e texto da classificação */
        return ( 
            <View style={styles.classificacaoContainer}>  
              <Text style={styles.classificacaoTexto}>
                Classificação: {getClassificacao()}
              </Text>
            </View>
          );
        };

    return (
        <View style={styles.formContainer}>
    
            <TextInput
                style={styles.input}       //propriedades(props) do Imput peso
                placeholder="Peso (Kg)"
                keyboardType="numeric"  //keyboardtype faz com que só seja recebido valores numericos
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"             //propriedades(props) do Imput altura
                value={altura}
                onChangeText={setAltura}
            />  
            <Button title="Calcular IMC" onPress={CalcularIMC} />  
            {imc && (
        <> 
          <Result imc={imc} />
          <ClassificacaoIMC imc={imc} /> 
        </>
      )}
        </View> // Criação do botão para Calcular o IMC            
    );          // result e classificação nesta ordem, para que apareçam em sequencia pro usuario
}; 
 
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#DCDCDC',
        padding: 18,
        borderRadius: 10,         //css do container do formulario, com background acizentado
        borderColor:'black',      //bordas em preto, arredondadas com tamanho de 1.5
        borderWidth: 1.5,
    },
    input: {
        height: 40,
        borderWidth: 2,
          borderColor: 'black',            //css dos imput's, agora com borda adicionada em preto,aredondada e forma solida
        borderStyle: 'solid',              // e com margin bottom para distanciar do botao de calcularIMC
        marginBottom: 10,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    classificacaoContainer: {
        marginTop: 12,                //estilização do container da classificação
        alignItems: 'center',
      },
      classificacaoTexto: {
        fontSize: 18,            //estilização do texto da classificação
        fontWeight: 'bold',
        color: '#333',
      },
});

export default FormIMC;