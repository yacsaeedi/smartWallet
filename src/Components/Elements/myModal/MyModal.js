import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  Keyboard,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import _ from 'lodash';

import styles from './MyModalStyle';
import ParentStyle from '../../../Styles';
import { UserContext } from "../../../App/Navigator";

const MyModal = ({ showModal, setModalVisible, values, setValues, setList }) => {

  const [context, setContext, state, setstate, aryLimit, setAryLimit] = useContext(UserContext);
  const [sum, setSum] = useState({
    value: "",
    list : []
  })
  const [positionmodal, setpositionmodal] = useState(-20)
  
  const changeValue = (id, num) => {
    let copylist = _.cloneDeep(aryLimit);
    const finditem = copylist.findIndex(item => {
      return item.id === id;
    });
    if (finditem !== -1) {
      copylist[finditem].total = num;
      setSum({
        value : copylist[finditem].total,
        list : copylist
      })
    }
  };
 const saveValue = ()=>{
      setValues((prv) => ({
        ...prv,
        total: sum.value
      }))
      setAryLimit(sum.list);
      setModalVisible(!showModal);
 }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);
  const _keyboardDidShow = (e) => {
    const { height} = e.endCoordinates //get height keyBoard
    setpositionmodal(height - 20)
  }
  const _keyboardDidHide = () => setpositionmodal(-20)

  useFocusEffect(
    React.useCallback(() => {
     showModal ?
     setSum((prv)=>({
      ...prv,
      value : values.total,
    }))
    : null ;
    },[showModal,values])
  );

  return (
    <Pressable style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        statusBarTranslucent={true}>
        <Pressable
          onPress={() => {
            setValues((prv) => ({
              ...prv,
              total: values.total
            }))
            setSum(()=>({
              value : values.total,
              list : aryLimit
            }))
            setModalVisible(!showModal);
          }}
          style={styles.centeredView1}>
          <View style={[styles.modalView, { bottom: positionmodal }]}>
            <View style={styles.btnTop}></View>
            <View style={styles.modalHeader}>
              <Text style={[ParentStyle.Text_W_xL, ParentStyle.marginWrp_H]}>
                {values.title}
              </Text>
              <Text
                style={[
                  ParentStyle.Text_C_Xs,
                  ParentStyle.marginWrp_H,
                  { lineHeight: 20 },
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
                  changeValue(values.index, num)
                }}
                value={sum.value}
                onSubmitEditing={Keyboard.dismiss}
              />
              <Pressable
                style={styles.saveChange}
                onPress={() => {
                  saveValue()
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
  );
};
export default MyModal;
