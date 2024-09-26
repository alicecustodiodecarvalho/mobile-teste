import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Images(){
    const [image, setImage] = useState('')

    return(
        <View style={{flex:1, alignItems:'center'}}>
            <Text>Imagens</Text>
            <Image/>
        </View>
    )
}