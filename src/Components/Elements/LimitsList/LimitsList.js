import React, { useState, useRef, useContext } from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';

import styles from './LimitsListStyle';
import ParentStyle from '../../../Styles';
import { Color } from '../../../Constants';
import { MyModal } from "../../../Components"
import { UserContext } from "../../../App/Navigator"
const LimitsList = () => {

  const [context, setContext, state, setstate, aryLimit, setAryLimit] = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({
    total: '',
    title: '',
    index: '',
  });
  const [activated, setActivated] = useState(false);

  const upperAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    setActivated(!activated);
    upperAnimation.setValue(0)
    Animated.timing(upperAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  useFocusEffect(
    React.useCallback(() => {
      startAnimation()
    }, [])
  );
  return (
    <>
      <FlatList
        data={aryLimit}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              key={index}
              style={styles.box}
              onPress={() => {
                setValues({
                  total: item.total,
                  title: item.title,
                  index: index,
                });
                setModalVisible(true);
              }}>
              <View style={styles.content}>
                <View style={styles.iconboxheader}>
                  <Icon name={item.icon} size={10} color={Color.white} />
                </View>
                <Text style={[ParentStyle.Text_W_TR]}>{item.title}</Text>
                <Text style={ParentStyle.Text_C_Xs}>
                  {item.price}/{item.total}
                </Text>
              </View>
              {item.busy === '0%' ? null : (
                <View style={styles.busyBox}>
                  <Animated.View
                    style={[
                      styles.busyValue,
                      {
                        width: upperAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0%', item.busy],
                        }),
                      },
                    ]}
                  />
                </View>
              )}
            </Pressable>
          );
        }}
      />
      <MyModal showModal={modalVisible} setModalVisible={setModalVisible} values={values} setValues={setValues} />
    </>
  );
};
export default LimitsList;
