import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import ExcluirModal from '../../components/ModalExcluir';

export default function CardMeuVeiculo({ id, marca, modelo, valor, foto, cor, km }) {
  const navigation = useNavigation();

  const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);

  const openModalExcluir = () => {
    setModalVisibleExcluir(true);
  };

  const closeModalExcluir = () => {
    setModalVisibleExcluir(false);
  };

  return (
    <View style={styles.pad}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={foto ? { uri: foto } : require('../../assets/images/imageCard.png')}
        />
        <View style={styles.infos}>
          <View style={styles.madelo}>
            <Text style={styles.marca}>{marca}</Text>
            <Text style={styles.modelo}> {modelo}</Text>
          </View>
          <Text style={styles.preco}>R$: {valor}</Text>
          <Text style={styles.preco}>{cor}</Text>
          <Text style={styles.preco}>KM: {km}</Text>
          <Feather name="trash-2" size={30} color="black" onPress={openModalExcluir} />
        </View>
      </View>

      <ExcluirModal visible={modalVisibleExcluir} onClose={closeModalExcluir} />
    </View>

  );
}

const styles = StyleSheet.create({
  pad: {
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  infos: {
    paddingLeft: 9,
    paddingBottom: 5,
    gap: 16,
    width: '60%',
  },
  madelo: {
    flexDirection: 'row',
  },
  marca: {
    fontWeight: 'bold',
  },
  modelo: {
    fontWeight: 'bold',
    color: 'red',
  },
  adicionais: {
    color: 'red',
  },
  preco: {
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    elevation: 3,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    padding: 6,
    color: 'white',
  },
  
});
