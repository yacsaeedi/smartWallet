import React, {useState, useEffect, useContext} from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import ParentStyle from '../../../../Styles';
import styles from './KeyboardStyle';
import {Color, Data} from '../../../../Constants';
import Icon from 'react-native-vector-icons/Feather';
import {CardInfo} from '../../Cvv2';
const Keyboard = ({onPressNumber = () => false}) => {
  const [num, setNum, activeEl, setActiveEl] = useContext(CardInfo);
  const [rem, setrem] = useState(num);

  useEffect(() => {}, [activeEl, rem]);

  const backSpace = () => {
    let remove = rem.slice(0, -1);
    setrem(remove);
  };

  useEffect(() => {
    setNum(rem);
    console.log('finish', rem);
  }, [rem]);

  const renderItem = (item, index) => {
    // const [active, setActive] = useState()
    return (
      <Pressable
        style={styles.btnNumber}
        key={index}
        onPress={() => {
          onPressNumber(item.num);
          // if (activeEl == "input1") {
          //     console.log("input1", item.num);
          //     setNum((prv) => ({
          //         ...prv,
          //         cardNum: item.num
          //     }))
          // } else if (activeEl == "input2") {
          //     console.log("input2", item.num);
          //     setNum((prv) => ({
          //         ...prv,
          //         date: item.num
          //     }))
          // } else if (activeEl == "input3") {
          //     console.log("input3", item.num);
          //     setNum((prv) => ({
          //         ...prv,
          //         cvv2: item.num
          //     }))
          // }
        }}>
        {item.IconName ? (
          <Icon
            size={10}
            style={ParentStyle.Text_C_B}
            name={item.IconName}
            onPress={() => onPressNumber(item.num)}
          />
        ) : (
          <Text style={ParentStyle.Text_W_B}>{item.num}</Text>
        )}
      </Pressable>
    );
  };
  return (
    <View style={[styles.parentKeyBoard]}>
      {Data.keyboardValue.map((item, index) => renderItem(item, index))}

      {/* <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>2</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>3</Text>
            </Pressable >
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>4</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>5</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>6</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>7</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>8</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>9</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Text style={ParentStyle.Text_W_B}>0</Text>
            </Pressable>
            <Pressable style={styles.btnNumber}>
                <Icon size={10} style={ParentStyle.Text_C_B} name="arrow-left" />
            </Pressable> */}
    </View>
  );
};
export default Keyboard;
