import { StyleSheet } from "react-native";
import { Color, Theme } from "../../../Constants"
const styles = StyleSheet.create({
    btnBox: {
        backgroundColor: Color.bgBox,
        width: "100%",
        height: 60,
        borderRadius: 8,
        marginBottom: 8,
        position: "relative",
        overflow: 'hidden',
    },
    btnBoxWrp:{
        backgroundColor: Color.bgBox,
        width: "100%",
        height: 60,
        borderRadius: 8,
        marginBottom: 8,
        position: "relative",
    },
    btnBox1: {
        backgroundColor: Color.bgBox,
        width: "100%",
        height: "100%",
        borderRadius: 8,
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
        alignSelf: "center",
        marginBottom: 8,
        fontFamily: Theme.Fonts.medium,
        fontSize: 14

    },
    iconsStyle: {
        width: 30,
        height: 20,
        backgroundColor: "transparent",
        alignSelf: "center",
        marginRight: 12
    },
    imageBox: {
justifyContent: "center"
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
        height: "100%",
    }
})
export default styles