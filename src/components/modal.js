// react-native-component...
import { Modal, StyleSheet, View } from "react-native";

// main-component...
export default function Modals({transparent, visible, close, children}) {
    return (
        <Modal transparent={transparent} visible={visible} onRequestClose={close} >
            <View style={style.modal}>
                {children}
            </View>
        </Modal>
    )
}

// styling...
const style = StyleSheet.create({
    modal: {
        flex:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center",
    }
})