import { ModificarPerfil } from "@/components/ModificarPerfil";
import { View } from "react-native";
import styles from "@/components/Styles";

export default function perfilTab(){
    return (
      <View style={styles.defaultViewStyle}>
        <ModificarPerfil></ModificarPerfil>
      </View>
    )
  }