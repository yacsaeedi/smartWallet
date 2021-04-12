import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, FlatList, ScrollView } from 'react-native';
import { NavBar, SwipeoutBtn } from "../../../Components"
import ParentStyle from "../../../Styles";
import styles from "./SwpListStyle";
// import Data from "../../Constants/Data"

const SwpList = (props) => {
    const { navTitle, navnumber, navChange, IconState, list } = props
    return (
        <>
            <NavBar textNav={navTitle} number={navnumber} change={navChange} showIcon={IconState} />
            <View style={[ParentStyle.marginWrp_H]}>
                <FlatList
                    data={list}
                    renderItem={(item) => {
                        return (
                            <SwipeoutBtn item={item} />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={[styles.footerList, ParentStyle.center_row]}>
                                <View style={[ParentStyle.center_row]}>
                                    <Text style={[ParentStyle.Text_W_M]}>+</Text>
                                    {/* <Icon/> */}
                                    <Text style={[ParentStyle.Text_W_M]}> ADD CARD</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )
}
export default SwpList