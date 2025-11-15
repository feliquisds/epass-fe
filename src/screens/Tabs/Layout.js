import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Octicons } from '@expo/vector-icons';
import Summary from './Summary'
import { TabBar } from "../../components/TabBar";

const Tab = createBottomTabNavigator()

function getTabBarIcon(route, color, size, focused) {
    let icon

    switch (route.name) {
        case 'Resumo':
            icon = focused ? 'home-fill' : 'home'
            break
        case 'Relatório':
            icon = focused ? 'home-fill' : 'home'
            break
        case 'Avisos':
            icon = focused ? 'home-fill' : 'home'
            break
        case 'Perfil':
            icon = focused ? 'home-fill' : 'home'
            break
    }

    return (
        <Octicons name={icon} size={size} color={color} />
    )
}

export default () => {
    return (
        // <Tab.Navigator initialRouteName="Resumo" screenOptions={({route}) => ({
        //     tabBarIcon: ({ color, size, focused }) => getTabBarIcon(route, color, size, focused),
        //     headerShown: false,
        //     tabBarLabelPosition: 'below-icon',
        //     tabBarStyle: tabsStyle.tabBar,
        //     tabBarItemStyle: tabsStyle.tabBarEntry,
        //     tabBarActiveBackgroundColor: '#f00'
        // })}>
        <Tab.Navigator initialRouteName="Resumo" tabBar={(props) => <TabBar {...props}/>} screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen
                name="Resumo"
                component={Summary}
            />
            <Tab.Screen
                name="Relatório"
                component={Summary}
            />
            <Tab.Screen
                name="Avisos"
                component={Summary}
            />
            <Tab.Screen
                name="Perfil"
                component={Summary}
            />
        </Tab.Navigator>
    )
}