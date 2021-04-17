import React, { useState, useEffect, } from 'react';
import { View, ScrollView } from 'react-native';
import { NavBar, SwpList } from "../../Components"
import ParentStyle from "../../Styles";
import styles from "./CardsStyle";
import Data from "../../Constants/Data"
import Icon from 'react-native-vector-icons/FontAwesome5';

const Cards = (props) => {
    return (
        <View style={[ParentStyle.wrp]}>
            <NavBar textNav="Card" number="4" change={"navCenter"} iconNameLeft="chevron-left" />
            <ScrollView>
                <SwpList
                    navTitle="Active"
                    navnumber=""
                    navChange="ListHeader"
                    IconState={false}
                    list={Data.listCard}
                />
                <SwpList
                    navTitle="Hidden"
                    navnumber=""
                    navChange="ListHeader"
                    IconState={false}
                    list={Data.listCard}
                />
            </ScrollView>
        </View>
    )
}
export default Cards