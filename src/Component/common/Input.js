import React from "react";
import {StyleSheet, Text,TextInput,View } from "react-native";


const Input = ({label,value,onChangeText,placeholder,secureTextEntry})=>{
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value} 
            onChangeText={onChangeText}
            style={styles.inputStyle}
            />
        </View>
    );
}

const styles =StyleSheet.create({
    labelStyle:{
            fontSize:18,
            paddingLeft:20,
            flex:1,
            color:'black',
            fontWeight:'bold'
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    inputStyle:{
        fontSize:18,
        paddingRight:3,
        paddingLeft:2,
        lineHeight:23,
        flex:2,
        color:'#000',

    }
});

export  {Input};