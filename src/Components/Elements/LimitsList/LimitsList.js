import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  FlatList,
  Modal,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './LimitsListStyle';
import ParentStyle from '../../../Styles';
import {Data, Color} from '../../../Constants';

const LimitsList = props => {
  const {showDate, showModal} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({
    total: '',
    title: '',
    index: '',
  });
  const [numVsl, setnumVsl] = useState(values.total);

  const [activated, setActivated] = useState(false);

  const upperAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    setActivated(!activated);
    Animated.timing(upperAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const changeValue = (item, id) => {
    let copylist = [...Data.limitsList];
    const finditem = copylist.findIndex(item => {
      return item.index === id; //index itemi k idsh barabare id k frestadam barat ro bargardon va briz to finditem
    });
    console.log('indexoItem:', finditem);
    if (finditem !== -1) {
      //yani age pyda kardi
      setValues(prv => ({
        ...prv,
        total: numVsl,
      }));
    }
  };

  return (
    <>
      <FlatList
        data={Data.limitsList}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
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
                // setModalVisible(true);
                startAnimation();
              }}>
              <View style={styles.content}>
                <View style={styles.iconboxheader}>
                  <Icon name={item.icon} size={10} color={Color.white} />
                </View>
                <Text style={[ParentStyle.Text_W_TR]}>{item.title}</Text>
                <Text style={ParentStyle.Text_C_Xs}>
                  {item.price}/{values.total}
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
      <Pressable style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.centeredView1}>
            <View style={[styles.modalView]}>
              <View style={styles.btnTop}></View>
              <View style={styles.modalHeader}>
                <Text style={[ParentStyle.Text_W_xL, ParentStyle.marginWrp_H]}>
                  {values.title}
                </Text>
                <Text
                  style={[
                    ParentStyle.Text_C_Xs,
                    ParentStyle.marginWrp_H,
                    {lineHeight: 20},
                  ]}>
                  set limits evry month to save money set limits evry month to
                  save money set limits
                </Text>
              </View>
              <View
                style={[
                  ParentStyle.center_cloumn,
                  ParentStyle.paddingWrp_H,
                  styles.inputParent,
                  ParentStyle.between_cloumn,
                ]}>
                <TextInput
                  style={[styles.input, ParentStyle.Text_W_M]}
                  onChangeText={num => {
                    console.log('values.total', values.index);
                    setnumVsl(num);
                  }}
                  value={numVsl}
                />
                <Pressable
                  style={styles.saveChange}
                  onPress={() => {
                    changeValue(values.total, values.index);
                  }}>
                  <Text style={[ParentStyle.Text_W_M, ParentStyle.text_center]}>
                    Change
                  </Text>
                </Pressable>
                <Text
                  style={[
                    ParentStyle.text_center,
                    ParentStyle.Text_W_M,
                    styles.textBlue,
                  ]}>
                  No Limit
                </Text>
              </View>
            </View>
          </Pressable>
        </Modal>
      </Pressable>
    </>
  );
};
export default LimitsList;
