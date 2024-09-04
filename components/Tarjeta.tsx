import { Text, View, Pressable, StyleSheet } from "react-native";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";

const styles = StyleSheet.create({
    unpressedStyle: {
        backgroundColor: 'beige',
        borderWidth: 1,
        borderColor:'black',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'},
    pressedStyle: {
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor:'black',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'}
})

export interface props {
    label: string
}

export function Tarjeta(props: { label: string }) {
    const [pressed, changePressed] = useState(false); //tarjeta arranca no apretada
    const changeState = () => {changePressed((prevState) => !prevState);} 

    return  ( 
         <Pressable onPress= {changeState} 
            style ={pressed? (styles.pressedStyle) : (styles.unpressedStyle)}>
                <Text>Tarjeta {props.label}</Text>
        </Pressable> 
    ) 
  }