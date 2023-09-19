import React from "react";
import {  StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

//const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        
       
    },
    image: {
        flex: 1,
    },
    textStyle :{
        fontSize : 18,
        color : "#fff",
    }

})



const HomeScreen =({navigation})=>
{
    return (
       
        <View style ={styles.container}>

            <Text style ={styles.textStyle}>
                Home Screen
            </Text>

            <Button mode="contained" onPress={()=> navigation.navigate('Details') } >
                Go to details
         </Button>
        
        </View>
       
    );
}


export default HomeScreen;