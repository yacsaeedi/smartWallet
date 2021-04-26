import { StyleSheet } from "react-native";
import { Color } from "../../../../Constants"
const styles = StyleSheet.create({
    cardBox: {
        width: 355,
        height: 180,
        backgroundColor: Color.bgBox,
        borderRadius: 12,
        marginTop: 50,
        paddingVertical: 20
    },
    cardNum: {
        width: "100%",
        marginTop: 30,
        textAlign: "center"
    },
    btnBox: {
        marginTop: 25
    },
    cvvInput: {
        height: 20,
        padding: 0
    },
    btnNumber: {
        width: "33%",
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    parentKeyBoard: {
        flex: 0.80,
        marginVertical: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

})
export default styles