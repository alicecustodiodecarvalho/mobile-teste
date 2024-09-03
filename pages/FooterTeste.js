//quando coloco esse aqui, na web da certo, porém no celular o footer cobre uma partezinha da página

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Footer() {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.footer, windowWidth < 600 && styles.footerSmall]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Feather name="home" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
                <Feather name="search" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LocalizacaoCarro')}>
                <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MeusVeiculos')}>
                <Ionicons name="car-sport-outline" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SideBarUser')}>
                <Feather name="menu" size={25} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        padding: 15,
        backgroundColor: 'darkred',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerSmall: {
        padding: 10,
        height: 50,
    },
});
