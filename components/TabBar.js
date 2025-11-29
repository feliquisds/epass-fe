import { useLinkBuilder } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { GradientSubtext } from './Texts';
import { Section } from './Alignments';
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/Styles';
import globalColors from '../styles/Colors';

function getTabBarIcon(route, focused) {
    let icon

    switch (route) {
        case 'Resumo':
            icon = 'home'
            break
        case 'Relatório':
            icon = 'grading'
            break
        case 'Avisos':
            icon = 'notifications'
            break
        case 'Perfil':
            icon = 'person'
            break
    }

    return icon
}

export function TabBar({ state, descriptors, navigation }) {
    const { buildHref } = useLinkBuilder();

    return (
        <Section horizontal style={globalStyles().tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const accent = globalColors().accent
                const inactive = globalColors().inactive
                const foreground = globalColors().foreground

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
                        style={[globalStyles().tabBarEntry, isFocused ? { backgroundColor: foreground } : {}]}
                    >
                        <GradientSubtext gradient={isFocused ? accent : [inactive, inactive]}>
                            <MaterialIcons name={getTabBarIcon(route.name, isFocused)} size={20} />
                        </GradientSubtext>
                        <GradientSubtext accented={isFocused} gradient={isFocused ? accent : [inactive, inactive]}>
                            {label}
                        </GradientSubtext>
                    </PlatformPressable>
                );
            })}
        </Section>
    );
}