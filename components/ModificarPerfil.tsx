import { Text, View, Pressable, Modal, TextInput } from "react-native";
import { useState } from "react";
import styles from "@/components/Styles";

export function ModificarPerfil() {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('Kris');
    const [nameChange, setNameChange] = useState('');

    const showModal = () => {setModalVisible(modalVisible => true)};
    const hideModal = () => {
        setModalVisible(modalVisible => false)
        nameChange == '' ? setName(name) : setName(nameChange)
        setNameChange('')
    };

    return(
        <View style = {styles.centeredViewStyle}>
            <Text style={styles.titleText}>{name}</Text>

            <Modal
                animationType='fade'
                visible={modalVisible}
                transparent={true}
                style={styles.modalView}
            >
                <View style = {[styles.centeredViewStyle, {backgroundColor: '#BBBDF6'}]}>
                    <Text style={styles.titleText}>Cambiar Nombre</Text>
                    <TextInput 
                    placeholder= 'Nuevo Nombre'
                    onChangeText={(text) => setNameChange(text)}
                    value = {nameChange}
                    style= {styles.textInputStyle}
                    />

                    <Pressable onPress={hideModal} 
                    style={({ pressed }) => [styles.pressableStyle, {backgroundColor: pressed ? '#3D3B8E' : '#9893DA'}]}>
                        <Text style={styles.unpressedText}>Finalizar</Text>
                    </Pressable>
                </View>
            </Modal>

            <Pressable onPress={showModal} 
            style={({ pressed }) => [styles.pressableStyle, {backgroundColor: pressed ? '#3D3B8E' : '#9893DA'}]}>
                <Text style={styles.unpressedText}>Cambiar Nombre</Text>
            </Pressable>
        </View>
        
    )
}
    