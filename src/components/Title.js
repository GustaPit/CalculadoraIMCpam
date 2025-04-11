import { View, Text, StyleSheet, Image } from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/imc.png')} // Adicionando uma imagem/logo acima do titulo
                style={styles.imagem}
            />
            <Text style={styles.title}>Calculadora de IMC</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,            //apenas centralizando o container e o distanciando do titulo
    },
    imagem: {
        width: 100,     //css da imagem, definindo tamanho,margem e largura
        height: 100,
        marginBottom: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',       //css do titulo, com borda arredondada,negrito, centralizada e com azul de background
        padding: 8,
        borderRadius: 8,
        color: '#fff',
        backgroundColor: '#191970',
        width: '100%',
    },
});

export default Title;