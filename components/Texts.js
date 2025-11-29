import { Text as ReactText } from 'react-native';
import { GradientText as ReactGradientText } from 'universal-gradient-text'
import { BackButton } from './Buttons';
import { Section } from './Alignments';
import globalStyles from '../styles/Styles';
import globalColors from '../styles/Colors';

export const Title = ({ children, style }) => {
    return (
        <ReactText style={[globalStyles().title, globalStyles().textHorizontalMargins, style]}>{children}</ReactText>
    )
}

export const TitleWithBackButton = ({ children, style, navigation }) => {
    return (
        <Section horizontal gap={10}>
            <BackButton navigation={navigation} />
            <ReactText style={[globalStyles().title, style]}>{children}</ReactText>
        </Section>
    )
}

export const Header = ({ children, style, accented, centerVertical, alignRight }) => {
    const accentedStyle = globalStyles().accentedText
    return (
        <ReactText style={[
            globalStyles().header,
            style,
            accented ? accentedStyle : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const Text = ({ children, style, accented, centerVertical, alignRight }) => {
    const accentedStyle = globalStyles().accentedText
    return (
        <ReactText style={[
            globalStyles().text,
            style,
            accented ? accentedStyle : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const Subtext = ({ children, style, accented, centerVertical, alignRight }) => {
    const accentedStyle = globalStyles().accentedText
    return (
        <ReactText style={[
            globalStyles().subtext,
            style,
            accented ? accentedStyle : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]}>{children}</ReactText>
    )
}

export const GradientHeader = ({ children, gradient = null, style, accented, centerVertical, alignRight }) => {
    const accentedStyle = globalStyles().accentedText
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <ReactGradientText style={[
            globalStyles().header,
            style,
            accented ? accentedStyle : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientText = ({ children, gradient = null, style, accented, centerVertical, alignRight }) => {
    const accentedStyle = globalStyles().accentedText
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <ReactGradientText style={[
            globalStyles().text,
            style,
            accented ? accentedStyle : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}

export const GradientSubtext = ({ children, gradient = null, style, accented, centerVertical, alignRight }) => {
    const accentedStyle = globalStyles().accentedText
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <ReactGradientText style={[
            globalStyles().subtext,
            style,
            accented ? accentedStyle : {},
            centerVertical ? { textAlignVertical: 'center' } : {},
            alignRight ? { textAlign: 'right' } : {}
        ]} colors={gradient}>{children}</ReactGradientText>
    )
}