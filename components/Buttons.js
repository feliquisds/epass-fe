import { PlatformPressable } from '@react-navigation/elements';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, GradientText } from './Texts';
import globalStyles from "../styles/Styles";
import globalColors from '../styles/Colors';

export const BigSimpleButton = ({ children, onPress, gradient = null }) => {
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <PlatformPressable style={globalStyles().bigButton} onPress={onPress}>
            <GradientText accented gradient={gradient}>{children}</GradientText>
        </PlatformPressable>
    )
}

export const BigAccentButton = ({ children, onPress, gradient = null }) => {
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <PlatformPressable onPress={onPress}>
            <LinearGradient style={globalStyles().bigButton} colors={gradient}>
                <Text accented style={{ color: globalColors().buttonText }}>{children}</Text>
            </LinearGradient>
        </PlatformPressable>
    )
}

export const SlimSimpleButton = ({ children, onPress, gradient = null }) => {
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <PlatformPressable style={globalStyles().slimButton} onPress={onPress}>
            <GradientText accented gradient={gradient}>{children}</GradientText>
        </PlatformPressable>
    )
}

export const SlimAccentButton = ({ children, onPress, gradient = null }) => {
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <PlatformPressable onPress={onPress}>
            <LinearGradient style={globalStyles().slimButton} colors={gradient}>
                <Text accented style={{ color: globalColors().buttonText }}>{children}</Text>
            </LinearGradient>
        </PlatformPressable>
    )
}

export const SmallSimpleButton = ({ children, onPress, style }) => {
    return (
        <PlatformPressable onPress={onPress}>
            <Text accented style={style}>{children}</Text>
        </PlatformPressable>
    )
}

export const SmallAccentButton = ({ children, onPress, style, gradient = null }) => {
    const defaultGradient = globalColors().accent
    gradient = gradient == null ? defaultGradient : gradient
    return (
        <PlatformPressable onPress={onPress}>
            <GradientText accented style={style} gradient={gradient}>{children}</GradientText>
        </PlatformPressable>
    )
}

export const BackButton = ({ navigation }) => {
    return (
        <PlatformPressable style={globalStyles().backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" style={globalStyles().backButtonIcon} />
        </PlatformPressable>
    )
}