import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import ParentStyle from "../../Styles/ParentStyle";
import styles from "./HomeStyle"
import { Header, NavBar, MySlider, Mylist } from "../../Components";
import { UserContext } from "../../App/Navigator"
import { Data } from '../../Constants';

const Home = (props) => {
    const [context, setContext, state, setstate] = useContext(UserContext);
    const handleScroll = (event) => {
        setContext(event.nativeEvent.contentOffset.y)
    }
    useEffect(() => {
        if (context <= 30) {
            setstate(true)
        } else {
            setstate(false)
        }
    }, [context])
    return (
        <ScrollView
            onScroll={handleScroll}
            style={[ParentStyle.wrp]}>
            <Header />
            <NavBar textNav="Card" number="4" change={"HomeNav"} showIcon={true} />
            <View style={styles.listBox}><MySlider /></View>
            <NavBar textNav="Last Transaction" number="All" change={"HomeNav"} showIcon={true} />
            <Mylist showDate={true} list={Data.listInfo} />
        </ScrollView>
    )
}
export default Home