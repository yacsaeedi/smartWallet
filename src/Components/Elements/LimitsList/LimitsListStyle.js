import { StyleSheet } from "react-native";
import { Fonts, Theme } from "../../../Constants/Theme"
const styles = StyleSheet.create({
    box: {
        width: "48%",
        height: 160,
        backgroundColor: "#282a37",
        margin: "1%",
        borderRadius: 8,
        padding: 15,
        justifyContent: "space-between"
    },
    content: {
        justifyContent: "center",
        alignItems: "flex-start",

    },
    iconboxheader: {
        width: 30,
        height: 30,
        backgroundColor: "#ccc",
        borderRadius: 50,
        backgroundColor: "#3d3f4c",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    busyBox: {
        backgroundColor: "#3d3f4c",
        width: "100%",
        height: 3.5,
        borderRadius: 8,
        overflow: 'hidden'
    },
    busyValue: {
        backgroundColor: "#256CFE",
        height: "100%"
    },

    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flex: 1,
    },
    centeredView1: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "transparent",
        flex: 1

    },
    modalView: {
        margin: 20,
        backgroundColor: "#18191e",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: "35%",
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
        bottom: -20,
        width: "100%"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalHeader: {
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        width: " 100%",
    },
    btnTop: {
        alignSelf: 'center',
        height: 3,
        backgroundColor: "#282a37",
        width: "30%",
        marginTop: 5,
        borderRadius: 50
    },
    inputParent: {
        width: "100%",
        marginTop: 15,

    },
    input: {
        width: "100%",
        padding: 5,
        backgroundColor: "#282a37",
        borderRadius: 8,
        marginBottom: 10
    },
    saveChange: {
        width: "100%",
        padding: 10,
        backgroundColor: "#256CFE",
        borderRadius: 8,
        marginBottom: 10
    }
})
export default styles