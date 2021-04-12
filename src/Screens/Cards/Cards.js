import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, FlatList, ScrollView } from 'react-native';
import { NavBar, SwpList } from "../../Components"
import ParentStyle from "../../Styles";
import styles from "./CardsStyle";
import Data from "../../Constants/Data"

const Cards = (props) => {
    return (
        <View style={[ParentStyle.bg_app, styles.cardWrp]}>
            <NavBar textNav="Card" number="4" change={"navCenter"} />
            <ScrollView>
                <SwpList
                    navTitle="Active"
                    navnumber=""
                    navChange="HomeNav"
                    IconState={false}
                    list={Data.list}
                />
                <SwpList
                    navTitle="Hidden"
                    navnumber=""
                    navChange="HomeNav"
                    IconState={false}
                    list={Data.list}
                />
            </ScrollView>
        </View>
    )
}
export default Cards