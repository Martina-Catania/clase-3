import {Pressable, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    defaultViewStyle: {
        backgroundColor:'#BBBDF6',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 30,
        gap: 20
    },
    centeredViewStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'BBBDF6',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pressableStyle: {
        backgroundColor: '#9893DA',
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
    },
    textInputStyle: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 16,
    }
  });
export default styles;