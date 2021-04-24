import { StyleSheet } from "react-native";
import { Color } from "../../Constants"
const styles = StyleSheet.create({
    limitsBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        flex: 1,
        marginHorizontal: 17,
        marginTop: 10
    },
    input: {
        width: "100%",
        padding: 5,
        backgroundColor: Color.bgBox,
        borderRadius: 8,
        marginBottom: 10
    },
    mrgTop: {
        marginTop: 5,
        marginBottom: 80,

    }
})
export default styles