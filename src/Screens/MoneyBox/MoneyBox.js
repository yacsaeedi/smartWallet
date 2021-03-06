import React, { useEffect, useContext } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ParentStyle from '../../Styles';
import { NavBar } from "../../Components"
import styles from './MoneyBoxStyle';
import { Data, Color } from '../../Constants';

import { UserContext } from "../../App/Navigator";
const MoneyBox = (props) => {
    const [context, setContext, state, setstate] = useContext(UserContext);

    useEffect(() => {
        if (context <= 30) {
            setstate(true)
        } else {
            setstate(false)
        }
    }, [context])
    
    const handleScroll = (event) => {
        setContext(event.nativeEvent.contentOffset.y)
    }

    return (
        <ScrollView
            onScroll={handleScroll}
            style={ParentStyle.wrp}>
            <NavBar textNav="MoneyBox" change={"headerNav"} showIcon={true} />
            <View style={[ParentStyle.marginWrp_H,styles.listMargin]}>
                <FlatList
                    data={Data.planList}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                key={index}
                                style={[styles.btnBox, ParentStyle.row]}>
                                <View style={[ParentStyle.row, styles.rightContent]}>
                                    <View style={[styles.infoText, { opacity: item.busy == "100%" ? .2 : 1 }]} >
                                        <Text style={ParentStyle.Text_W_TR}>{item.title}</Text>
                                        <Text style={ParentStyle.Text_W_S}>{item.price}/{item.total}</Text>
                                    </View>
                                </View>
                                <View style={[styles.busyBox, { backgroundColor: item.busy == "100%" ? Color.darkGreen : Color.blue, width: item.busy }]}>
                                    {item.busy == "100%" ?
                                        <Text style={ParentStyle.Text_W_M}><Icon name="party-popper" szie={12} color="orange" />  Congratulations! Goal Archive</Text>
                                        :
                                        null
                                    }
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}
export default MoneyBox