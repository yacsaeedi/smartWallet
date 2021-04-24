import React, { useState, useEffect, useContext } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import ParentStyle from "../../Styles";
import styles from "./LimitsStyle";
import { NavBar, LimitsList } from "../../Components";
import { UserContext } from "../../App/Navigator"

const Limits = (props) => {
    const { modalShow } = props
    const [context, setContext, state, setstate] = useContext(UserContext);
    const handleScroll = (event) => {
        setContext(event.nativeEvent.contentOffset.y)
    }
    useEffect(() => {
        if (context <= 30) {
            setstate(true)
        } else {
            setstate(false)
        }
    }, [context])
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