import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtext } from './Texts';
import { getGap } from './Alignments';
import globalStyles from "../styles/Styles";

export const Card = ({ children, style, gap }) => {
    return (
        <View style={[globalStyles().card, style, getGap(gap)]}>
            {children}
        </View>
    )
}

export const GradientCard = ({ children, style, gradient = globalStyles().colors.accent, gap }) => {
    return (
        <LinearGradient style={[globalStyles().card, style, getGap(gap)]} colors={gradient}>
            {children}
        </LinearGradient>
    )
}

export const SubtitleCard = ({ children, style, subtitle, subtitleStyle, gap }) => {
    return (
        <View style={globalStyles().gap5}>
            <Subtext style={[globalStyles().textHorizontalMargins, subtitleStyle, getGap(gap)]}>{subtitle}</Subtext>
            <View style={[globalStyles().card, style]}>
                {children}
            </View>
        </View>
    )
}

export const CardElement = ({ children, style, gap }) => {
    return (
        <View style={[globalStyles().card_element, style, getGap(gap)]}>
            {children}
        </View>
    )
}