import React from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { NavBar, SwipeoutBtn } from "../../../Components"
import ParentStyle from "../../../Styles";
import styles from "./SwpListStyle";
import { Color } from "../../../Constants";

const SwpList = (props) => {
    const { navTitle, navnumber, navChange, IconState, list, iconName, navigation } = props
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
                            <Pressable
                                onPress={() => navigation.navigate("Cvv2")}
                                style={[styles.footerList, ParentStyle.center_row]}>
                                <View style={[ParentStyle.center_row]}>
                                    <Icon name="plus" size={9} color={Color.lightTxt} />
                                    <Text style={[ParentStyle.Text_C_U]}> Add Card</Text>
                                </View>
                            </Pressable>
                        )
                    }}
                />
            </View>
        </>
    )
}
export default SwpList