import { Text as ReactText, View } from 'react-native';
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

export const Header = ({ children, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactText style={[
            styles().header,
            style,
            accented ? styles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const Text = ({ children, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactText style={[
            styles().text,
            style,
            accented ? styles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const Subtext = ({ children, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactText style={[
            styles().subtext,
            style,
            accented ? styles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const GradientHeader = ({ children, gradient = styles().colors.accent, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactGradientText style={[
            styles().header,
            style,
            accented ? styles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientText = ({ children, gradient = styles().colors.accent, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactGradientText style={[
            styles().text,
            style,
            accented ? styles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientSubtext = ({ children, gradient = styles().colors.accent, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactGradientText style={[
            styles().subtext,
            style,
            accented ? styles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}