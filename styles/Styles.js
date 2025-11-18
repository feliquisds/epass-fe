import { StyleSheet } from "react-native"
import colors from './Colors'

export const globalStyleVariables = {
    screenMargin: 20,
    itemPadding: 17.5,
    accentWeight: 700
}

export default (force = "") => {
    return StyleSheet.create({
        // text
        title: {
            color: colors(force).text,
            fontSize: 30,
            fontWeight: globalStyleVariables.accentWeight,
        },
        header: {
            color: colors(force).text,
            fontSize: 24,
        },
        text: {
            color: colors(force).text,
            fontSize: 16
        },
        subtext: {
            color: colors(force).subtext,
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
        scrollArea: {
            flex: 1,
            padding: globalStyleVariables.screenMargin,
        },
        staticArea: {
            flex: 1,
            backgroundColor: colors(force).background
        },
        screen: {
            flex: 1,
            padding: globalStyleVariables.screenMargin,
            backgroundColor: colors(force).background
        },
        input: {
            placeholderTextColor: colors(force).subtext,
            color: colors(force).text,
            fontSize: 16
        },
        roundInput: {
            fontSize: 16,
            borderColor: colors(force).divider,
            borderWidth: 1,
            borderRadius: 30,
            height: 50,
            paddingHorizontal: 15,
        },
        divider: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: globalStyleVariables.itemPadding,
            marginRight: globalStyleVariables.itemPadding,
            borderColor: colors(force).divider,
            borderBottomWidth: 1
        },

        // cards
        card: {
            padding: 0,
            borderRadius: 30,
            backgroundColor: colors(force).foreground,
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
            color: colors(force).accent,
            alignSelf: 'flex-start',
            fontSize: 16,
            fontWeight: globalStyleVariables.accentWeight,
        },
        bigButton: {
            backgroundColor: colors(force).buttonText,
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
            backgroundColor: colors(force).buttonText,
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            borderRadius: 30,
        },
        backButton: {
            backgroundColor: colors(force).foreground,
            width: 40,
            height: 40,
            borderRadius: 100,
            padding: 10,
            paddingLeft: 14,
            paddingTop: 11
        },
        backButtonIcon: {
            color: colors(force).text,
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