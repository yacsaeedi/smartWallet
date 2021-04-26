import React, {useState, useEffect, useContext, createContext} from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
import {NavBar} from '../../Components';
import ParentStyle from '../../Styles';
import styles from './Cvv2Style';
import {Card, Keyboard} from './Components';
let value = '';
export const CardInfo = createContext();
const Cvv2 = props => {
  const [titleNav, settitleNav] = useState('');
  const [num, setNum] = useState('8756 9869 9600 9696');
  const [activeEl, setActiveEl] = useState('');
  const [state, setState] = useState({
    card: '',
    cvv2: '',
    date: '',
    activeInput: 'card',
  });

  useEffect(() => {
    if (activeEl == 'input1') {
      settitleNav('Enter Card Code');
    } else if (activeEl == 'input2') {
      settitleNav('Enter Date Code');
    } else if (activeEl == 'input3') {
      settitleNav('Enter Cvv2 Code');
    }
  });

  return (
    <CardInfo.Provider value={[num, setNum, activeEl, setActiveEl]}>
      <View style={[ParentStyle.wrp]}>
        <NavBar
          textNav={titleNav}
          number="4"
          change={'navCvv2'}
          iconNameLeft="chevron-left"
          navigation={props.navigation}
        />
        <Card {...state} />
        <Keyboard
          onPressNumber={val => {
            const item = state.activeInput;

            setState(prev => ({
              ...prev,
              [item]: val === -1 ? state[item].slice(0, -1) : state[item] + val,
            }));
          }}
        />
      </View>
    </CardInfo.Provider>
  );
};
export default Cvv2;
