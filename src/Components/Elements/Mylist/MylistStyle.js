import { StyleSheet } from "react-native";
import { Fonts, Theme, Color } from "../../../Constants"
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
        borderBottomColor: Color.bgBox,
        borderBottomWidth: .9
    },
    iconbox: {
        width: 33,
        height: 33,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: Color.bgBox,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },

})
export default styles