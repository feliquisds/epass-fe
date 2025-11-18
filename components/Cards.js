import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtext } from './Texts';
import { getGap, Section } from './Alignments';
import globalStyles from "../styles/Styles";
import colors from '../styles/Colors';

export const Card = ({ children, style, subtitleStyle, gap, label }) => {
    return (
        <Section gap={5}>
            {label && <Subtext style={[globalStyles().textHorizontalMargins, subtitleStyle]}>{label}</Subtext>}
            <Section style={[globalStyles().card, style]} gap={gap}>
                {children}
            </Section>
        </Section>
    )
}

export const GradientCard = ({ children, style, gradient = colors().accent, gap, start, end }) => {
    return (
        <LinearGradient style={[globalStyles().card, style, getGap(gap)]} colors={gradient} start={start} end={end}>
            {children}
        </LinearGradient>
    )
}

export const CardElement = ({ children, style, gap }) => {
    return (
        <Section style={[globalStyles().card_element, style]} gap={gap}>
            {children}
        </Section>
    )
}