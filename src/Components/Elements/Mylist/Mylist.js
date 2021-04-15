import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

import styles from "./MylistStyle";
import ParentStyle from "../../../Styles"
import Data from "../../../Constants/Data"
const Mylist = (props) => {
    const { showDate } = props
    return (
        <FlatList
            data={Data.listInfo}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <View style={
                        [ParentStyle.between_row, ParentStyle.marginWrp_H, styles.tranBox]}>
                        <View style={[ParentStyle.center_row]}>
                            <View style={styles.iconbox} >
                                <Text style={ParentStyle.Text_C_R}>{item.icon}</Text>
                                {/* <Icon/> */}
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
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={ParentStyle.Text_W_M}>{item.price}</Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}
export default Mylist