import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { NavBar, SwpList } from '../../Components';
import ParentStyle from '../../Styles';
import styles from './CardsStyle';
import { Data } from '../../Constants';

const Cards = (props) => {
  return (
    <ScrollView style={[ParentStyle.wrp]}>
      <NavBar
        textNav="Card"
        number="4"
        change={'navCenter'}
        iconNameLeft="chevron-left"
        navigation={props.navigation}
      />
      <View>
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
      </View>
    </ScrollView>
  );
};
export default Cards;
