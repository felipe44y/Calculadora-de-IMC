import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration,Pressable,Keyboard, FlatList } from "react-native";
import ResultIMC from "../ResultIMC/Index";
import estilo from "./style";

export default function Form(){

    const [peso, setPeso] = useState (null)
    const [altura, setAltura] = useState (null)
    const [messageIMC, setMessageIMC] = useState("preencha o peso e a altura")
    const [imc, setIMC] = useState (null)
    const [textButton, setTextButton] = useState("calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])


    function calcularIMC(){
        let alturaFormat = altura.replace(",",".")
        let totalImc = (peso/(alturaFormat * alturaFormat)).toFixed(2);
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
        setIMC(totalImc)
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório")
        }
    } 

    function VerificarVazio(){
        if(peso != null && altura != null){
            calcularIMC()
            setPeso(null)
            setAltura(null)
            setMessageIMC("Seu imc é igual:")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }
        else{
            verificationImc()
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("preencha o peso e altura")
        }
        
    }

    return(
            <View style={estilo.formContext}>
                {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={estilo.form}>
                <Text style={estilo.formText}>Altura</Text>
                <Text style={estilo.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={estilo.textInput}
                onChangeText={setAltura} 
                value={altura}
                placeholder="Exemplo 1.75" 
                keyboardType="numeric"
                />
                <Text style={estilo.formText}>Peso</Text>
                <Text style={estilo.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={estilo.textInput}
                onChangeText={setPeso}
                value={peso} 
                placeholder="Exemplo 70.300" 
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={estilo.Button}
                onPress={() =>{
                VerificarVazio()}}
                >
                    <Text style={estilo.textButton}>{textButton}</Text>
                </TouchableOpacity>
           </Pressable>
           :
            <View style={estilo.exBitionResultImc}>
                <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>  
                <TouchableOpacity
                style={estilo.Button}
                onPress={() =>{
                VerificarVazio()}}
                >
                    <Text style={estilo.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
            style={estilo.listImcs}
            data={imcList.reverse()}
            renderItem={({item}) =>{
                return(
                <Text style={estilo.resultImcItem}>
                    <Text style={estilo.textResultItemList}>Resultado IMC = </Text>
                    {item.imc}
                </Text>
                )
            }}
            keyExtractor={(item) =>{
                item.id 
            }}
            />
       </View>
    );
}