import { Text as ReactText } from 'react-native';
import { GradientText as ReactGradientText } from 'universal-gradient-text'
import { BackButton } from './Buttons';
import styles from "../styles/Styles";

export const Title = ({ children, style }) => {
    return (
        <ReactText style={[styles().title, styles().textHorizontalMargins, style]}>{children}</ReactText>
    )
}

export const TitleWithBackButton = ({ children, style, navigation }) => {
    return (
        <View style={[styles().horizontal, styles().gap10]}>
            <BackButton navigation={navigation} />
            <ReactText style={[styles().title, style]}>{children}</ReactText>
        </View>
    )
}

export const Header = ({ children, style }) => {
    return (
        <ReactText style={[styles().header, style]}>{children}</ReactText>
    )
}

export const Texta = ({ children, style }) => {
    return (
        <ReactText style={[styles().text, style]}>{children}</ReactText>
    )
}

export const Subtext = ({ children, style }) => {
    return (
        <ReactText style={[styles().subtext, style]}>{children}</ReactText>
    )
}

export const AccentHeader = ({ children, style }) => {
    return (
        <ReactText style={[styles().header, styles().accentedText, style]}>{children}</ReactText>
    )
}

export const AccentText = ({ children, style }) => {
    return (
        <ReactText style={[styles().text, styles().accentedText, style]}>{children}</ReactText>
    )
}

export const AccentSubtext = ({ children, style }) => {
    return (
        <ReactText style={[styles().subtext, styles().accentedText, style]}>{children}</ReactText>
    )
}

export const GradientHeader = ({ children, gradient = styles().colors.accent, style }) => {
    return (
        <ReactGradientText style={[styles().header, style]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientText = ({ children, gradient = styles().colors.accent, style }) => {
    return (
        <ReactGradientText style={[styles().text, style]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientSubtext = ({ children, gradient = styles().colors.accent, style }) => {
    return (
        <ReactGradientText style={[styles().subtext, style]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientAccentHeader = ({ children, gradient = styles().colors.accent, style }) => {
    return (
        <ReactGradientText style={[styles().header, styles().accentedText, style]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientAccentText = ({ children, gradient = styles().colors.accent, style }) => {
    return (
        <ReactGradientText style={[styles().text, styles().accentedText, style]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientAccentSubtext = ({ children, gradient = styles().colors.accent, style }) => {
    return (
        <ReactGradientText style={[styles().subtext, styles().accentedText, style]} colors={gradient}>{children}</ReactGradientText>
    )
}