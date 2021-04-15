import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ParentStyle from "../../Styles/ParentStyle";
import styles from "./HomeStyle"
import { Header, NavBar, MySlider, Mylist } from "../../Components";
const Home = (props) => {
    return (
        <View style={[ParentStyle.wrp]}>
            <Header />
            <NavBar textNav="Card" number="4" change={"HomeNav"} showIcon={true} />
            <View style={styles.listBox}><MySlider /></View>
            <NavBar textNav="Last Transaction" number="All" change={"HomeNav"} showIcon={true} />
            <Mylist showDate={true} />
        </View>
    )
}
export default Home