import { Text, View, Pressable } from "react-native";
import { useState } from "react";
import styles from "./Styles";

export function Contador() {
  const [cont, setCont] = useState(0);
  const increase = () => {setCont(prev => prev + 1);}
  const decrease = () => {setCont(prev => prev - 1);}

  return (
    <View style={{alignItems: "center"}}>
      <Text style = {styles.titleText}>{cont}</Text>

      <View style = {{flexDirection:'row'}}>
        <Pressable onPress= {decrease}
        style={({ pressed }) => [styles.pressableStyle, {backgroundColor: pressed ? '#3D3B8E' : '#9893DA'}]}>
          <Text style={styles.defaultText}>Restar</Text>
        </Pressable>

        <Pressable onPress= {increase}
        style={({ pressed }) => [styles.pressableStyle, {backgroundColor: pressed ? '#3D3B8E' : '#9893DA'}]}>
          <Text style={styles.defaultText}>Sumar</Text>
        </Pressable>
      </View>
    </View>
  )
}