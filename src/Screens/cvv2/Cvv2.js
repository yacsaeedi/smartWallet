import React, { useState, useEffect,createContext } from 'react';
import { View,Text, Pressable } from 'react-native';

import { NavBar } from '../../Components';
import ParentStyle from '../../Styles';
import styles from './Cvv2Style';
import { Card, Keyboard } from './Components';

export const CardInfo = createContext();

const Cvv2 = props => {
  const [titleNav, settitleNav] = useState('Enter Codes');
  const [activeEl, setActiveEl] = useState("");
  const [state, setState] = useState({
    card: '',
    cvv2: '',
    date: '',
    activeInput: '',
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      activeInput: activeEl
    }))
    if (activeEl == 'card') {
      settitleNav('Enter Card Code');
    } else if (activeEl == 'date') {
      settitleNav('Enter Date Code');
    } else if (activeEl == 'cvv2') {
      settitleNav('Enter Cvv2 Code');
    }
  }, [activeEl])
  
  return (
    <CardInfo.Provider value={[activeEl, setActiveEl]}>
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
        <Pressable
          style={[styles.saveChange, ParentStyle.marginWrp_H]}
        >
          <Text style={[ParentStyle.Text_W_M, ParentStyle.text_center]}>Continue</Text>
        </Pressable>
      </View>
    </CardInfo.Provider>
  );
};
export default Cvv2;
