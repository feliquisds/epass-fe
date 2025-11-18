import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, GradientText } from './Texts';
import globalStyles from "../styles/Styles";
import colors from '../styles/Colors';

export const BigSimpleButton = ({ children, onPress }) => {
    return (
        <Pressable style={globalStyles().bigButton} onPress={onPress}>
            <GradientText accented={true}>{children}</GradientText>
        </Pressable>
    )
}

export const BigAccentButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={globalStyles().bigButton} colors={colors().accent}>
                <Text accented={true} style={{ color: colors().buttonText }}>{children}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export const SlimSimpleButton = ({ children, onPress, gradient = colors().accent }) => {
    return (
        <Pressable style={globalStyles().slimButton} onPress={onPress}>
            <GradientText accented={true} gradient={gradient}>{children}</GradientText>
        </Pressable>
    )
}

export const SlimAccentButton = ({ children, onPress, gradient = colors().accent }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={globalStyles().slimButton} colors={gradient}>
                <Text accented={true} style={{ color: colors().buttonText }}>{children}</Text>
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
        <Pressable style={globalStyles().backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" style={globalStyles().backButtonIcon} />
        </Pressable>
    )
}