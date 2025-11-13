import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Subtext } from './Texts';
import styles from "../styles/Styles";

export const Card = ({ children, style }) => {
    return (
        <View style={[styles().card, style]}>
            {children}
        </View>
    )
}

export const GradientCard = ({ children, style, gradient }) => {
    return (
        <LinearGradient style={[styles().card, style]} colors={gradient}>
            {children}
        </LinearGradient>
    )
}

export const SubtitleCard = ({ children, style, subtitle, subtitleStyle }) => {
    return (
        <View style={styles().gap5}>
            <Subtext style={[styles().textHorizontalMargins, subtitleStyle]}>{subtitle}</Subtext>
            <View style={[styles().card, style]}>
                {children}
            </View>
        </View>
    )
}

export const CardElement = ({ children, style }) => {
    return (
        <View style={[styles().card_element, style]}>
            {children}
        </View>
    )
}