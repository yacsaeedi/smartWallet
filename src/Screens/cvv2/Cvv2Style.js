import { StyleSheet } from "react-native";
import { Color } from "../../Constants"
const styles = StyleSheet.create({
    cardWrp: {
        flex: 1,
    },
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
    },
    saveChange: {
        width: "90%",
        padding: 10,
        paddingVertical: 13,
        backgroundColor: Color.blue,
        borderRadius: 8,
        marginTop: 180,
        alignSelf: "center"
    },

})
export default styles