import { Contador } from "@/components/Contador";
import { View, Text } from "react-native";
import styles from "@/components/Styles";

export default function TarjetasTab() {
    return (
      <View style= {[styles.defaultViewStyle, {alignItems: "center"}]}>
        <Text style = {styles.titleText}>Contador</Text>
        <Contador></Contador>
      </View>
    );
  }