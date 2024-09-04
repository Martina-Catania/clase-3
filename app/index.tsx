import {Tarjeta} from "@/components/Tarjeta";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  viewStyles: {
      backgroundColor:'beige',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      paddingHorizontal: 30,
      gap: 20,
  },

})
function testPress(){

}
export default function Index() {
  return (
    <View style = {styles.viewStyles}>
      <Tarjeta label={"1"}></Tarjeta>
      <Tarjeta label={"2"}></Tarjeta>
      <Tarjeta label={"3"}></Tarjeta>
    </View>
  );
}
