import { Text, View, Pressable } from "react-native";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import styles from "./Styles";

export interface props {
  label: string
}

export function Tarjeta(props: { label: string }) {
  const [pressed, changePressed] = useState(false); //tarjeta arranca no apretada
  const changeState = () => {changePressed(prevState => !prevState);} 

  return  ( 
    <Pressable onPress= {changeState} 
      style={[
        styles.pressableStyle,
        {backgroundColor: pressed ? '#3D3B8E' : '#9893DA'},
      ]}>
      <Text style={pressed? styles.pressedText:styles.unpressedText}>Tarjeta {props.label}</Text>
    </Pressable> 
  ) 
}