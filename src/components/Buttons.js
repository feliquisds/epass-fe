import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, GradientText } from './Texts';
import styles from "../styles/Styles";

export const BigSimpleButton = ({ children, onPress }) => {
    return (
        <Pressable style={styles().bigButton} onPress={onPress}>
            <GradientText accented={true}>{children}</GradientText>
        </Pressable>
    )
}

export const BigAccentButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={styles().bigButton} colors={styles().colors.accent}>
                <Text accented={true} style={{ color: '#FFF' }}>{children}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export const SlimSimpleButton = ({ children, onPress }) => {
    return (
        <Pressable style={styles().slimButton} onPress={onPress}>
            <GradientText accented={true}>{children}</GradientText>
        </Pressable>
    )
}

export const SlimAccentButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={styles().slimButton} colors={styles().colors.accent}>
                <Text accented={true} style={{ color: '#FFF' }}>{children}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export const SmallSimpleButton = ({ children, onPress, style }) => {
    return (
        <Pressable onPress={onPress}>
            <Text accented={true} style={style}>{children}</Text>
        </Pressable>
    )
}

export const SmallAccentButton = ({ children, onPress, style }) => {
    return (
        <Pressable onPress={onPress}>
            <GradientText accented={true} style={style}>{children}</GradientText>
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