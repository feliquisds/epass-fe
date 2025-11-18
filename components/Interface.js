import { ImageBackground, ScrollView, TextInput, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { getGap, Section } from "./Alignments"
import { Subtext } from "./Texts"
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

export const ImageScreen = ({ children, style, containerStyle, fill, scrollPadding, tabScreen, source = require('../assets/background.png'), resizeMode = 'cover' }) => {
    return (
        <ImageBackground source={source} resizeMode={resizeMode} style={globalStyles().staticArea}>
            <ScrollView style={[globalStyles().scrollArea, style]} contentContainerStyle={[
                getGap(15),
                containerStyle,
                fill ? { height: '100%' } : {},
                scrollPadding ? globalStyles().scrollPadding : {},
                tabScreen ? globalStyles().tabScreenPadding : {}
            ]}>
                {children}
            </ScrollView>
        </ImageBackground>
    )
}

export const GradientScreen = ({ children, gradient = colors().accent, style, containerStyle, fill, scrollPadding }) => {
    return (
        <LinearGradient style={globalStyles().screen} colors={gradient}>
            <ScrollView style={[globalStyles.scrollArea, style]} contentContainerStyle={[
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

export const Input = ({ style, placeholder, placeholderTextColor = colors().subtext, value, onChangeText, secureTextEntry, editable }) => {
    return (
        <TextInput
            style={[globalStyles().input, style]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
        />
    )
}

export const RoundInput = ({ style, placeholder, placeholderTextColor = colors().subtext, value, onChangeText, secureTextEntry, editable = true, label }) => {
    return (
        <Section gap={5}>
            <Subtext>{label}</Subtext>
            <TextInput
                style={[globalStyles().roundInput, { color: editable ? colors().text : colors().subtext }, style]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                editable={editable}
            />
        </Section>
    )
}

export const Divider = ({ style }) => {
    return (
        <View style={[globalStyles().divider, style]} />
    )
}