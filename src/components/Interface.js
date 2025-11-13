import { ScrollView, TextInput, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { getGap } from "./Alignments"
import styles from "../styles/Styles"

export const SimpleScreen = ({ children, style, containerStyle, fill, scrollPadding }) => {
    return (
        <ScrollView style={[styles().screen, style]} contentContainerStyle={[
            getGap(15),
            containerStyle,
            fill ? { height: '100%' } : {},
            scrollPadding ? styles().scrollPadding : {}
        ]}>
            {children}
        </ScrollView>
    )
}

export const GradientScreen = ({ children, gradient = styles().colors.accent, style, containerStyle, fill, scrollPadding }) => {
    return (
        <LinearGradient style={[styles().screen, style]} colors={gradient}>
            <ScrollView contentContainerStyle={[
                getGap(15),
                containerStyle,
                fill ? { height: '100%' } : {},
                scrollPadding ? styles().scrollPadding : {}
            ]}>
                {children}
            </ScrollView>
        </LinearGradient>
    )
}

export const Input = ({ style, placeholder, placeholderTextColor = styles().colors.subtext, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={[styles().input, style]}
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
        <View style={[styles().divider, style]} />
    )
}