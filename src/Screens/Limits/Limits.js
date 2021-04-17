import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Modal, Pressable, ScrollView, KeyboardAvoidingView, SafeAreaView, TextInput } from 'react-native';
import ParentStyle from "../../Styles";
import styles from "./LimitsStyle";
import { NavBar, LimitsList } from "../../Components"
const Limits = (props) => {
    const { modalShow } = props

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[ParentStyle.wrp]}>
                <KeyboardAvoidingView>
                    <NavBar textNav="Card" change={"HomeNav"} showIcon={false} />
                    <Text style={[ParentStyle.Text_C_R, ParentStyle.marginWrp_H]}>set limits evry month to save money</Text>
                    <ScrollView style={styles.mrgTop}>
                        <View style={[styles.limitsBox]}>
                            <LimitsList />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>

        </SafeAreaView>
    )
}
export default Limits