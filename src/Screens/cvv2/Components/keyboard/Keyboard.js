import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ParentStyle from '../../../../Styles';
import styles from './KeyboardStyle';
import { Data } from '../../../../Constants';

const Keyboard = ({ onPressNumber = () => false }) => {

    const renderItem = (item, index) => {
        return (
            <Pressable
                style={styles.btnNumber}
                key={index}
                onPress={() => {
                    onPressNumber(item.num);
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
        </View>
    );
};
export default Keyboard;
