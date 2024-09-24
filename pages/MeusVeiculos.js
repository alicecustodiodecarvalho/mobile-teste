import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardMeuVeiculo from '../components/CardMeuVeiculo';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para pegar o ID do usuário logado

export default function MeusVeiculos() {
    const [meusVeiculos, setMeusVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [userId, setUserId] = useState(null); // Estado para armazenar o ID do usuário

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await AsyncStorage.getItem('id'); // Pega o ID do usuário logado do AsyncStorage
                if (!id) {
                    throw new Error("Usuário não logado");
                }
                setUserId(id); // Define o ID do usuário no estado
            } catch (error) {
                setErro("Erro ao recuperar usuário");
            }
        };

        fetchUserId();
    }, []);

    useEffect(() => {
        const fetchMeusVeiculos = async () => {
            if (userId) {
                try {
                    const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos');
                    if (response.ok) {
                        const data = await response.json();
                        const veiculosDoUsuario = data.veiculos.filter(veiculo => veiculo.usuarioId === parseInt(userId)); // Filtra os veículos pelo userId
                        console.log(veiculosDoUsuario)
                        setMeusVeiculos(veiculosDoUsuario);
                    } else {
                        throw new Error("Erro ao carregar veículos");
                    }
                } catch (error) {
                    setErro(error.message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchMeusVeiculos();
    }, [userId]); // Só busca os veículos quando o userId está definido

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Meus Anúncios" />
            <View style={styles.scro}>
                {loading ? (
                    <Text>Carregando...</Text>
                ) : erro ? (
                    <Text style={{ color: 'red' }}>{erro}</Text>
                ) : meusVeiculos.length === 0 ? (
                    <Text>Nenhum veículo encontrado.</Text>
                ) : (
                    <ScrollView>
                        {meusVeiculos.map(veiculo => (
                            <CardMeuVeiculo key={veiculo.id} {...veiculo} />
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scro: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ECECEC',
    },
});
