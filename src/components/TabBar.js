import { useLinkBuilder } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { GradientSubtext } from './Texts';
import { Section } from './Alignments';
import { StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";
import { variables as StyleVariables } from "../styles/Styles";

export function TabBar({ state, descriptors, navigation }) {
    const { buildHref } = useLinkBuilder();

    return (
        <Section horizontal={true} style={tabsStyle().tabBar}>
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
                        style={tabsStyle().tabBarEntry}
                    >
                        <GradientSubtext
                            style={isFocused ? { fontWeight: StyleVariables.accentWeight } : {}}
                            gradient={isFocused ? Colors().accent : [Colors().subtext, Colors().subtext]}
                        >
                            {label}
                        </GradientSubtext>
                    </PlatformPressable>
                );
            })}
        </Section>
    );
}

function tabsStyle() {
    return StyleSheet.create({
        tabBar: {
            height: 66,
            bottom: 17.5,
            left: 0,
            right: 0,
            marginHorizontal: 17.5,
            padding: 5,
            position: 'absolute',
            borderRadius: 50,
            elevation: 5,
            alignItems: 'center',
            backgroundColor: Colors().background,
            gap: 5
        },
        tabBarEntry: {
            height: '100%',
            flex: 1,
            padding: 5,
            borderRadius: 50,
            backgroundColor: Colors().foreground,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}