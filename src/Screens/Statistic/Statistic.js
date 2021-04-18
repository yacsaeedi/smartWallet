import React from 'react';
import { Text, View } from 'react-native';
import { NavBar, Mylist } from "../../Components";
import styles from "./StatisticStyle";
import ParentStyle from "../../Styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Color } from "../../Constants"
import Pie from 'react-native-pie';
const Statistic = (props) => {
    return (
        <View style={[ParentStyle.wrp]}>
            <NavBar textNav="Statistic" iconNameLeft="calendar-o" iconNameRight="chevron-left" />
            <NavBar textNav="December" centerTitle={true} change="HomeNav" />
            <View style={styles.container}>
                <View
                    style={{
                        paddingVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Pie
                        radius={80}
                        innerRadius={50}
                        sections={[
                            {
                                percentage: 30,
                                color: Color.blue,
                            },
                            {
                                percentage: 10,
                                color: Color.bgBox,
                            },
                            {
                                percentage: 15,
                                color: Color.chartBg,
                            },
                            {
                                percentage: 25,
                                color: Color.bgBox,
                            },
                            {
                                percentage: 20,
                                color: Color.chartBg,
                            },
                        ]}
                        strokeCap={'butt'}
                    />
                    <View style={styles.gauge}>
                        <Icon name="shopping-cart" size={14} color={Color.lightTxt} />
                        <Text style={[styles.gaugeText, ParentStyle.Text_C_M]}>Product</Text>
                        <Text style={[styles.gaugeText, ParentStyle.Text_W_M]}>-$ 500,00</Text>
                    </View>
                </View>
            </View>
            <Mylist showDate={false} />
        </View>
    )
}
export default Statistic