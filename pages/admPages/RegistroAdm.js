import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistroAdm = ({ onRegister = () => {} }) => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (senha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        const cpfSemFormatacao = cpf.replace(/\D/g, '');
        const telSemFormatacao = telefone.replace(/\D/g, '');
        const nascimentoFormatado = nascimento.split('/').reverse().join('-');

        setLoading(true);

        try {
            const response = await fetch('https://pi3-backend-i9l3.onrender.com/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    cpf: cpfSemFormatacao,
                    telefone: telSemFormatacao,
                    nascimento: nascimentoFormatado,
                    senha,
                    isAdmin: true
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (typeof onRegister === 'function') {
                    onRegister(data.user);
                }
                
                await AsyncStorage.setItem('nome', nome);
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('cpf', cpfSemFormatacao);
                await AsyncStorage.setItem('telefone', telSemFormatacao);
                await AsyncStorage.setItem('nascimento', nascimentoFormatado);

                setNome('');
                setEmail('');
                setCpf('');
                setTelefone('');
                setNascimento('');
                setSenha('');
                setConfirmarSenha('');
                
                navigation.navigate('UsuarioAdm');
            } else {
                const errorText = await response.text();
                Alert.alert('Erro', `Falha ao registrar usuário: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao registrar. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={require('../../assets/images/background.png')}>
                    <View style={styles.overlay}>
                        <View style={styles.registro}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                            </TouchableOpacity>
                            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                            <View><Text style={styles.nada}>.....</Text></View>
                        </View>

                        <View style={styles.forbo}>
                            <Text style={styles.title}>Registro Administrativo</Text>
                            <View style={styles.forms}>
                                <View style={styles.formGroup}>
                                    <TextInput style={[styles.input, styles.nome]} placeholder="Nome" value={nome} onChangeText={setNome} />
                                </View>

                                <View style={styles.formGroup}>
                                    <TextInputMask
                                        type={'cpf'}
                                        style={styles.input}
                                        placeholder="CPF"
                                        value={cpf}
                                        onChangeText={setCpf}
                                    />
                                    <TextInputMask
                                        type={'datetime'}
                                        options={{ format: 'DD/MM/YYYY' }}
                                        style={styles.input}
                                        placeholder="Data de Nascimento"
                                        value={nascimento}
                                        onChangeText={setNascimento}
                                    />
                                </View>

                                <View style={styles.formGroup}>
                                    <TextInput style={[styles.input, styles.nome]} placeholder="Email" value={email} onChangeText={setEmail} />
                                </View>

                                <View style={styles.formGroup}>
                                    <TextInputMask
                                        type={'cel-phone'}
                                        options={{
                                            maskType: 'BRL',
                                            withDDD: true,
                                            dddMask: '(99) '
                                        }}
                                        style={[styles.input, styles.nome]}
                                        placeholder="Telefone"
                                        value={telefone}
                                        onChangeText={setTelefone}
                                        keyboardType='numeric'
                                    />
                                </View>

                                <View style={styles.formGroup}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Senha"
                                        secureTextEntry
                                        value={senha}
                                        onChangeText={setSenha}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Confirmar Senha"
                                        secureTextEntry
                                        value={confirmarSenha}
                                        onChangeText={setConfirmarSenha}
                                    />
                                </View>
                            </View>
                            <View style={styles.botao}>
                                {loading ? (
                                    <ActivityIndicator size="large" color="red" />
                                ) : (
                                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                                        <Text style={styles.text}>Criar</Text>
                                    </TouchableOpacity>
                                )}
                                <Text style={styles.signupText}>
                                    Já tem uma conta? <Text style={styles.signupLink} onPress={() => navigation.navigate('Login')}>Entrar</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    overlay: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
        gap: 60,
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    input: {
        width: '48%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        width: '80%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    signupText: {
        color: '#333',
        fontSize: 14,
    },
    signupLink: {
        color: 'red',
        fontWeight: 'bold',
    },
    nome: {
        width: '100%'
    },
    forbo: {
        gap: 10,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        flex: 1
    },
    botao: {
        alignItems: 'center',
        width: "100%",
        gap: 5
    },
    registro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 10,
        borderColor: 'transparent',
        width: '100%',
    },
    forms: {
        borderBottomWidth: 50,
        borderColor: 'transparent',
    },
    nada: {
        color: 'transparent'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
});

export default RegistroAdm;
