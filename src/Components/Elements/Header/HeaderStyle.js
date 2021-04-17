import { StyleSheet } from "react-native";
import { Fonts, Theme } from "../../../Constants/Theme"
const styles = StyleSheet.create({
    HeaderWrp: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        width: "100%",
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
        backgroundColor: "red",
        borderRadius: 50,
        position: "absolute",
        top: 0,
        right: 3,
        zIndex: 100
    }

})
export default styles