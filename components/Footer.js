import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
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
        padding: 22,
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 50
    },
});
