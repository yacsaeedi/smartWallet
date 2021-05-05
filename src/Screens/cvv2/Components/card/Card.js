import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ParentStyle from '../../../../Styles';
import styles from './CardStyle';
import { Color } from '../../../../Constants';
import { CardInfo } from '../../Cvv2';
import {MaskText} from "../../../../Components"

const Card = ({ card, cvv2, date }) => {
    const [activeEl, setActiveEl] = useContext(CardInfo);
    const [active, setactive] = useState("");

    useEffect(() => {
        setActiveEl(active)
    }, [activeEl, active])

    return (
        <View
            style={[
                // ParentStyle.marginWrp_H,
                ParentStyle.paddingWrp_H,
                styles.cardBox,
            ]}>
            <View style={[ParentStyle.between_row]}>
                <Icon name="cc-visa" size={25} color={Color.white} />
                <Icon name="cc-mastercard" size={25} color={Color.white} />
            </View>
            <MaskText
                style={[styles.cardNum, ParentStyle.Text_C_xB]}
                value={card}
                select="card"
                mask="_  _  _  _     _  _  _  _     _  _  _  _     _  _  _  _"
                char="_"
                setactive={setactive}
            />
            <View style={[ParentStyle.between_row, styles.btnBox]}>
                <View style={[ParentStyle.center_cloumn]}>
                    <Text style={[ParentStyle.Text_C_R]}>VALID THRUE</Text>
                    <MaskText
                        style={[ParentStyle.Text_C_M, styles.cvvInput]}
                        value={date}
                        select="date"
                        mask="_ _ / _ _ "
                        char="_"
                        setactive={setactive}
                    />
                </View>
                <View>
                    <Text style={[ParentStyle.Text_C_R]}>Cvv2</Text>
                    <MaskText
                        style={[ParentStyle.Text_W_U, styles.cvvInput]}
                        value={cvv2}
                        mask="_ _ _ "
                        select="cvv2"
                        char="_"
                        setactive={setactive}
                    />
                </View>
            </View>
        </View>
    );
};
export default Card;
