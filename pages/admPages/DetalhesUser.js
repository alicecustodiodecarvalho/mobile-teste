import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavbarPadrao from '../../components/NavbarPadrao';

export default function DetalhesUser() {

    const route = useRoute();  // Acessa os parâmetros da navegação
    const { nome, email, telefone, foto } = route.params || {};  // Verifica se route.params está definido

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <NavbarPadrao texto="Detalhes do Usuário" />


            <View style={styles.details1Container}>
                <Image
                    style={styles.image}
                    source={foto ? { uri: foto } : require('../../assets/images/avatar-hidan.jpg')}
                />
                <Text style={styles.name}>Usuário: {nome}</Text>
                <Text style={styles.location}>Contato: {telefone}</Text> 
                <Text style={styles.location}>{email}</Text>
            </View>

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
        height: 300,
    },
    detailsContainer: {
        gap: 2,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        borderBottomWidth: 1,
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
        fontWeight: '900',
    },
    details1Container: {
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

