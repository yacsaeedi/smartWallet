import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    btnBox: {
        backgroundColor: "#282a37",
        width: "100%",
        height: 60,
        borderRadius: 8,
        marginBottom: 8
    },
    LeftBtn: {
        backgroundColor: '#5fe27c',
        color: "#FCFDFD",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    rightBtn: {
        backgroundColor: "#256CFE",
        color: "#FCFDFD",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
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
        paddingHorizontal: 20
    },
    leftContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20

    }
})
export default styles