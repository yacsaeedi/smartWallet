import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    gauge: {
        position: 'absolute',
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: "space-around",
        bottom: 70,
        left: 45
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
})
export default styles