import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
    <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
  title: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 26,
    color: '#fff',
    backgroundColor: '#f0f0f0',
  },
});

export default Title;