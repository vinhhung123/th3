import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Deatils Screen</Text>
 
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create(
  {
      container:{
          flex:1,
          justifyContent:"center",
          alignItems:"center"
      }
  }
  );