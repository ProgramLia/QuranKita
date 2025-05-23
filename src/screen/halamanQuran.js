// react-native-component...
import { FlatList, StatusBar, Text, useColorScheme, View, StyleSheet, Pressable, ActivityIndicator, ScrollView } from "react-native"
import { useEffect, useState } from "react";

// react-native-vector-icon...
import Icon from '@react-native-vector-icons/feather';

// my-component...
import { Header } from "../components/header"
import Modals from "../components/modal";

// API-functions...
import { get } from "../services"

// main-component...
export default function HalamanQuran({ route, navigation }) {
    // id-surah
    const { name, idSurah } = route.params;
    // theme...
    const scheme = useColorScheme();

    // states...
    const [dataSurah, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState({
        translate: false,
    })

    // functions-get-data...
    async function getDetailSurah() {
        try {
            setLoading(true)
            const response = await get("https://equran.id/api/v2/surat/" + idSurah);
            const dataset = response.data.ayat
            setData(dataset)
            console.log(dataset)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    // useEffect for getData...
    useEffect(() => {
        if (idSurah) {
            getDetailSurah();
        }
    }, [])

    return (
        <View style={{ backgroundColor: scheme === "dark" ? "#333" : "#f0f0f0", flex: 1 }}>
            {/* statusBar */}
            <StatusBar backgroundColor={scheme === "dark" ? "#000" : "#fff"} barStyle={scheme === "dark" ? "light-content" : "dark-content"} />

            {/* header */}
            <Header bg={scheme === "dark" ? "#000" : "#fff"} text={name} iconColor={scheme === "dark" ? "#f0f0f0" : "#555"} textSize={18} iconPrev={"arrow-left"} iconCont={open.translate ? "info" : "globe"} textColor={scheme === "dark" ? "#f0f0f0" : "#555"} iconSize={25} prev={() => navigation.goBack()} cont={() => setOpen({ ...open, translate: !open.translate })} />


            {/* content */}
            <FlatList contentContainerStyle={{ padding: 10, paddingVertical: 70, gap: 10, }}  data={dataSurah} renderItem={({ item, _ }) => {
                return (
                    <View style={[style.placeQuran, { backgroundColor: scheme === "dark" ? "#222" : "#fff" }]}>
                        <View>
                            <Text style={[style.textQuran, { color: scheme === "dark" ? "#fff" : "#333"  , fontSize:16}]}>{item.nomorAyat}</Text>
                            <Text style={[style.textQuran, { color: scheme === "dark" ? "#f0f0f0" : "#333", fontFamily: "Lateef-Regular" }]}>{item.teksArab}</Text>
                        </View>
                        {open.translate ? <Text style={[style.textQuran, { fontSize: 13, fontFamily: "Poppins-Regular", color: scheme === "dark" ? "#f0f0f0" : "#333", lineHeight:30 }]}>{item.teksIndonesia}</Text> : <Text style={[style.textQuran, { fontSize: 13, fontFamily: "Poppins-Regular", color: scheme === "dark" ? "#f0f0f0" : "#333", lineHeight:30 }]}>{item.teksLatin}</Text>}
                    </View>
                )
            }} />

            {/* loading */}
            <Modals transparent={true} visible={loading}>
                <View style={{ backgroundColor: scheme === "dark" ? "#333" : "#f0f0f0", padding: 50, gap: 20, borderRadius: 10, elevation: 5 }}>
                    <ActivityIndicator color={scheme === "dark" ? "#f0f0f0" : "#333"} size={50} />
                    <Text style={{ color: scheme === "dark" ? "#f0f0f0" : "#333", fontFamily: "Poppins-Regular" }}>Mengambil data...</Text>
                </View>
            </Modals>
        </View>
    )
}

// styling...
const style = StyleSheet.create({
    textQuran: {
        fontSize: 30,
        lineHeight: 42,
        color: "#fff",
        fontFamily:"Poppins-Regular",
    },
    placeQuran: {
        padding: 15,
        elevation: 3,
        gap: 20,
        borderRadius: 5,
    }
})

