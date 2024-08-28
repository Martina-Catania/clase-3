import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyles: {
        color: '#000000',
        fontSize: 32
    },
    increaseStyles: {
        color: '#ffffff',
        fontSize: 16,
        backgroundColor: '#00ff00',
        borderWidth: 10,
        borderColor: '#00ff00'
    },
    decreaseStyles: {
        color: '#ffffff',
        fontSize: 16,
        backgroundColor: '#ff0000',
        borderWidth: 10,
        borderColor: '#ff0000'
    }
})

export default function Contador() {

    const [cont, setCont] = useState(0);
    const increase = () => { setCont(prev => prev + 1);}
    const decrease = () => { setCont(prev => prev - 1);}

    return (
      <View style={styles.viewStyles}>
        <Text style = {styles.textStyles}>Contador: {cont}</Text>
        <View style={{flexDirection:'row'}}>
            <Pressable onPress= {increase}><Text style={styles.increaseStyles}>Increase</Text></Pressable>
            <Pressable onPress= {decrease}><Text style={styles.decreaseStyles}>Decrease</Text></Pressable>
        </View>
      </View>
    )
  }