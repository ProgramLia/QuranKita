// react-native-component...
import { FlatList, StatusBar, Text, useColorScheme, View, StyleSheet, Pressable, ActivityIndicator } from "react-native"
import { useEffect, useState } from "react";

// react-native-vector-icon...
import Icon from '@react-native-vector-icons/feather';

// my-component...
import { Header } from "../components/header"
import Modals from "../components/modal";

// API-functions...
import { get } from "../services"

// main-component...
export default function Quran({navigation}) {
  // theme...
  const scheme = useColorScheme();

  // states...
  const [data, setData] = useState([])
  const [loading , setLoading] = useState(false)

  // functions-get-data...
  async function getSurah() {
    try {
      setLoading(true)
      const response = await get("https://open-api.my.id/api/quran/surah");
      setData(response);
    } catch (err) {
      console.log(err);
    }finally {
      setLoading(false)
    }
  }

  // useEffect for getData...
  useEffect(() => {
    getSurah();
  }, [])

  return ( 
    // container...
    <View style={{backgroundColor:scheme === "dark" ? "#333" : "#f0f0f0", flex:1}}>
        {/* statusBar */}
        <StatusBar backgroundColor={scheme === "dark" ? "#000" : "#fff"} barStyle={scheme === "dark" ? "light-content" : "dark-content"} />

        {/* header */}
        <Header bg={scheme === "dark" ? "#000" : "#fff"} text={"Quran"} iconColor={scheme === "dark" ? "#f0f0f0" : "#555"} textSize={18} iconPrev={"arrow-right"} iconCont={"home"} textColor={scheme === "dark" ? "#f0f0f0" : "#555"} iconSize={25} />

        {/* content */}
        <FlatList contentContainerStyle={{padding:10 , paddingVertical:70, gap:10}} data={data} renderItem={({item, index})=> {
          return (
            <Pressable style={({pressed})=> [style.menuContainer , {backgroundColor:scheme === "dark" ? "#212121" : "#fff"} , pressed && style.menuPress ]}>
              <Text style={[style.textMenu, {color:scheme === "dark" ? "#f0f0f0" : "#333"}]}>{item.nomor}.</Text>
              <Text style={[style.textMenu, {color:scheme === "dark" ? "#f0f0f0" : "#333"}]}>{item.nama_latin} ({item.nama})</Text>
              <View>
                <Icon name="book-open" color={scheme === "dark" ? "#f0f0f0" : "#333"} size={20} />
              </View>
            </Pressable>
          )
        }} />

        {/* loading */}
        <Modals transparent={true} visible={loading}>
            <View style={{backgroundColor: scheme === "dark" ? "#333": "#f0f0f0" , padding:50, gap:20 , borderRadius:10, elevation:5}}>
              <ActivityIndicator color={scheme === "dark" ? "#f0f0f0" : "#333"} size={50} />
              <Text style={{color:scheme === "dark" ? "#f0f0f0" : "#333" ,fontFamily:"Poppins-Regular"}}>Mengambil data...</Text>
            </View>
        </Modals>
    </View>
  )
}

// styling...
const style = StyleSheet.create({
  menuContainer: {
      flexDirection: "row",
      padding:18,
      alignItems:"center",
      borderRadius:8,
      elevation:3,
      justifyContent:"space-between",
  },
  textMenu: {
    fontFamily:"Poppins-Regular",
    fontSize:18,
    color:"#f0f0f0",
  },
  menuPress: {
    transform: [{scale: 0.97}],
  }
})

