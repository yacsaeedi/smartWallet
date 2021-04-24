import React from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';

import styles from "./MylistStyle";
import ParentStyle from "../../../Styles";
import { Color } from "../../../Constants";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Mylist = (props) => {
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
                            <View style={[styles.iconbox]} >
                                <Icon name={item.icon} size={10} color={Color.white} />
                            </View>
                            <View style={[ParentStyle.center_cloumn]}>
                                <Text style={[ParentStyle.Text_W_M]}>{item.title}</Text>
                                {showDate ?
                                    <Text style={[ParentStyle.Text_C_R]}>{item.date}</Text>
                                    :
                                    null
                                }
                            </View>
                        </View>
                        <View style={[ParentStyle.center_row]}>
                            <Text style={[ParentStyle.Text_W_T, { color: item.noti == "+" ? Color.lightGreen : Color.white }]}>{item.noti}</Text>
                            <Text style={[ParentStyle.Text_W_T, { color: item.noti == "+" ? Color.lightGreen : Color.white }]}>{item.price}</Text>
                        </View>
                    </Pressable>
                )
            }}
        />
    )
}
export default Mylist