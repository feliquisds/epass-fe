import { StyleSheet } from "react-native"
import { Colors, LightColors, DarkColors } from './Colors'

const variables = {
    screenMargin: 20,
    itemPadding: 17.5
}

export default function styles() {
    return StyleSheet.create({
        // colors
        colors: {
            background: Colors().background,
            text: Colors().text,
            foreground: Colors().foreground,
            divider: Colors().divider,
            subtext: Colors().subtext,
            accent: Colors().accent,
            buttonText: Colors().buttonText
        },
        lightColors: {
            background: LightColors.background,
            text: LightColors.text,
            foreground: LightColors.foreground,
            divider: LightColors.divider,
            subtext: LightColors.subtext
        },
        darkColors: {
            background: DarkColors.background,
            text: DarkColors.text,
            foreground: DarkColors.foreground,
            divider: DarkColors.divider,
            subtext: DarkColors.subtext
        },

        // text
        title: {
            color: Colors().text,
            fontSize: 30,
            fontWeight: 700,
        },
        header: {
            color: Colors().text,
            fontSize: 24,
        },
        text: {
            color: Colors().text,
            fontSize: 16
        },
        subtext: {
            color: Colors().subtext,
            fontSize: 14
        },
        accentedText: {
            fontWeight: 700
        },
        textHorizontalMargins: {
            marginLeft: variables.screenMargin,
            marginRight: variables.screenMargin
        },

        // interface
        safe_area: {
            flex: 1,
            backgroundColor: Colors().background
        },
        screen: {
            flex: 1,
            padding: 20,
            backgroundColor: Colors().background
        },
        input: {
            placeholderTextColor: Colors().subtext,
            color: Colors().text,
            fontSize: 16
        },
        divider: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: variables.itemPadding,
            marginRight: variables.itemPadding,
            borderColor: Colors().divider,
            borderBottomWidth: 1
        },

        // cards
        card: {
            padding: 0,
            borderRadius: 30,
            backgroundColor: Colors().foreground,
            minHeight: 45
        },
        card_element: {
            paddingTop: variables.itemPadding,
            paddingBottom: variables.itemPadding,
            paddingLeft: variables.itemPadding,
            paddingRight: variables.itemPadding
        },

        // buttons
        smallButton: {
            color: Colors().accent,
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
            backgroundColor: Colors().foreground,
            width: 40,
            height: 40,
            borderRadius: 100,
            padding: 10,
            paddingLeft: 14,
            paddingTop: 11
        },
        backButtonIcon: {
            color: Colors().text,
            fontSize: 18
        },

        // alignment
        scrollPadding: {
            paddingBottom: 40
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