// react-native-component...
import { View, Text, StyleSheet } from "react-native";

// react-native-vector-icon...
import Icon from '@react-native-vector-icons/feather';

// main-component...
export function Header({bg, text, textColor, textSize, iconCont, iconSize, iconPrev, iconColor,prev,cont}) {
    return (
        <View style={[style.container , {backgroundColor:bg}]}>
            <Text onPress={prev}>
                <Icon name={iconPrev} color={iconColor} size={iconSize} />
            </Text>
            <Text style={[style.title , {color:textColor , fontSize:textSize}]} >{text}</Text>
            <Text onPress={cont}>
                <Icon  name={iconCont} color={iconColor} size={iconSize} />
            </Text>
        </View>
    )
}

// styling...
const style = StyleSheet.create({
    container: {
        backgroundColor:"rgba(0,0,0,0)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex:999,
        paddingHorizontal: 8,
        elevation:3,
        padding: 15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    title: {
        fontFamily:"Poppins-Medium"
    }
})