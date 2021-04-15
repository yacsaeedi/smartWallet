import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native';
import styles from "./NavBarstyle";
import Icon from 'react-native-vector-icons'
import ParentStyle from "../../../Styles/ParentStyle"
const NavBar = (props) => {
    const { number, textNav, change, showIcon, centerTitle, iconName } = props
    const [Change, setChange] = useState(change)
    {
        if (Change === "HomeNav") {
            return (
                <View style={[styles.navWrp, centerTitle ? ParentStyle.center_row : ParentStyle.between_row, ParentStyle.paddingWrp_H]}>
                    <View style={styles.titleBox}>
                        <Text style={[ParentStyle.Text_W_B]}>{textNav}</Text>
                    </View>
                    <View style={styles.titleBox}>
                        {showIcon ?
                            <View style={[ParentStyle.center_row, styles.BoxNav]}>
                                <Text style={[ParentStyle.Text_C_l, ParentStyle.text_center, styles.mrg_rightIcon]}>{number}</Text>
                                <Text style={[ParentStyle.Text_C_l, ParentStyle.text_center]}>@</Text>
                            </View>
                            :
                            null
                        }
                        {/* <Icon type="Ionicons" name="hardware-chip-sharp" /> */}
                    </View>
                </View>
            )
        } else if (change == "navCenter") {
            return (
                <View style={[styles.navWrp, ParentStyle.paddingWrp_H, ParentStyle.between_row]}>
                    <View style={styles.titleBox_nav2}>
                        <Text style={[ParentStyle.Text_C_l, ParentStyle.text_center]}>@</Text>
                    </View>
                    <View style={styles.titleBox_nav2, styles.box_size}>
                        <Text style={[ParentStyle.Text_W_L]}>{textNav}</Text>
                    </View>
                </View>
            )
        } else if (change == "ListHeader") {
            return (
                <View style={[styles.navWrp, ParentStyle.paddingWrp_H, ParentStyle.between_row]}>
                    <View style={styles.titleBox_nav2, styles.box_size}>
                        <Text style={[ParentStyle.Text_W_U]}>{textNav}</Text>
                    </View>
                </View>
            )
        } else if (change == "headerNav") {
            return (
                <View style={[styles.navWrp, centerTitle ? ParentStyle.center_row : ParentStyle.between_row, ParentStyle.paddingWrp_H]}>
                    <View style={styles.titleBox}>
                        <Text style={[ParentStyle.Text_W_B]}>{textNav}</Text>
                    </View>
                    <View style={styles.titleBox}>
                        <Pressable style={styles.iconboxheader} >
                            <Text style={ParentStyle.Text_C_R}>@</Text>
                            {/* <Icon/> */}
                        </Pressable>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={[styles.navWrp, ParentStyle.paddingWrp_H, ParentStyle.between_row]}>
                    <View style={[styles.titleBox_nav2]}>
                        <Text style={[ParentStyle.Text_W_B, ParentStyle.text_center]}>@</Text>
                    </View>
                    <View style={[styles.box_size, ParentStyle.between_row]}>
                        <Text style={[ParentStyle.Text_W_L]}>{textNav}</Text>
                        <View style={styles.iconbox} >
                            <Text style={[ParentStyle.Text_C_R, ParentStyle.text_center]}>@</Text>
                            {/* <Icon /> */}
                        </View>
                    </View>
                </View>
            )
        }
    }
}

export default NavBar