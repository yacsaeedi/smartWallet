import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList, Pressable } from 'react-native';

import styles from "./StaticListStyle";
import ParentStyle from "../../../Styles";
import { Data, Color } from "../../../Constants";
import Icon from 'react-native-vector-icons/FontAwesome5';

const StaticList = (props) => {
    const { showDate, list } = props
    return (
        <FlatList
            data={list}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <Pressable style={
                        [ParentStyle.between_row, ParentStyle.marginWrp_H, styles.tranBox]}>
                        <View style={[ParentStyle.center_row]}>
                            <View style={styles.iconbox} >
                                <Icon name={item.icon} size={14} color={Color.lightTxt} />
                            </View>
                            <View style={ParentStyle.center_cloumn}>
                                <Text style={ParentStyle.Text_W_M}>{item.title}</Text>
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
                            <Text style={[ParentStyle.Text_C_R]}>/</Text>
                            <Text style={[ParentStyle.Text_C_R, { marginTop: 2 }]}>{item.val}</Text>

                        </View>
                    </Pressable>
                )
            }}
        />
    )
}
export default StaticList