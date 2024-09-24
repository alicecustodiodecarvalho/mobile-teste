import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

export default function CardMeuVeiculo({ marca, modelo, valor, foto }) {
  const navigation = useNavigation();

  return (
    <View style={styles.pad}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={foto ? { uri: foto } : require('../assets/images/imageCard.png')}
        />
        <View style={styles.infos}>
          <View style={styles.madelo}>
            <Text style={styles.marca}>{marca}</Text>
            <Text style={styles.modelo}> {modelo}</Text>
          </View>
          <Text style={styles.preco}>R$ {valor}</Text>
          <Text style={styles.adicionais}>Ler Detalhes...</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AtualizarAnuncio')}>
            <Text style={styles.text}>Atualizar dados do Anúncio</Text>
          </TouchableOpacity>
        </View>
      </View>
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
