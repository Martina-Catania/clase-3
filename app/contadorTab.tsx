import Contador from "@/components/Contador";
import { View, StyleSheet } from "react-native";

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

export default function TarjetasTab() {
    return (
      <View style = {styles.viewStyles}>
        <Contador></Contador>
      </View>
    );
  }