import { StyleSheet } from "react-native";
import { Fonts, Theme } from "../../../Constants/Theme"
const styles = StyleSheet.create({
    navWrp: {
        paddingVertical: 10,
        width: "100%",
        marginTop: 10,
        alignItems: "center"
    },
    text_darkColor: {
        color: "#8c8c8e",
        fontSize: 12,
        fontFamily: 'ulLight'
    },
    text_lightColor: {
        color: "#FCFDFD",
        fontSize: 14,
        fontFamily: 'medium'
    },
    imageBox: {
        flex: 1,
        justifyContent: "flex-start",
    },
    imageParent: {
        width: 42,
        height: 42,
        borderRadius: 50,
        overflow: "hidden"
    },
    imageStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    infoBox: {
        flex: 7.5,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    bdgStyle: {
        width: 7,
        height: 7,
        borderRadius: 50,
        position: "absolute",
        top: 2,
        right: 3,
        zIndex: 100
    },
    navTitle: {
        fontSize: 22,
        fontFamily: "bold",
    },
    titleBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    titleBox_nav2: {
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1,
    },
    box_size: {
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1.4,
    },
    iconbox: {
        width: 28,
        height: 28,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: "#282a37",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    }

})
export default styles