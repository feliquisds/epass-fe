import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native'
import globalStyles from "../styles/Styles";

import Login from '../screens/Login'
import Tabs from "./Tabs"
import Recovery from "../screens/Recovery"

const Stack = createStackNavigator()

export default () => {
    const theme = useColorScheme()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles().safe_area}>
                <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login" screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                        />
                        <Stack.Screen
                            name="Recovery"
                            component={Recovery}
                            options={{
                                animation: 'slide_from_right'
                            }} />
                        <Stack.Screen
                            name="Tabs"
                            component={Tabs}
                            options={{
                                animation: 'slide_from_bottom'
                            }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}