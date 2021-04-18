import { StyleSheet } from "react-native";
import { Color } from "../../Constants"
const styles = StyleSheet.create({
    btnBox: {
        backgroundColor: Color.bgBox,
        width: "100%",
        height: 60,
        borderRadius: 8,
        marginBottom: 8,
        overflow: "hidden"
    },
    rightContent: {
        flex: 1,
        paddingHorizontal: 20
    },
    imageStyle: {
        width: 30,
        height: 20,
        resizeMode: "cover",
        backgroundColor: "transparent",
        alignSelf: "center",
        marginRight: 12
    },
    infoText: {
        justifyContent: "space-around",
        alignItems: "flex-start",
        paddingVertical: 5,
        zIndex: 1
    },
    listMargin: {
        marginTop: 10
    },
    busyBox: {
        position: 'absolute',
        height: "100%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default styles