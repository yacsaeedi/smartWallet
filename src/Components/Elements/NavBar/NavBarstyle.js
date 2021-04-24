import { StyleSheet } from "react-native";
import { Color } from "../../../Constants"
const styles = StyleSheet.create({
    navWrp: {
        paddingVertical: 10,
        width: "100%",
        marginTop: 10,
        alignItems: "center",
    },
    text_darkColor: {
        color: Color.lightTxt,
        fontSize: 12,
        fontFamily: 'ulLight'
    },
    text_lightColor: {
        color: Color.white,
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
        flex: 1.5,
    },
    iconbox: {
        width: 28,
        height: 28,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: Color.bgBox,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    iconboxheader: {
        width: 33,
        height: 33,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: Color.bgBox,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    },
    boxNav: {
        marginTop: 6
    },
    mrg_rightIcon: {
        marginRight: 3
    },
    iconbox: {
        width: 28,
        height: 28,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: Color.bgBox,
        justifyContent: "center",
        alignItems: "center"
    },


})
export default styles