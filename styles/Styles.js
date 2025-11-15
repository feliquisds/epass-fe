import { StyleSheet } from "react-native"
import { colors, lightColors, darkColors } from './Colors'

export const globalStyleVariables = {
    screenMargin: 20,
    itemPadding: 17.5,
    accentWeight: 700
}

export default () => {
    return StyleSheet.create({
        // colors
        colors: {
            background: colors().background,
            text: colors().text,
            foreground: colors().foreground,
            divider: colors().divider,
            subtext: colors().subtext,
            accent: colors().accent,
            buttonText: colors().buttonText
        },
        lightColors: {
            background: lightColors.background,
            text: lightColors.text,
            foreground: lightColors.foreground,
            divider: lightColors.divider,
            subtext: lightColors.subtext
        },
        darkColors: {
            background: darkColors.background,
            text: darkColors.text,
            foreground: darkColors.foreground,
            divider: darkColors.divider,
            subtext: darkColors.subtext
        },

        // text
        title: {
            color: colors().text,
            fontSize: 30,
            fontWeight: 700,
        },
        header: {
            color: colors().text,
            fontSize: 24,
        },
        text: {
            color: colors().text,
            fontSize: 16
        },
        subtext: {
            color: colors().subtext,
            fontSize: 14
        },
        accentedText: {
            fontWeight: globalStyleVariables.accentWeight
        },
        textHorizontalMargins: {
            marginLeft: globalStyleVariables.screenMargin,
            marginRight: globalStyleVariables.screenMargin
        },

        // interface
        safe_area: {
            flex: 1,
            backgroundColor: colors().background
        },
        screen: {
            flex: 1,
            padding: 20,
            backgroundColor: colors().background
        },
        input: {
            placeholderTextColor: colors().subtext,
            color: colors().text,
            fontSize: 16
        },
        divider: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: globalStyleVariables.itemPadding,
            marginRight: globalStyleVariables.itemPadding,
            borderColor: colors().divider,
            borderBottomWidth: 1
        },

        // cards
        card: {
            padding: 0,
            borderRadius: 30,
            backgroundColor: colors().foreground,
            minHeight: 45
        },
        card_element: {
            paddingTop: globalStyleVariables.itemPadding,
            paddingBottom: globalStyleVariables.itemPadding,
            paddingLeft: globalStyleVariables.itemPadding,
            paddingRight: globalStyleVariables.itemPadding
        },

        // buttons
        smallButton: {
            color: colors().accent,
            alignSelf: 'flex-start',
            fontSize: 16,
            fontWeight: 700,
        },
        bigButton: {
            backgroundColor: '#FFF',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: 180,
            height: 50,
            borderRadius: 30,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
        },
        slimButton: {
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            borderRadius: 30,
        },
        backButton: {
            backgroundColor: colors().foreground,
            width: 40,
            height: 40,
            borderRadius: 100,
            padding: 10,
            paddingLeft: 14,
            paddingTop: 11
        },
        backButtonIcon: {
            color: colors().text,
            fontSize: 18
        },

        // alignment
        scrollPadding: {
            paddingBottom: 40
        },
        tabScreenPadding: {
            paddingBottom: 126
        },
        space_between: {
            flex: 1,
            justifyContent: 'space-between',
        },
        horizontal: {
            flexDirection: 'row'
        },
        centerVertical: {
            alignItems: 'center'
        },
        alignRight: {
            alignItems: 'flex-end',
            alignSelf: 'flex-end'
        },
    })
}