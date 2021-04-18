import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, FlatList, ScrollView } from 'react-native';
import { NavBar, SwipeoutBtn } from "../../../Components"
import ParentStyle from "../../../Styles";
import styles from "./SwpListStyle";
import { Color } from "../../../Constants";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SwpList = (props) => {
    const { navTitle, navnumber, navChange, IconState, list, iconName } = props
    return (
        <>
            <NavBar textNav={navTitle} number={navnumber} change={navChange} showIcon={IconState} />
            <View style={[ParentStyle.marginWrp_H]}>
                <FlatList
                    data={list}
                    renderItem={(item) => {
                        return (
                            <SwipeoutBtn item={item} iconName={item.icon} />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={[styles.footerList, ParentStyle.center_row]}>
                                <View style={[ParentStyle.center_row]}>
                                    <Icon name="plus" size={10} color={Color.lightTxt} />
                                    <Text style={[ParentStyle.Text_C_M]}> ADD CARD</Text>
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