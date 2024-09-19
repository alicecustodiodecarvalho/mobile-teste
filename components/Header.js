// Header.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {
    const [nome, setNome] = useState('');

    useEffect(() => {
        const fetchNome = async () => {
            try {
                const user = await AsyncStorage.getItem('nome');
                setNome(user || 'Usuário'); // Define 'Usuário' como padrão se não houver nome
            } catch (error) {
                console.error('Failed to fetch user name:', error);
                setNome('Usuário');
            }
        };

        fetchNome();
    }, []);

    return (
        <View style={styles.header}>
            <View style={styles.user}>
                <Text style={styles.name}>{nome}</Text>
                <Image
                    style={styles.avatar}
                    source={require('../assets/images/avatar-hidan.jpg')}
                />
            </View>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 18,
        paddingBottom: 10,
        paddingTop: 40,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    name: {
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
    },
    logo: {
        width: 110,
        height: 50,
    },
});
