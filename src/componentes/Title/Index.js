import React from "react";
import { View, Text } from "react-native";
import estilo from "./style";

export default function Title(){
    return(
        <View style={estilo.boxTitle}>
            <Text style={estilo.textTitle}>ONE BITCH</Text>
        </View>
    )
}