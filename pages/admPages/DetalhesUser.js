import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import NavbarPadrao from '../../components/NavbarPadrao';
import Feather from '@expo/vector-icons/Feather';
import ExcluirModal from '../../components/ModalExcluir';
import CardVeiculoUser from '../admPages/CardVeiculoUser';

export default function DetalhesUser() {

    const route = useRoute();  // Acessa os parâmetros da navegação
    const { nome, email, telefone, foto, cidade, estado, cpf, } = route.params || {};  // Verifica se route.params está definido

    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);

    const openModalExcluir = () => {
        setModalVisibleExcluir(true);
    };

    const closeModalExcluir = () => {
        setModalVisibleExcluir(false);
    };

    const [meusVeiculos, setMeusVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await AsyncStorage.getItem('id');
                console.log('User ID:', id); // Log para verificar o ID
                if (!id) {
                    throw new Error("Usuário não logado");
                }
                setUserId(id); 
            } catch (error) {
                setErro("Erro ao recuperar usuário");
            }
        };

        fetchUserId();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const fetchMeusVeiculos = async () => {
                if (userId) {
                    try {
                        const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos');
                        if (response.ok) {
                            const data = await response.json();
                            console.log(data); // Verifique a estrutura da resposta da API

                            const veiculosDoUsuario = data.veiculos.filter(veiculo => veiculo.usuarioId === userId);
                            console.log('Veículos do Usuário:', veiculosDoUsuario); // Verifique os veículos do usuário
                            
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
        }, [userId])
    )

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <NavbarPadrao texto="Detalhes do Usuário" />

            <View style={styles.details1Container}>
                <Image
                    style={styles.image}
                    source={foto ? { uri: foto } : require('../../assets/images/avatar-hidan.jpg')}
                />
                <Text style={styles.name}>Nome: {nome}</Text>
                <Text style={styles.location}>Contato: {telefone}</Text>
                <Text style={styles.location}>Email: {email}</Text>
                <Text style={styles.location}>CPF: {cpf}</Text>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.location}>Cidade: {cidade}</Text>
                        <Text style={styles.location}>Estado: {estado}</Text>
                    </View>
                    <Feather name="trash-2" size={30} color="black" onPress={openModalExcluir} />
                </View>
            </View>

            <ExcluirModal visible={modalVisibleExcluir} onClose={closeModalExcluir} />

            <View style={styles.container}>
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
                                <CardVeiculoUser key={veiculo.id} {...veiculo} />
                            ))}
                        </ScrollView>
                    )}
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
    },
    details1Container: {
        padding: 16,
        backgroundColor: '#FFF',
        marginTop: 0,
        borderBottomWidth: 1
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',  // Adiciona espaçamento entre o texto e o ícone da lixeira
        alignItems: 'center',  // Alinha o conteúdo verticalmente no centro
    }
});

