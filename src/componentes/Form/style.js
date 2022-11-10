import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        marginTop: 10,
    },
    form: {
        width:"100%",
        height:"auto",
    },
    formText:{
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    textInput:{
        width:"90%",
        borderRadius: 50,
        backgroundColor:"#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    Button:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"red",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 20,
    },
    textButton:{
        fontSize: 20,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exBitionResultImc:{
        width: "100%",
        height: "70%",
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        fontSize:26,
        color:"red",
        height: 50,
        width:"100%",
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:16,
    }
});

export default estilo