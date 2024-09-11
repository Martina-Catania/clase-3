import {Tarjeta} from "@/components/Tarjeta";
import { View, StyleSheet } from "react-native";
import styles from "@/components/Styles";

export default function TarjetasTab() {
  return (
    <View style = {styles.viewStyles}>
      <Tarjeta label={"1"}></Tarjeta>
      <Tarjeta label={"2"}></Tarjeta>
      <Tarjeta label={"3"}></Tarjeta>
    </View>
  );
}
