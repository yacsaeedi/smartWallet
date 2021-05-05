import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Swipeout from 'rc-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';

import ParentStyle from "../../../Styles";
import styles from "./SwipeoutBtnStyle";
import { Color } from "../../../Constants"

const SwipeoutBtn = (props) => {
    const { item } = props.item;
    
    return (
        <Swipeout
            style={[styles.btnBox]}
            left={[
                {
                    text: 'Activete',
                    style: styles.LeftBtn,
                    className: 'custom-class-1'
                }
            ]}
            right={[
                {
                    text: ' Hide',
                    style: styles.rightBtn,
                    className: 'custom-class-2'
                }
            ]}
        >
            <Pressable
                style={[styles.btnBoxWrp, ParentStyle.row]}>
                <View style={styles.abslBox}></View>
                <View style={[styles.abslBox, { backgroundColor: Color.blue }]}></View>
                <View style={[styles.btnBox1, ParentStyle.row]}>
                    <View style={[ParentStyle.row, styles.rightContent]}>
                        <View style={[ParentStyle.center_row, styles.imageBox]}>
                            <Icon name={item.icon} size={17} color={Color.white} style={styles.iconsStyle} />
                        </View>
                        <View style={styles.imageBox} >
                            <Text style={ParentStyle.Text_W_U}>{item.job}</Text>
                            <Text style={ParentStyle.Text_W_S}>{item.cNumber}</Text>
                        </View>
                    </View>
                    <View style={[ParentStyle.center_row, styles.leftContent]}>
                        <Text style={ParentStyle.Text_W_U}>{item.number}</Text>
                    </View>
                </View>
            </Pressable>
        </Swipeout>

    )
}
export default SwipeoutBtn