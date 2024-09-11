import { Text, View, Pressable } from "react-native";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import styles from "./Styles";

export interface props {
    label: string
}

export function Tarjeta(props: { label: string }) {
    const [pressed, changePressed] = useState(false); //tarjeta arranca no apretada
    const changeState = () => {changePressed((prevState) => !prevState);} 

    return  ( 
         <Pressable onPress= {changeState} 
         style={[
            styles.pressableStyle,
            {backgroundColor: pressed ? '#3D0B37' : '#C0D684'},
          ]}>
                <Text style={pressed? styles.pressedText:styles.unpressedText}>Tarjeta {props.label}</Text>
        </Pressable> 
    ) 
  }