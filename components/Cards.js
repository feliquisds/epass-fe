import { LinearGradient } from 'expo-linear-gradient';
import { Subtext } from './Texts';
import { getGap, Section } from './Alignments';
import globalStyles from "../styles/Styles";
import globalColors from '../styles/Colors';

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

export const GradientCard = ({ children, style, gradient = null, gap, start, end }) => {
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <LinearGradient style={[globalStyles().card, style, getGap(gap)]} colors={gradient} start={start} end={end}>
            {children}
        </LinearGradient>
    )
}

export const CardElement = ({ children, style, gap, horizontal, spaceBetween, centerVertical }) => {
    return (
        <Section style={[globalStyles().card_element, style]} gap={gap} horizontal={horizontal} spaceBetween={spaceBetween} centerVertical={centerVertical}>
            {children}
        </Section>
    )
}