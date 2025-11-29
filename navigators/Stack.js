import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native'
import globalStyles from "../styles/Styles";

import Login from '../screens/Login'
import Tabs from "./Tabs"
import Recovery from "../screens/Recovery"
import EditProfile from "../screens/EditProfile";
import ViewStatement from "../screens/ViewStatement";
import AddCredit from "../screens/AddCredit";
import Accessibility from "../screens/Accessibility";

const Stack = createStackNavigator()

export default () => {
    const theme = useColorScheme()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles().staticArea}>
                <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login" screenOptions={{
                        headerShown: false,
                        animation: 'slide_from_right'
                    }}>
                        <Stack.Screen name="Tabs" component={Tabs}
                            options={{
                                animation: 'slide_from_bottom'
                            }}
                        />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Recovery" component={Recovery} />
                        <Stack.Screen name="EditProfile" component={EditProfile} />
                        <Stack.Screen name="ViewStatement" component={ViewStatement} />
                        <Stack.Screen name="AddCredit" component={AddCredit} />
                        <Stack.Screen name="Accessibility" component={Accessibility} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}