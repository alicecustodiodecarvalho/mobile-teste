import { StyleSheet, ScrollView, View } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardMeuVeiculo from '../components/CardMeuVeiculo';

export default function MeusVeiculos() {
    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Meus Anúncios" />
            <View style={styles.scro}>

            <ScrollView >
                <CardMeuVeiculo/>
            </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scro: {
        flex:1,
        paddingHorizontal: 10,
        backgroundColor: '#ECECEC'
    },
})
