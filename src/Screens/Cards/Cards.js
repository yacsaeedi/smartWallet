import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { NavBar, SwpList } from '../../Components';
import ParentStyle from '../../Styles';
import { Data } from '../../Constants';

const Cards = (props) => {
  return (
    <ScrollView style={[ParentStyle.wrp]}>
      <NavBar
        textNav="Cards"
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
          navigation={props.navigation}
        />
        <SwpList
          navTitle="Hidden"
          navnumber=""
          navChange="ListHeader"
          IconState={false}
          list={Data.listCard}
          navigation={props.navigation}
        />
      </View>
    </ScrollView>
  );
};
export default Cards;
