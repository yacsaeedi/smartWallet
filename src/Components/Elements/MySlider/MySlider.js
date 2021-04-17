import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

import styles from "./MySliderStyle";
import ParentStyle from "../../../Styles/ParentStyle"
import Data from "../../../Constants/Data";
import Icon from 'react-native-vector-icons/FontAwesome5';

const MySlider = (props) => {
    return (
        <FlatList
            data={Data.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <View style={[styles.cardStyle, ParentStyle.bg_Blue, ParentStyle.between_cloumn, { backgroundColor: item.bgColor }]}>
                        <View style={ParentStyle.between_row}>
                            <Icon name={item.icon} size={25} color="#8c8c8e" />
                            <Icon name={item.img} size={25} color="#8c8c8e" />
                        </View>
                        <View>
                            <Text style={ParentStyle.Text_W_B}>{item.number}</Text>
                            <Text style={ParentStyle.Text_W_S}>{item.job}</Text>
                        </View>
                        <View>
                            <Text style={ParentStyle.Text_C_R}>CARD NUMBER</Text>
                            <Text style={ParentStyle.Text_W_S}>{item.cNumber}</Text>
                        </View>
                        {/* <Text style={ParentStyle.Text_W_M}>{item.number}</Text> */}
                    </View>
                )
            }}
        />
    )
}
export default MySlider