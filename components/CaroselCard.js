import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from 'expo-image'


export default function CaroselCard() {
    return (
        <View>

            <Text style={styles.mod}> Modelos mais procurados </Text>
            <ScrollView horizontal={true}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/756789/pexels-photo-756789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/17359969/pexels-photo-17359969/free-photo-of-carro-preto-farois-refletores-toyota.jpeg'
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3323202/pexels-photo-3323202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                </View>
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    mod: {
        fontSize: 18
    },
    image: {
        width: 280,
        height: 300,
        borderRadius:25
    },
    card:{
        padding:10
    }
})