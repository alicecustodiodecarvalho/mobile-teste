import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';


export default function CardMeuVeiculo() {

  const navigation = useNavigation();

    return (
        <View style={styles.pad}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/imageCard.png')}
                />
                <View style={styles.infos}>


                    <View style={styles.madelo}>
                        <Text style={styles.marca}>Dodge</Text>
                        <Text style={styles.modelo}> Charger</Text>
                    </View>

                    <Text style={styles.preco}>R$ 300.000,00</Text>
                    <Text style={styles.adicionais}>Ler Detalhes...</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AtualizarAnuncio')}>
                        <Text style={styles.text}>Atualizar dados do Anúncio</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pad: {
        paddingVertical: 10
    },
    card: {
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 150,
        height: 150,
    },
    infos: {
        paddingLeft: 9,
        paddingBottom: 5,
        // alignItems:'center',
        gap:16,
        width:'60%'
    },
    madelo: {
        flexDirection: 'row'
    },
    marca: {
        fontWeight: 'bold'
    },
    modelo: {
        fontWeight: 'bold',
        color: 'red'
    },
    adicionais: {
        color: 'red',
    },
    preco: {
        fontWeight: 'bold'
    },
    button: {
        // width: '80%',
        // paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        // marginBottom: 20,
        elevation: 3,
    },
    text: {
        fontSize: 10,
        // lineHeight: 21,
        fontWeight: 'bold',
        padding: 6,
        // letterSpacing: 0.25,
        color: 'white'
    },

})