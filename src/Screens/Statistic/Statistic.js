import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Header, NavBar, MySlider, Mylist } from "../../Components";
import styles from "./StatisticStyle";
import ParentStyle from "../../Styles"
const Statistic = (props) => {
    return (
        <View style={[ParentStyle.wrp]}>
            <NavBar textNav="Statistic" />
            <NavBar textNav="December" centerTitle={true} change="HomeNav" />

        </View>
    )
}
export default Statistic