import { StyleSheet } from "react-native";
import { Color, Theme } from "../../../Constants"
const styles = StyleSheet.create({
    btnBox: {
        backgroundColor: Color.bgBox,
        width: "100%",
        height: 60,
        borderRadius: 11,
        marginBottom: 8,
        position: "relative"
    },
    btnBox1: {
        backgroundColor: Color.bgBox,
        width: "100%",
        height: "100%",
        borderRadius: 11,
        position: "absolute",
        zIndex: 10000,

    },
    LeftBtn: {
        backgroundColor: Color.lightGreen,
        color: Color.white,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 8,
        fontFamily: Theme.Fonts.medium,
        fontSize: 14

    },
    rightBtn: {
        backgroundColor: Color.blue,
        color: Color.white,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        marginBottom: 8,
        fontFamily: Theme.Fonts.medium,
        fontSize: 14

    },
    imageStyle: {
        width: 30,
        height: 20,
        resizeMode: "cover",
        backgroundColor: "transparent",
        alignSelf: "center",
        marginRight: 12
    },
    imageBox: {

    },
    rightContent: {
        flex: 1,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    leftContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20

    },
    abslBox: {
        backgroundColor: Color.lightGreen,
        width: "50%",
        height: "100%"
    }
})
export default styles