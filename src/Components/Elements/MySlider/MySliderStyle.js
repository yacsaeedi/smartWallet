import { StyleSheet } from "react-native";
import { Fonts, Theme } from "../../../Constants/Theme"
const styles = StyleSheet.create({
    cardStyle: {
        height: 260,
        width: 220,
        margin: 5,
        marginRight: 5,
        padding: 15,
        borderRadius: 10
    },
    imageStyle: {
        width: 50,
        height: 23,
        resizeMode: "cover",
        backgroundColor: "transparent"
    }
})
export default styles