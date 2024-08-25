import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
