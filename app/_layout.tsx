import { Stack, Tabs} from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name= "index" options={{title: 'Home', href: null,}}/>
      <Tabs.Screen name= "tarjetasTab" options={{title: 'Tarjetas'}}/>
      <Tabs.Screen name= "contadorTab" options={{title: 'Contador'}}/>
      <Tabs.Screen name= "perfilTab" options={{title: 'Perfil'}}/>
    </Tabs>
  );
}
