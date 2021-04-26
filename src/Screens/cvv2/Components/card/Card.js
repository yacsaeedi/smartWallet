import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ParentStyle from '../../../../Styles';
import styles from './CardStyle';
import {Color} from '../../../../Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CardInfo} from '../../Cvv2';
import {TextInputMask} from 'react-native-masked-text';

const MaskText = ({value, mask, style, char = '$'}) => {
  const _renderValue = () => {
    let replaced = 0;
    const str = mask
      .split('')
      .map(item => {
        if (item === char) {
          replaced++;
          return value[replaced - 1] || item;
        }
        return item;
      })
      .join('');
    return str;
  };

  return <Text style={style}>{_renderValue()}</Text>;
};

const Card = ({card}) => {
  const [num, setNum, activeEl, setActiveEl] = useContext(CardInfo);
  const [x, setx] = useState('');
  const [y, sety] = useState('');
  const [z, setz] = useState('');

  return (
    <View
      style={[
        ParentStyle.marginWrp_H,
        ParentStyle.paddingWrp_H,
        styles.cardBox,
      ]}>
      <View style={[ParentStyle.between_row]}>
        <Icon name="cc-visa" size={25} color={Color.white} />
        <Icon name="cc-mastercard" size={25} color={Color.white} />
      </View>
      <MaskText
        style={[styles.cardNum, ParentStyle.Text_C_B]}
        value={card}
        mask="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
        char="_"
      />
      <TextInputMask
        // ref={(el) => input1 = el}
        style={[styles.cardNum, ParentStyle.Text_C_B]}
        type={'credit-card'}
        options={{
          obfuscated: false,
          issuer: 'visa-or-mastercard',
        }}
        value={num}
        onChangeText={text => {
          setNum(text);
        }}
        showSoftInputOnFocus={false}
        onFocus={() => setActiveEl('input1')}
      />
      <View style={[ParentStyle.between_row, styles.btnBox]}>
        <View>
          <Text style={[ParentStyle.Text_C_R]}>VALID THRUE</Text>
          <TextInputMask
            // ref={(el) => input2 = el}
            type={'datetime'}
            options={{
              format: 'MM/DD',
            }}
            value={y}
            onChangeText={text => {
              sety(text);
            }}
            style={[ParentStyle.Text_W_M, styles.cvvInput]}
            showSoftInputOnFocus={false}
            onFocus={() => setActiveEl('input2')}
          />
        </View>
        <View>
          <Text style={[ParentStyle.Text_C_R]}>Cvv2</Text>
          <TextInput
            // ref={(el) => input3 = el}
            value={z}
            onChangeText={text => {
              setz(text);
            }}
            maxLength={3}
            style={[ParentStyle.Text_W_M, styles.cvvInput]}
            showSoftInputOnFocus={false}
            onFocus={() => setActiveEl('input3')}
          />
        </View>
      </View>
    </View>
  );
};
export default Card;
