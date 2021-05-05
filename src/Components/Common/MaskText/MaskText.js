import React from 'react';
import {
    Text,
    Pressable,
} from 'react-native';

const MaskText = ({ value, mask, style, char = '_', select,setactive }) => {
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
    return (
        <Pressable onPress={() => setactive(select)} ><Text style={style}>{_renderValue()}</Text></Pressable>
    );
};
export default MaskText;
