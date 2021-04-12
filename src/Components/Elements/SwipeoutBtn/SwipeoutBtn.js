import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import ParentStyle from "../../../Styles";
import styles from "./SwipeoutBtnStyle";
import Swipeout from 'rc-swipeout';
const SwipeoutBtn = (props) => {
    const { item } = props.item
    console.log("item", item);
    return (
        <Swipeout
            style={[styles.btnBox]}
            left={[
                {
                    text: 'Activete',
                    // onPress: () => console.log('reply'),
                    style: styles.LeftBtn,
                    className: 'custom-class-1'
                }
            ]}
            right={[
                {
                    text: ' Hide',
                    // onPress: () => console.log('delete'),
                    style: styles.rightBtn,
                    className: 'custom-class-2'
                }
            ]}
        // onOpen={
        //     () => console.log('open')
        // }
        // onClose={() => console.log('close')}
        >
            <View style={[styles.btnBox, ParentStyle.row]}>
                <View style={[ParentStyle.row, styles.rightContent]}>
                    <View style={[ParentStyle.center_row, styles.imageBox]} >
                        <Image source={item.img} style={styles.imageStyle} />
                    </View>
                    <View style={[ParentStyle.center_cloumn, styles.imageBox]} >
                        <Text style={ParentStyle.Text_W_M}>CARD NUMBER</Text>
                        <Text style={ParentStyle.Text_W_S}>{item.cNumber}</Text>
                    </View>
                </View>
                <View style={[ParentStyle.center_row, styles.leftContent]}>
                    <Text style={ParentStyle.Text_W_L}>{item.number}</Text>
                </View>
            </View>
        </Swipeout>

    )
}
export default SwipeoutBtn