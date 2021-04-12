import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native';

import styles from "./MySliderStyle";
import ParentStyle from "../../../Styles/ParentStyle"
import Data from "../../../Constants/Data"
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
                            <Image source={item.img} style={styles.imageStyle} />
                            <Image source={item.img} style={styles.imageStyle} />
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