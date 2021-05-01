import React from 'react';
import { Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from "./MySliderStyle";
import ParentStyle from "../../../Styles/ParentStyle"
import { Data, Color } from "../../../Constants";
import Icon from 'react-native-vector-icons/FontAwesome5';

const MySlider = (props) => {
    const _renderItem = ({ item, index }) => {
        return (
            <View
                key={index}
                style={[styles.cardStyle, ParentStyle.bg_Blue, ParentStyle.between_cloumn, { backgroundColor: item.bgColor }]}>
                <View style={ParentStyle.between_row}>
                    <Icon name={item.icon} size={25} color={Color.white} />
                    <Icon name={item.img} size={25} color={Color.white} />
                </View>
                <View>
                    <Text style={ParentStyle.Text_W_B}>{item.number}</Text>
                    <Text style={ParentStyle.Text_W_S}>{item.job}</Text>
                </View>
                <View>
                    <Text style={ParentStyle.Text_C_R}>CARD NUMBER</Text>
                    <Text style={ParentStyle.Text_W_S}>{item.cNumber}</Text>
                </View>
            </View>
        );
    }
    return (
        <Carousel
            ref={(c) => { _carousel = c; }}
            data={Data.list}
            renderItem={_renderItem}
            sliderWidth={400}
            itemWidth={230}
            layout={'default'}
            inactiveSlideScale={1}
            loop={true}

        />
    )
}
export default MySlider