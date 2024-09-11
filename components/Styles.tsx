import {Pressable, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor:'#F3F9D2',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 30,
        gap: 20
    },
    pressableStyle: {
        backgroundColor: '#C0D684',
        borderWidth: 1,
        borderRadius: 20,
        borderColor:'black',
        padding: 30,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressedText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    unpressedText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },
    titleText : {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    },
    defaultText : {
        color: 'black',
        fontSize: 16,
    }
  });
export default styles;