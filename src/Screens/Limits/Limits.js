import React, { useEffect, useContext } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import ParentStyle from "../../Styles";
import styles from "./LimitsStyle";
import { NavBar, LimitsList } from "../../Components";
import { UserContext } from "../../App/Navigator"

const Limits = (props) => {
    const [context, setContext, state, setstate, aryLimit, setAryLimit] = useContext(UserContext);
    
    useEffect(() => {
        if (context <= 30) {
            setstate(true)
        } else {
            setstate(false)
        }
    }, [context])

    const handleScroll = (event) => {
        setContext(event.nativeEvent.contentOffset.y)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                onScroll={handleScroll}
                style={[ParentStyle.wrp]}>
                <KeyboardAvoidingView>
                    <NavBar textNav="Limits" change={"HomeNav"} showIcon={false} />
                    <Text style={[ParentStyle.Text_C_Xs, ParentStyle.marginWrp_H]}>set limits evry month to save money</Text>
                    <ScrollView style={styles.mrgTop}>
                        <View style={[styles.limitsBox]}>
                            <LimitsList />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ScrollView>

        </SafeAreaView>
    )
}
export default Limits