import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavbarDetalhes from '../components/NavbarDetalhes';
import FooterVendas from '../components/FooterVendas';

const { width } = Dimensions.get('window');

export default function DetalhesAnuncio() {
  const route = useRoute();
  const { veiculo } = route.params;
  console.log('abc',useRoute())

  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const [carDetails, setCarDetails] = useState(veiculo || {
    cidade: 'São Paulo, SP',
    anoFabricacao: '2020',
    anoModelo: '2021',
    quilometragem: '15.000 km',
    cambio: 'Automático',
    carroceria: 'SUV',
    combustivel: 'Gasolina',
    cor: 'Preto',
    observacoes: 'Tô vendendo meu Supra...',
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <NavbarDetalhes texto="Anúncio" vendedor={carDetails.usuarioId} veiculo={carDetails} />

      <View style={styles.imageGallery}>
        <ScrollView horizontal pagingEnabled>
          {/* Verifica se 'veiculo.foto' existe */}
          {veiculo?.foto ? (
            <Image
              source={{ uri: veiculo.foto }}
              style={styles.carImage}
            />
          ) : (
            <Image
              // source={{ uri: veiculo.veiculo }}
              style={styles.carImage}
            />
          )}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.madelo}>
          <Text style={styles.detailTitle}>{carDetails.marca} </Text>
          <Text style={styles.modelo}>{carDetails.modelo}</Text>
        </View>
        <View style={styles.preco}>
          <Text style={styles.preco}>R$ {carDetails.valor}</Text>
        </View>
        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Cidade:</Text>
            <Text style={styles.detailValue}>{carDetails.cidade}-{carDetails.estado}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Ano de Fabricação:</Text>
            <Text style={styles.detailValue}>{carDetails.anoFabricacao}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Logradouro:</Text>
            <Text style={styles.detailValue}>{carDetails.logradouro}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Quilometragem:</Text>
            <Text style={styles.detailValue}>{carDetails.km}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Câmbio:</Text>
            <Text style={styles.detailValue}>{carDetails.cambio}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Carroceria:</Text>
            <Text style={styles.detailValue}>{carDetails.carroceria}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Combustível:</Text>
            <Text style={styles.detailValue}>{carDetails.combustivel}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Cor:</Text>
            <Text style={styles.detailValue}>{carDetails.cor}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.detailTitle}>Observações:</Text>
          <Text style={styles.obs}>
            {expanded
              ? carDetails.descricao || ''
              : (carDetails.descricao&& <Text>{carDetails.descricao.substring(0, 100)}...</Text>) || ''}
          </Text>
          <TouchableOpacity onPress={toggleText}>
            <Text style={styles.ler}>{expanded ? "Ler menos" : "Ler mais"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FooterVendas teste={true}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5'
  },
  imageGallery: {
    height: 300,
    width: 'auto'
  },
  carImage: {
    width,
    height: 300,
  },
  detailsContainer: {
    gap: 2,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  detailItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: '50%',
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  madelo: {
    flexDirection: 'row'
  },
  modelo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  preco: {
    fontSize: 28,
    fontWeight: '900'
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
  obs: {

  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ler: {
    color: 'red',
    fontWeight: '900'
  }
});

