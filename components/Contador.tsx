import { Text, View, Pressable } from "react-native";
import { useState } from "react";

export default function Contador() {
    const [cont, setCont] = useState(0);
    
    const increment = () => { setCont(prev => prev + 1);}
  
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
  >
        <Text>Contador: {cont}</Text>
        <Pressable onPress= {increment}><Text>Increment</Text></Pressable>
      </View>
    )
  }