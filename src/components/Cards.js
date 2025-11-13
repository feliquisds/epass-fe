import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtext } from './Texts';
import { getGap } from './Alignments';
import styles from "../styles/Styles";

export const Card = ({ children, style, gap }) => {
    return (
        <View style={[styles().card, style, getGap(gap)]}>
            {children}
        </View>
    )
}

export const GradientCard = ({ children, style, gradient, gap }) => {
    return (
        <LinearGradient style={[styles().card, style, getGap(gap)]} colors={gradient}>
            {children}
        </LinearGradient>
    )
}

export const SubtitleCard = ({ children, style, subtitle, subtitleStyle, gap }) => {
    return (
        <View style={styles().gap5}>
            <Subtext style={[styles().textHorizontalMargins, subtitleStyle, getGap(gap)]}>{subtitle}</Subtext>
            <View style={[styles().card, style]}>
                {children}
            </View>
        </View>
    )
}

export const CardElement = ({ children, style, gap }) => {
    return (
        <View style={[styles().card_element, style, getGap(gap)]}>
            {children}
        </View>
    )
}