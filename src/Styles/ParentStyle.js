import { StyleSheet } from "react-native";
import { Theme, Color } from '../Constants/Color';
const ParentStyle = StyleSheet.create({
    ///// global
    wrp: {
        flex: 1,
        backgroundColor: "#17191F"
    },
    bg_app: {
        backgroundColor: "#17191F"
    },
    bg_Blue: {
        backgroundColor: "#256CFE"
    },
    color_W: {
        color: "#FCFDFD"
    },
    color_B: {
        color: "#8c8c8e",
    },
    center_row: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    center_cloumn: {
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column"
    },
    between_cloumn: {
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "column"
    },
    between_row: {
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row"
    },
    row: {
        flexDirection: "row"
    },
    cloumn: {
        flexDirection: "column"
    },
    paddingWrp_H: {
        paddingHorizontal: 20,
    },
    marginWrp_H: {
        marginHorizontal: 20
    },
    // Text custom style start
    Text_W_M: {
        color: "#FCFDFD",
        fontSize: 14,
        fontFamily: "medium"
    },
    Text_W_U: {
        color: "#FCFDFD",
        fontSize: 18,
        fontFamily: "medium"
    },
    Text_W_L: {
        color: "#FCFDFD",
        fontSize: 20,
        fontFamily: "large"
    },
    Text_C_M: {
        color: "#8c8c8e",
        fontSize: 14,
        fontFamily: "medium"
    },
    Text_W_B: {
        color: "#FCFDFD",
        fontSize: 25,
        fontFamily: "Bold"
    },
    Text_C_l: {
        color: "#8c8c8e",
        fontSize: 12,
        fontFamily: 'ulLight'
    },
    Text_C_R: {
        color: "#b6b7ba",
        fontSize: 12,
        fontFamily: 'ulLight'
    },
    Text_W_R: {
        color: "#FCFDFD",
        fontSize: 10,
        fontFamily: 'regular'
    },
    Text_W_S: {
        color: "#FCFDFD",
        fontSize: 12,
        fontFamily: 'light'
    },
    text_center: {
        textAlign: "center",
    }
    // Text custom style end
})
export default ParentStyle;