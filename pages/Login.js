import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://pi3-backend-i9l3.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    senha
                }),
            });

            if (response.ok) {
                const data = await response.json();
                navigation.navigate('Home');
            } else {
                console.error('Falha ao fazer login', await response.text());
                Alert.alert('Erro', 'Falha ao fazer login. Verifique suas credenciais.');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/images/background.png')}
            >
                <View style={styles.overlay}>
                    <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    />
                    <View style={styles.forms}>
                        <View style={styles.inputs}>
                            <Text style={styles.login}>Login</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType='email-address'
                            />
                            <TextInput
                                style={[styles.input, { marginBottom: 60 }]}
                                placeholder="Senha"
                                secureTextEntry
                                value={senha}
                                onChangeText={setSenha}
                            />
                        </View>
                        <View style={styles.botoes}>
                            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                <Text style={styles.text}>Entrar</Text>
                            </TouchableOpacity>
                            <Text style={styles.signupText}>
                                Não tem uma conta? <Text style={styles.signupLink} onPress={() => navigation.navigate('Registro')}>Criar conta</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        width: '90%',
        alignItems: 'center',
        position: 'relative',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 190,
    },
    login: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderColor: '#000',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    signupText: {
        color: '#333',
        fontSize: 14,
        marginBottom: 100,
    },
    signupLink: {
        color: 'red',
        fontWeight: 'bold',
    },
    voltar: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    forms: {
        gap: 50,
        width: '100%',
        alignItems: 'center',
    },
    inputs: {
        width: '100%',
        alignItems: 'center',
    },
    botoes: {
        width: '100%',
        alignItems: 'center',
    },
});
