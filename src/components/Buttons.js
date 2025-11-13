import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AccentText, GradientAccentText } from './Texts';
import styles from "../styles/Styles";

export const BigSimpleButton = ({ children, onPress }) => {
    return (
        <Pressable style={styles().bigButton} onPress={onPress}>
            <GradientAccentText>{children}</GradientAccentText>
        </Pressable>
    )
}

export const BigAccentButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={styles().bigButton} colors={styles().colors.accent}>
                <AccentText style={{color: '#FFF'}}>{children}</AccentText>
            </LinearGradient>
        </Pressable>
    )
}

export const SlimSimpleButton = ({ children, onPress }) => {
    return (
        <Pressable style={styles().slimButton} onPress={onPress}>
            <GradientAccentText>{children}</GradientAccentText>
        </Pressable>
    )
}

export const SlimAccentButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={styles().slimButton} colors={styles().colors.accent}>
                <AccentText style={{color: '#FFF'}}>{children}</AccentText>
            </LinearGradient>
        </Pressable>
    )
}

export const SmallSimpleButton = ({ children, onPress, style }) => {
    return (
        <Pressable onPress={onPress}>
            <AccentText style={style}>{children}</AccentText>
        </Pressable>
    )
}

export const SmallAccentButton = ({ children, onPress, style }) => {
    return (
        <Pressable onPress={onPress}>
            <GradientAccentText style={style}>{children}</GradientAccentText>
        </Pressable>
    )
}

export const BackButton = ({ navigation }) => {
    return (
        <Pressable style={styles().backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" style={styles().backButtonIcon} />
        </Pressable>
    )
}