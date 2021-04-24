import React from 'react';
import { Text, View, Pressable } from 'react-native';
import ParentStyle from "../../../Styles";
import styles from "./SwipeoutBtnStyle";
import Swipeout from 'rc-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from "../../../Constants"
const SwipeoutBtn = (props) => {
    const { item } = props.item;
    return (
        <Swipeout
            style={[styles.btnBox]}
            left={[
                {
                    text: 'Activete',
                    // onPress: () => console.log('reply'),
                    style: styles.LeftBtn,
                    className: 'custom-class-1'
                }
            ]}
            right={[
                {
                    text: ' Hide',
                    // onPress: () => console.log('delete'),
                    style: styles.rightBtn,
                    className: 'custom-class-2'
                }
            ]}

        // onOpen={
        //     () => console.log('open')
        // }
        // onClose={() => console.log('close')}
        >
            <Pressable
                style={[styles.btnBox, ParentStyle.row]}>


                <View style={{ backgroundColor: Color.lightGreen, width: "50%", height: "100%" }}></View>
                <View style={{ backgroundColor: Color.blue, width: "50%", height: "100%", alignItems: 'flex-start' }}></View>
                <View
                    style={[styles.btnBox1, ParentStyle.row]}
                >
                    <View style={[ParentStyle.row, styles.rightContent]}>
                        <View style={[ParentStyle.center_row, styles.imageBox]} >
                            <Icon name={item.icon} size={17} color={Color.white} style={styles.imageStyle} />
                        </View>
                        <View style={[ParentStyle.center_cloumn, styles.imageBox]} >
                            <Text style={ParentStyle.Text_W_M}>CARD NUMBER</Text>
                            <Text style={ParentStyle.Text_W_S}>{item.cNumber}</Text>
                        </View>
                    </View>
                    <View style={[ParentStyle.center_row, styles.leftContent]}>
                        <Text style={ParentStyle.Text_W_L}>{item.number}</Text>
                    </View>
                </View>
            </Pressable>
        </Swipeout>

    )
}
export default SwipeoutBtn