import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavbarDetalhes from '../components/NavbarDetalhes';
import FooterVendas from '../components/FooterVendas';

export default function DetalhesVendedor() {
  const route = useRoute();
  const { usuarioId } = route.params;

  const [vendedor, setVendedor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendedor = async () => {
      try {
        const response = await fetch(`https://pi3-backend-i9l3.onrender.com/usuarios/${usuarioId}`);
        const data = await response.json();
        setVendedor(data);
      } catch (error) {
        console.error('Erro ao buscar dados do vendedor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendedor();
  }, [usuarioId]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <NavbarDetalhes texto="Vendedor" vendedor={vendedor} />
      
      <View style={styles.detailsContainer}>
        <Image
          style={styles.image}
          source={vendedor?.foto ? { uri: vendedor.foto } : require('../assets/images/avatar-hidan.jpg')}
        />
        <Text style={styles.name}>{vendedor?.nome || 'Nome do Vendedor'}</Text>
        <Text style={styles.location}>Localização: {vendedor?.cidade || 'Cidade'} - {vendedor?.estado || 'Estado'}</Text>
        {/* Outras informações do vendedor */}
      </View>

      <FooterVendas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    marginTop: 0,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: '#888',
  },
});
