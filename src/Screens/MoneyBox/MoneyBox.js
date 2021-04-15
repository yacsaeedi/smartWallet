import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import ParentStyle from '../../Styles';
import { NavBar } from "../../Components"
import styles from './MoneyBoxStyle';
import Data from '../../Constants/Data';
const MoneyBox = (props) => {
    return (
        <View style={ParentStyle.wrp}>
            <NavBar textNav="MoneyBox" change={"headerNav"} showIcon={true} />
            <View style={[styles.container, ParentStyle.marginWrp_H, ParentStyle.center_cloumn, styles.listMargin]}>
                <FlatList
                    data={Data.planList}
                    renderItem={({ item }) => {
                        return (
                            <View style={[styles.btnBox, ParentStyle.row]}>
                                <View style={[ParentStyle.row, styles.rightContent]}>
                                    <View style={[styles.infoText, { opacity: item.busy == "100%" ? .2 : 1 }]} >
                                        <Text style={ParentStyle.Text_W_M}>{item.title}</Text>
                                        <Text style={ParentStyle.Text_W_S}>{item.price}/{item.total}</Text>
                                    </View>
                                </View>

                                <View style={[styles.busyBox, { backgroundColor: item.busy == "100%" ? "#37614b" : "#256CFE", width: item.busy }]}>
                                    {item.busy == "100%" ?
                                        <Text style={ParentStyle.Text_W_M}>Congratulations! Goal Archive</Text>
                                        :
                                        null
                                    }
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
export default MoneyBox