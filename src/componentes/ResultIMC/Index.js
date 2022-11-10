import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import estilooo from "./style";


export default function ResultIMC(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu imc hoje é: " +props.resultIMC,
        })
    }

    return(
        <View style={estilooo.result}>
            <View style={estilooo.boxShareButton}>
                <Text style={estilooo.information}>{props.messageResultIMC}</Text>
                <Text style={estilooo.numberImc}>{props.resultIMC}</Text>
                <TouchableOpacity 
                onPress={()=>{
                    onShare()
                }}
                style={estilooo.shared}>
                    <Text style={estilooo.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}