// react-native-component...
import { Text, StatusBar, useColorScheme, StyleSheet, Image } from "react-native";

// react-natove-linear-gradient...
import LinearGradient from 'react-native-linear-gradient';

// main-componnet...
export default function SplashScreen(){
    const scheme = useColorScheme();
    return (
      <LinearGradient style={style.container} locations={scheme === "dark" ? [0, 0.4 , 0.9] : [0, 0.65, 0.9]} colors={scheme === "light" ? ["#331E38" , "#FFD6A5" , "#fff"] : [  "#2c5364","#1a1a2e" , "#000"]}>
        <StatusBar backgroundColor={ scheme === "light" ?  "#331E38" : "#2c5364"} barStyle={"light-content"} />

        {/* logo-QuranKita */}
        <Image style={style.logo} source={require("../assets/images/QuranKita_Logo.png")} />
      </LinearGradient>
    )
}

// styling-component...
const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignContent:"center",
  },
  logo: {
    width:310,
    height:310,
    marginHorizontal:"auto",
  }
})