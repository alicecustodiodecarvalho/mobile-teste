import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation } from '@react-navigation/native';

export default function LocalizacaoCarro() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <NavbarPadrao />
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <Text style={styles.primeira}>Primeira Etapa</Text>
          <Text style={styles.localiza}>Onde se localiza o Carro?</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="CEP" />
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Cidade" />
            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Estado" />
          </View>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.lograd]} placeholder="Logradouro" />
            <TextInput style={[styles.input, styles.num]} placeholder="Número" />
          </View>
          <TextInput style={styles.input} placeholder="Complemento" />
        </View>

        <TouchableOpacity style={styles.proxButton} onPress={() => navigation.navigate('DescricaoCarro')}>
          <Text style={styles.buttonText}>Próxima Etapa</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  overlay: {
    padding: 20,
    flex: 1
  },
  headerContainer: {
    marginBottom: 30,
  },
  primeira: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  },
  localiza: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop: 50,
    color: 'red'
  },
  formContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  cidadeEstado: {
    width: '48%',
  },
  lograd: {
    width: '70%',
  },
  num: {
    width: '28%',
  },
  proxButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
