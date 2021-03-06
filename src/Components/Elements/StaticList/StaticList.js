import React from 'react';
import {Text, View,FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from "./StaticListStyle";
import ParentStyle from "../../../Styles";
import { Color } from "../../../Constants";

const StaticList = (props) => {
    const { showDate, list } = props
    return (
        <FlatList
            data={list}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <Pressable
                        key={index}
                        style={
                            [ParentStyle.between_row, ParentStyle.marginWrp_H, styles.tranBox]}>
                        <View style={[ParentStyle.center_row]}>
                            <View style={styles.iconbox} >
                                <Icon name={item.icon} size={10} color={Color.white} />
                            </View>
                            <View style={ParentStyle.center_cloumn}>
                                <Text style={[ParentStyle.Text_W_T, styles.text_limit]}>{item.title}</Text>
                                {showDate ?
                                    <Text style={ParentStyle.Text_C_R}>{item.date}</Text>
                                    :
                                    null
                                }
                            </View>
                        </View>
                        <View style={ParentStyle.center_row}>
                            <Text style={ParentStyle.Text_W_M}>{item.noti}</Text>
                            <Text style={ParentStyle.Text_W_M}>{item.price}</Text>
                            <Text style={[ParentStyle.Text_C_l]}>/</Text>
                            <Text style={[ParentStyle.Text_C_l, { marginTop: 2 }]}>{item.val}</Text>

                        </View>
                    </Pressable>
                )
            }}
        />
    )
}
export default StaticList