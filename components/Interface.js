import { ImageBackground, ScrollView, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { getGap, Section } from './Alignments'
import { Subtext } from './Texts'
import globalStyles, { globalStyleVariables } from '../styles/Styles'
import globalColors from '../styles/Colors'

export const SimpleScreen = ({ children, style, containerStyle, fill, scrollPadding, tabScreen }) => {
    const scrollPaddingStyle = globalStyles().scrollPadding
    const tabScreenPaddingStyle = globalStyles().tabScreenPadding
    return (
        <ScrollView style={[globalStyles().screen, style]} contentContainerStyle={[
            getGap(15),
            containerStyle,
            fill ? { height: '100%' } : {},
            scrollPadding ? scrollPaddingStyle : {},
            tabScreen ? tabScreenPaddingStyle : {}
        ]}>
            {children}
        </ScrollView>
    )
}

export const ImageScreen = ({ children, style, containerStyle, fill, scrollPadding, tabScreen, source = require('../assets/background.png'), resizeMode = 'cover' }) => {
    const scrollPaddingStyle = globalStyles().scrollPadding
    const tabScreenPaddingStyle = globalStyles().tabScreenPadding
    return (
        <ImageBackground source={source} resizeMode={resizeMode} style={[globalStyles().staticArea, { width: '100%', height: '100%' }]}>
            <ScrollView style={[globalStyles().scrollArea, style]} contentContainerStyle={[
                getGap(15),
                containerStyle,
                fill ? { height: '100%' } : {},
                scrollPadding ? scrollPaddingStyle : {},
                tabScreen ? tabScreenPaddingStyle : {}
            ]}>
                {children}
            </ScrollView>
        </ImageBackground>
    )
}

export const GradientScreen = ({ children, gradient = globalColors().accent, style, containerStyle, fill, scrollPadding }) => {
    const scrollPaddingStyle = globalStyles().scrollPadding
    return (
        <LinearGradient style={globalStyles().screen} colors={gradient}>
            <ScrollView style={[globalStyles.scrollArea, style]} contentContainerStyle={[
                getGap(15),
                containerStyle,
                fill ? { height: '100%' } : {},
                scrollPadding ? scrollPaddingStyle : {}
            ]}>
                {children}
            </ScrollView>
        </LinearGradient>
    )
}

export const Input = ({ style, placeholder, placeholderTextColor = null, value, onChangeText, secureTextEntry, editable, autoCapitalize, keyboardType, big }) => {
    const defaultPlaceholderTextColor = globalColors().subtext
    placeholderTextColor == null ? defaultPlaceholderTextColor : placeholderTextColor
    return (
        <TextInput
            style={[globalStyles().input, big ? { fontSize: globalStyleVariables.header } : {}, style]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
        />
    )
}

export const RoundInput = ({ style, placeholder, placeholderTextColor = null, value, onChangeText, secureTextEntry, editable = true, label }) => {
    const defaultPlaceholderTextColor = globalColors().subtext
    const activeTextColor = globalColors().text
    const inactiveTextColor = globalColors().subtext
    placeholderTextColor == null ? defaultPlaceholderTextColor : placeholderTextColor
    return (
        <Section gap={5}>
            <Subtext>{label}</Subtext>
            <TextInput
                style={[globalStyles().roundInput, { color: editable ? activeTextColor : inactiveTextColor }, style]}
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