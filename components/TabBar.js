import { useLinkBuilder } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { GradientSubtext } from './Texts';
import { Section } from './Alignments';
import { StyleSheet } from "react-native";
import { colors } from "../styles/Colors";
import { globalStyleVariables } from "../styles/Styles";

function getTabBarIcon(route, focused) {
    let icon

    switch (route) {
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

    return icon
}

export function TabBar({ state, descriptors, navigation }) {
    const { buildHref } = useLinkBuilder();

    return (
        <Section horizontal={true} style={localStyle().tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <PlatformPressable
                        key={route.name}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        style={[localStyle().tabBarEntry, isFocused ? { backgroundColor: colors().foreground } : {}]}
                    >
                        <GradientSubtext
                            style={isFocused ? { fontWeight: globalStyleVariables.accentWeight } : {}}
                            gradient={isFocused ? colors().accent : [colors().subtext, colors().subtext]}
                        >
                            {label}
                        </GradientSubtext>
                    </PlatformPressable>
                );
            })}
        </Section>
    );
}

function localStyle() {
    return StyleSheet.create({
        tabBar: {
            height: 66,
            bottom: globalStyleVariables.screenMargin,
            marginHorizontal: globalStyleVariables.screenMargin,
            left: 0,
            right: 0,
            position: 'absolute',
            borderRadius: 50,
            alignItems: 'center',
            backgroundColor: colors().navigation,
            gap: 3
        },
        tabBarEntry: {
            height: '100%',
            flex: 1,
            padding: 5,
            borderRadius: 50,
            backgroundColor: colors().navigation,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}