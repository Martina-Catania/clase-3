import { Text, View, Pressable } from "react-native";
import { useState } from "react";
import styles from "./Styles";

export default function Contador() {

    const [cont, setCont] = useState(0);
    const increase = () => { setCont(prev => prev + 1);}
    const decrease = () => { setCont(prev => prev - 1);}

    return (
      <View style={[styles.viewStyles, {alignItems: "center"}]}>
        <Text style = {styles.titleText}>Contador</Text>
        <Text style = {styles.titleText}>{cont}</Text>
        <View style = {{flexDirection:'row'}}>
            <Pressable onPress= {increase} style = {styles.pressableStyle}>
                <Text style={styles.defaultText}>Increase</Text>
            </Pressable>
            <Pressable onPress= {decrease} style = {styles.pressableStyle}>
                <Text style={styles.defaultText}>Decrease</Text>
            </Pressable>
        </View>
      </View>
    )
  }