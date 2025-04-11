import { StyleSheet,Text, View, ImageBackground } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (

    <ImageBackground
      source={require("./assets/fundo.jpg")}    //importando a imagem de plano de fundo do assets
      resizeMode='cover'
      style={styles.container}
    >
        <View style={styles.overlay} /> 

    <View style={styles.container}>
     <Title/>
     <FormIMC/>
    </View>
    </ImageBackground> //com isso, em vez de jogar uma cor de fundo, joguei uma imagem relacionada a comida/imc
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', //criei essa view para mudar a opacidade da imagem, e deixar com menos brilho
  },
});
