import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Header, NavBar, MySlider, Mylist } from "../../Components";
import styles from "./StatisticStyle";
import ParentStyle from "../../Styles";

import Pie from 'react-native-pie';
const Statistic = (props) => {
    return (
        <View style={[ParentStyle.wrp]}>
            <NavBar textNav="Statistic" />
            <NavBar textNav="December" centerTitle={true} change="HomeNav" />
            <View style={styles.container}>
                <View
                    style={{
                        paddingVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Pie
                        radius={80}
                        innerRadius={50}
                        sections={[
                            {
                                percentage: 30,
                                color: "#256CFE",
                            },
                            {
                                percentage: 10,
                                color: "#282a37",
                            },
                            {
                                percentage: 15,
                                color: "#323441",
                            },
                            {
                                percentage: 25,
                                color: "#282a37",
                            },
                            {
                                percentage: 20,
                                color: "#323441",
                            },
                        ]}
                        strokeCap={'butt'}
                    />
                    <View style={styles.gauge}>
                        <Text style={[styles.gaugeText, ParentStyle.Text_C_M]}>@</Text>
                        <Text style={[styles.gaugeText, ParentStyle.Text_C_M]}>Product</Text>
                        <Text style={[styles.gaugeText, ParentStyle.Text_W_M]}>-$ 500,00</Text>
                    </View>
                </View>
            </View>
            <Mylist showDate={false} />
        </View>
    )
}
export default Statistic