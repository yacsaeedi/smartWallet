import React, {useState, useEffect, useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {NavBar, SwpList} from '../../Components';
import ParentStyle from '../../Styles';
import styles from './CardsStyle';
import {Data} from '../../Constants';
import {UserContext} from '../../App/Navigator';

const Cards = props => {
  const [context, setContext, state, setstate] = useContext(UserContext);
  const handleScroll = event => {
    setContext(event.nativeEvent.contentOffset.y);
  };
  useEffect(() => {
    if (context <= 30) {
      setstate(true);
    } else {
      setstate(false);
    }
  }, [context]);
  return (
    <ScrollView onScroll={handleScroll} style={[ParentStyle.wrp]}>
      <NavBar
        textNav="Card"
        number="4"
        change={'navCenter'}
        iconNameLeft="chevron-left"
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
