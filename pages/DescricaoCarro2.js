import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation } from '@react-navigation/native';

export default function DescricaoCarro2 () {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <NavbarPadrao />
            
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Terceira Etapa</Text>
                <Text style={styles.subtitle}>Adicione Fotos do Carro</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Publicar Carro</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'red',
        paddingTop:30
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 100,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
