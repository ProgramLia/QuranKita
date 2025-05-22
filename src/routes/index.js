// react-navigation...
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

// screens...
import SplashScreen from '../screen/splashScreen';
import Quran from '../screen/quran';
import WaktuSholat from '../screen/waktuSholat';

// main-component...
const Stack = createNativeStackNavigator();
export default function RootStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='Quran' component={Quran} />
                <Stack.Screen name='WaktuSholat' component={WaktuSholat} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
