import { useColorScheme } from "react-native"

export const LightColors = {
    background: '#F2F2F7',
    text: '#000000',
    foreground: '#FFFFFF',
    divider: '#DFDFEC',
    subtext: '#75758A',
}

export const DarkColors = {
    background: '#000000',
    text: '#FFFFFF',
    foreground: '#1C1C1E',
    divider: '#363638',
    subtext: '#919199',
}

export const Colors = () => {
    const theme = useColorScheme()
    return {
        background: theme == 'dark' ? DarkColors.background : LightColors.background,
        text: theme == 'dark' ? DarkColors.text : LightColors.text,
        foreground: theme == 'dark' ? DarkColors.foreground : LightColors.foreground,
        divider: theme == 'dark' ? DarkColors.divider : LightColors.divider,
        subtext: theme == 'dark' ? DarkColors.subtext : LightColors.subtext,
        accent: ['#FF5B8F', '#FF9A4E'],
        buttonText: '#FFFFFF'
    }
}