// react-native-component...
import { FlatList, Text, View } from "react-native"
import { useEffect, useState } from "react";

// API-functions...
import { get } from "../services"

// main-component...
export default function Home() {
  // states...
  const [data , setData] = useState([])

  // functions-get-data...
  async function getSurah() {
    try {
      const response = await get("https://open-api.my.id/api/quran/surah");
      setData(response);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=> {
    getSurah();
  } , [])

  return (
    <View>
      <FlatList />
    </View>
  )
}

