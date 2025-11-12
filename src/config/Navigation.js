import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "../styles/Generic";
import { StatusBar, useColorScheme } from 'react-native'

import Login from '../screens/Login'
import Summary from "../screens/Summary"
import Recovery from "../screens/Recovery"

const Stack = createStackNavigator()

export default () => {
    const theme = useColorScheme()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles().safe_area}>
                <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                headerShown: false
                            }} />
                        <Stack.Screen
                            name="Recovery"
                            component={Recovery}
                            options={{
                                headerShown: false,
                                animation: 'slide_from_right'
                            }} />
                        <Stack.Screen
                            name="Summary"
                            component={Summary}
                            options={{
                                headerShown: false,
                                animation: 'slide_from_bottom'
                            }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}