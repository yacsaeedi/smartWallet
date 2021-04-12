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
    imagebox: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        width: 50,
        height: 23,
        resizeMode: "cover",
        backgroundColor: "transparent"
    },
    tranBox: {
        paddingVertical: 10,
        borderBottomColor: "#282a37",
        borderBottomWidth: .9
    },
    iconbox: {
        width: 30,
        height: 30,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: "#282a37",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default styles