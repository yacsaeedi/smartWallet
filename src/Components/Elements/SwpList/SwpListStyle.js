import { StyleSheet } from "react-native";
import { Color } from "../../../Constants"
const styles = StyleSheet.create({
    footerList: {
        borderRadius: 8,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: Color.lightTxt,
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    }
})
export default styles