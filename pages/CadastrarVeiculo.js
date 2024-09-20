import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function AtualizarDadosCarro() {
  const navigation = useNavigation();

  const [cars, setCars] = useState([])
  const [txtCep, setTxtCep] = useState('')
  const [txtCidade, setTxtCidade] = useState('')
  const [txtEstado, setTxtEstado] = useState('')
  const [txtLogradouro, setTxtLogradouro] = useState('')
  const [txtNumero, setTxtNumero] = useState('')
  const [txtComplemento, setTxtComplemento] = useState('')
  const [txtMarca, setTxtMarca] = useState('')
  const [txtModelo, setTxtModelo] = useState('')
  const [txtValor, setTxtValor] = useState('')
  const [txtAnoFabricacao, setTxtAnoFabricacao] = useState('')
  const [txtCambio, setTxtCambio] = useState('')
  const [txtCarroceria, setTxtCarroceria] = useState('')
  const [txtCombustivel, setTxtCombustivel] = useState('')
  const [txtKm, setTxtKm] = useState('')
  const [txtCor, setTxtCor] = useState('')
  const [txtDescricao, setTxtDescricao] = useState('')

  const handlerCreateCar = async () => {
    const car = {
      cep: txtCep,
      cidade: txtCidade,
      estado: txtEstado,
      logradouro: txtLogradouro,
      numero: txtNumero,
      complemento: txtComplemento,
      marca: txtMarca,
      modelo: txtModelo,
      valor: txtValor,
      anoFabricacao: txtAnoFabricacao,
      cambio: txtCambio,
      carroceria: txtCarroceria,
      combustivel: txtCombustivel,
      km: txtKm,
      cor: txtCor,
      descricao: txtDescricao
    }

    const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setCars([data.car, ...cars])
      return
    }
    console.log("Erro ao carregar carros")
    return
  }

  return (
    <View style={styles.container}>
      <NavbarPadrao texto="Vender Carro" />
      <View style={styles.container2}>
        <ScrollView style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Onde se Localiza o Carro?</Text>

          <TextInput
            style={styles.input}
            placeholder="CEP"
            onChangeText={setTxtCep}
            value={txtCep}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Cidade"
              onChangeText={setTxtCidade}
              value={txtCidade}
            />

            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Estado"
              onChangeText={setTxtEstado}
              value={txtEstado}
            />
          </View>
          <View style={styles.row}>
            <TextInput 
            style={[styles.input, styles.largeInput]} 
            placeholder="Logradouro" 
            onChangeText={setTxtLogradouro}
              value={txtLogradouro}
            />
            <TextInput 
            style={[styles.input, styles.smallInput]} 
            placeholder="Número" 
            onChangeText={setTxtNumero}
              value={txtNumero}
            />
          </View>
          <TextInput style={styles.input} placeholder="Complemento" />

          <Text style={styles.sectionTitle}>Digite Informações do Carro</Text>

          <TextInput
            style={styles.input}
            placeholder="Marca"
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
          />

          <TextInput
            style={styles.input}
            placeholder="Valor"
          />

          <TextInput
            style={styles.input}
            placeholder="Ano de Fabricação"
          />

          <View style={styles.row}>
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Carroceria" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Câmbio" />
          </View>

          <TextInput style={[styles.input]} placeholder="Combustível" />



          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Km"
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Cor"
            />
          </View>

          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Descrição do Veículo"
            multiline
          />

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    padding: 20
  },
  backButton: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '48%',
  },
  largeInput: {
    width: '48%',
  },
  description: {
    height: 80,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 60,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
