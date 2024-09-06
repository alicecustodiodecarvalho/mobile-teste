// CompraCarro.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardCarPagamento from '../components/CardCarPagamento';
import CustomModal from './Modal'; // Certifique-se de que o caminho está correto

export default function CompraCarro() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.bg}>
            <NavbarPadrao texto="Finalizando Compra" />
            <View style={styles.container}>
                <Text style={styles.titulo}>Escolha a forma de pagamento</Text>
                <CardCarPagamento />
            </View>
            <View style={styles.pagamentos}>
                <TouchableOpacity style={[styles.pag, styles.pix]}><Text style={styles.texto}>Pix</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.pag, styles.pix]}><Text style={styles.texto}>Boleto</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.pag, styles.cart]} onPress={openModal}><Text style={styles.texto}>Cartão de Crédito/Débito</Text></TouchableOpacity>
            </View>
            <CustomModal visible={modalVisible} onClose={closeModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ECECEC',
        flex: 1
    },
    container: {
        padding: 20,
        alignItems: "center"
    },
    titulo: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 5
    },
    pagamentos: {
        width: '100%',
        backgroundColor: 'white',
        elevation: 10
    },
    pag: {
        padding: 10
    },
    texto: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    pix: {
        borderColor: 'lightgray',
        borderBottomWidth: 2
    },
});
