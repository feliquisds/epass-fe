import { ScrollView, TextInput, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styles from "../styles/Styles"

export const SimpleScreen = ({ children }) => {
    return (
        <ScrollView style={styles().screen} contentContainerStyle={[styles().gap15, { height: '100%' }]}>
            {children}
        </ScrollView>
    )
}

export const GradientScreen = ({ children, gradient = styles().colors.accent }) => {
    return (
        <LinearGradient style={styles().screen} colors={gradient}>
            <ScrollView contentContainerStyle={[styles().gap15, { height: '100%' }]}>
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
        <View style={[styles().divider, style]}/>
    )
}