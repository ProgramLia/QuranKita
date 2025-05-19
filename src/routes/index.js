// react-navigation...
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens...
import SplashScreen from '../screen/splashScreen';

// main-component...
const Stack = createNativeStackNavigator();
export default function RootStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
