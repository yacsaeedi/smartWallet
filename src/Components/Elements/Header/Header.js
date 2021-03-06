import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './HeaderStyle';
import ParentStyle from '../../../Styles/ParentStyle';

const Header = () => {
  return (
    <View style={[styles.HeaderWrp, ParentStyle.between_row]}>
      <View style={styles.infoBox}>
        <Text style={ParentStyle.Text_C_l}>Total Balance</Text>
        <Text style={ParentStyle.Text_W_M}>$ 5,500,00</Text>
      </View>
      <View style={styles.imageBox}>
        <View style={styles.bdgStyle}></View>
        <View style={styles.imageParent}>
          <Image
            style={styles.imageStyle}
            source={require('../../../assets/Images/profile.jpg')}
          />
        </View>
      </View>
    </View>
  );
};
export default Header;
