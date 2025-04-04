import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './components/FormIMC';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora IMC</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
