import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabBar } from "../components/TabBar";

import Summary from '../screens/Summary'
import Reports from "../screens/Reports";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

export const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator initialRouteName="Resumo" tabBar={(props) => <TabBar {...props}/>} screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen
                name="Resumo"
                component={Summary}
            />
            <Tab.Screen
                name="Relatório"
                component={Reports}
            />
            <Tab.Screen
                name="Avisos"
                component={Notifications}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
            />
        </Tab.Navigator>
    )
}