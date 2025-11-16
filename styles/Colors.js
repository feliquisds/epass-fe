import { useColorScheme } from "react-native"

const fixedColors = {
    accent: ['#FF5B8F', '#FF9A4E'],
    buttonText: '#FFFFFF'
}

const lightColors = {
    background: '#F2F2F7',
    text: '#000000',
    foreground: '#FFFFFF',
    divider: '#DFDFEC',
    subtext: '#75758A',
    navigation: '#FFFFFF66',
    inactive: '#ADADB5',
    ...fixedColors
}

const darkColors = {
    background: '#000000',
    text: '#FFFFFF',
    foreground: '#1C1C1E',
    divider: '#363638',
    subtext: '#919199',
    navigation: '#1B1B1D66',
    inactive: '#777783',
    ...fixedColors
}

export default function (force = "") {
    if (force == "light") return lightColors
    if (force == "dark") return darkColors
    const theme = useColorScheme()
    return {
        background: theme == 'dark' ? darkColors.background : lightColors.background,
        text: theme == 'dark' ? darkColors.text : lightColors.text,
        foreground: theme == 'dark' ? darkColors.foreground : lightColors.foreground,
        divider: theme == 'dark' ? darkColors.divider : lightColors.divider,
        subtext: theme == 'dark' ? darkColors.subtext : lightColors.subtext,
        navigation: theme == 'dark' ? darkColors.navigation : lightColors.navigation,
        inactive: theme == 'dark' ? darkColors.inactive : lightColors.inactive,
        ...fixedColors
    }
}