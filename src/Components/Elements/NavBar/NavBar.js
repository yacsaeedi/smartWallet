import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from "./NavBarstyle";
import ParentStyle from "../../../Styles/ParentStyle"
import Icon from 'react-native-vector-icons/FontAwesome';
const NavBar = (props) => {
    const { number, textNav, change, showIcon, centerTitle, iconName, iconNameRight, iconNameLeft } = props
    const [Change, setChange] = useState(change)
    {
        if (Change === "HomeNav") {
            return (
                <View style={[styles.navWrp, centerTitle ? ParentStyle.center_row : ParentStyle.between_row, ParentStyle.paddingWrp_H]}>
                    <View style={styles.titleBox}>
                        <Text style={[ParentStyle.Text_W_B]}>{textNav}</Text>
                    </View>
                    <View style={styles.titleBox, { marginTop: 5 }}>
                        {showIcon ?
                            <View style={[ParentStyle.center_row, styles.BoxNav]}>
                                <Text style={[ParentStyle.Text_C_l, ParentStyle.text_center, styles.mrg_rightIcon]}>{number}</Text>
                                <Icon name="angle-right" size={17} color="#8c8c8e" />
                            </View>
                            :
                            null
                        }
                    </View>
                </View>
            )
        } else if (change == "navCenter") {
            return (
                <View style={[styles.navWrp, ParentStyle.paddingWrp_H, ParentStyle.between_row]}>
                    <View style={styles.titleBox_nav2}>
                        <Icon name={iconNameLeft} size={17} color="#FCFDFD" />

                        {/* <Text style={[ParentStyle.Text_C_l, ParentStyle.text_center]}>@</Text> */}
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
                            <Icon name="plus" size={13} color="#FCFDFD" />
                        </Pressable>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={[styles.navWrp, ParentStyle.paddingWrp_H, ParentStyle.between_row]}>
                    <Pressable style={[styles.titleBox_nav2]}>
                        <Icon name={iconNameRight} size={17} color="#FCFDFD" />
                    </Pressable>
                    <View style={[styles.box_size, ParentStyle.between_row]}>
                        <Text style={[ParentStyle.Text_W_L, ParentStyle.text_center]}>{textNav}</Text>
                        <Pressable style={styles.iconbox} >
                            <Icon name={iconNameLeft} size={13} color="#FCFDFD" />
                        </Pressable>
                    </View>
                </View>
            )
        }
    }
}

export default NavBar