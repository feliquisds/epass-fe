import { ScrollView, TextInput, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { getGap } from "./Alignments"
import globalStyles from "../styles/Styles"
import colors from "../styles/Colors"

export const SimpleScreen = ({ children, style, containerStyle, fill, scrollPadding, tabScreen }) => {
    return (
        <ScrollView style={[globalStyles().screen, style]} contentContainerStyle={[
            getGap(15),
            containerStyle,
            fill ? { height: '100%' } : {},
            scrollPadding ? globalStyles().scrollPadding : {},
            tabScreen ? globalStyles().tabScreenPadding : {}
        ]}>
            {children}
        </ScrollView>
    )
}

export const GradientScreen = ({ children, gradient = colors().accent, style, containerStyle, fill, scrollPadding }) => {
    return (
        <LinearGradient style={[globalStyles().screen, style]} colors={gradient}>
            <ScrollView contentContainerStyle={[
                getGap(15),
                containerStyle,
                fill ? { height: '100%' } : {},
                scrollPadding ? globalStyles().scrollPadding : {}
            ]}>
                {children}
            </ScrollView>
        </LinearGradient>
    )
}

export const Input = ({ style, placeholder, placeholderTextColor = colors().subtext, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={[globalStyles().input, style]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
    )
}

export const Divider = ({ style }) => {
    return (
        <View style={[globalStyles().divider, style]} />
    )
}