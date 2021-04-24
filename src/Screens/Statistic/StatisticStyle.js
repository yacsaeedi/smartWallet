import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    gauge: {
        position: 'absolute',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: "center",
        bottom: 85,
        left: 105,
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        marginTop: 5
    },
    chartBox: {
        width: 300,
        height: 250,
        marginTop: 20
    }
})
export default styles