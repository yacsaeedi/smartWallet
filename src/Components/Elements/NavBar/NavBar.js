import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './NavBarstyle';
import ParentStyle from '../../../Styles/ParentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color, Theme } from '../../../Constants';

const NavBar = (props) => {
  const {
    number,
    textNav,
    change,
    showIcon,
    centerTitle,
    iconName,
    iconNameRight,
    iconNameLeft,
    route,
    navigation
  } = props;
  const [Change, setChange] = useState(change);

  if (Change === 'HomeNav') {
    return (
      <View
        style={[
          styles.navWrp,
          centerTitle ? ParentStyle.center_row : ParentStyle.between_row,
          ParentStyle.paddingWrp_H,
        ]}>
        <View style={styles.titleBox}>
          <Text style={[ParentStyle.Text_W_B]}>{textNav}</Text>
        </View>
        <View style={(styles.titleBox, { marginTop: 5 })}>
          {showIcon ? (
            <Pressable
              onPress={() => route ? navigation.navigate(route) : null}
              style={[ParentStyle.center_row, styles.BoxNav]}>
              <Text
                style={[
                  ParentStyle.Text_C_l,
                  ParentStyle.text_center,
                  styles.mrg_rightIcon,
                ]}>
                {number}
              </Text>
              <Icon name="angle-right" size={17} color={Color.lightTxt} />
            </Pressable>
          ) : null}
        </View>
      </View>
    );
  } else if (change == 'navCenter') {
    return (
      <View
        style={[
          styles.navWrp,
          ParentStyle.paddingWrp_H,
          ParentStyle.between_row,
        ]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.titleBox_nav2}>
          <Icon name={iconNameLeft} size={17} color={Color.white} />
        </Pressable>
        <View style={(styles.titleBox_nav2, styles.box_size)}>
          <Text style={[ParentStyle.Text_W_L]}>{textNav}</Text>
        </View>
      </View>
    );
  } else if (change == 'navCvv2') {
    return (
      <View
        style={[
          styles.navWrp,
          ParentStyle.paddingWrp_H,
          ParentStyle.between_row,
        ]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.titleBox_nav2}>
          <Icon name={iconNameLeft} size={17} color={Color.white} />
        </Pressable>
        <View style={(styles.titleBox_nav2, styles.box_size1)}>
          <Text style={[ParentStyle.Text_W_L]}>{textNav}</Text>
        </View>
      </View>
    );
  } else if (change == 'ListHeader') {
    return (
      <View
        style={[
          styles.navWrp,
          ParentStyle.paddingWrp_H,
          ParentStyle.between_row,
        ]}>
        <View style={(styles.titleBox_nav2, styles.box_size)}>
          <Text style={[ParentStyle.Text_W_L]}>{textNav}</Text>
        </View>
      </View>
    );
  } else if (change == 'headerNav') {
    return (
      <View
        style={[
          styles.navWrp,
          centerTitle ? ParentStyle.center_row : ParentStyle.between_row,
          ParentStyle.paddingWrp_H,
        ]}>
        <View style={styles.titleBox}>
          <Text style={[ParentStyle.Text_W_B]}>{textNav}</Text>
        </View>
        <View style={styles.titleBox}>
          <Pressable style={styles.iconboxheader}>
            <Icon name="plus" size={13} color={Color.white} />
          </Pressable>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.navWrp,
          ParentStyle.paddingWrp_H,
          ParentStyle.center_row,
        ]}>
        <View style={[ParentStyle.center_row]}>
          <Text style={[ParentStyle.Text_W_L, ParentStyle.text_center]}>
            {textNav}
          </Text>
        </View>
      </View>
    );
  }
};

export default NavBar;
