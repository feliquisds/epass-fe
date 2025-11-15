import { Text as ReactText, View } from 'react-native';
import { GradientText as ReactGradientText } from 'universal-gradient-text'
import { BackButton } from './Buttons';
import globalStyles from "../styles/Styles";
import { Section } from './Alignments';

export const Title = ({ children, style }) => {
    return (
        <ReactText style={[globalStyles().title, globalStyles().textHorizontalMargins, style]}>{children}</ReactText>
    )
}

export const TitleWithBackButton = ({ children, style, navigation }) => {
    return (
        <Section horizontal={true} gap={10}>
            <BackButton navigation={navigation} />
            <ReactText style={[globalStyles().title, style]}>{children}</ReactText>
        </Section>
    )
}

export const Header = ({ children, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactText style={[
            globalStyles().header,
            style,
            accented ? globalStyles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const Text = ({ children, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactText style={[
            globalStyles().text,
            style,
            accented ? globalStyles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const Subtext = ({ children, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactText style={[
            globalStyles().subtext,
            style,
            accented ? globalStyles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const GradientHeader = ({ children, gradient = globalStyles().colors.accent, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactGradientText style={[
            globalStyles().header,
            style,
            accented ? globalStyles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientText = ({ children, gradient = globalStyles().colors.accent, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactGradientText style={[
            globalStyles().text,
            style,
            accented ? globalStyles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientSubtext = ({ children, gradient = globalStyles().colors.accent, style, accented, centerVertical, alignRight }) => {
    return (
        <ReactGradientText style={[
            globalStyles().subtext,
            style,
            accented ? globalStyles().accentedText : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}