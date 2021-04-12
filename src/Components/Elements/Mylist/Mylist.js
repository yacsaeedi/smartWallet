import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

import styles from "./MylistStyle";
import ParentStyle from "../../../Styles/ParentStyle"
import Data from "../../../Constants/Data"
const Mylist = (props) => {
    return (
        <FlatList
            data={Data.listInfo}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <View style={
                        [ParentStyle.between_row, ParentStyle.marginWrp_H, styles.tranBox]}>
                        <View style={ParentStyle.row}>
                            <View style={styles.iconbox} >
                                <Text style={ParentStyle.Text_C_R}>{item.icon}</Text>
                                {/* <Icon/> */}
                            </View>
                            <View >
                                <Text style={ParentStyle.Text_W_M}>{item.title}</Text>
                                <Text style={ParentStyle.Text_C_R}>{item.date}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={ParentStyle.Text_W_M}>{item.price}</Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}
export default Mylist