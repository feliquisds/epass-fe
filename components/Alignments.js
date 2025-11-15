import { View } from "react-native"
import globalStyles from "../styles/Styles"

export function getGap(gap) {
    if (gap == 15) return { gap: 15 }
    if (gap == 10) return { gap: 10 }
    if (gap == 5) return { gap: 5 }
    return {}
}

export const Section = ({ children, gap, spaceBetween, horizontal, centerVertical, alignRight, style }) => {
    return (
        <View style={[
            getGap(gap),
            spaceBetween ? globalStyles().space_between : {},
            horizontal ? globalStyles().horizontal : {},
            centerVertical ? globalStyles().centerVertical : {},
            alignRight ? globalStyles().alignRight : {},
            style
        ]}>{children}</View>
    )
}