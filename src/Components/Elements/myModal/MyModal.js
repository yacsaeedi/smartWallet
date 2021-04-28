import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  Keyboard
} from 'react-native';

import styles from './MyModalStyle';
import ParentStyle from '../../../Styles';
import { Data } from '../../../Constants';
import { UserContext } from "../../../App/Navigator"

const MyModal = ({ showModal, setModalVisible, values, setValues, setList }) => {

  const [context, setContext, state, setstate, aryLimit, setAryLimit] = useContext(UserContext);

  const changeValue = (id, num) => {
    let copylist = [...Data.limitsList];
    const finditem = copylist.findIndex(item => {
      return item.id === id;
    });
    if (finditem !== -1) {
      copylist[finditem].total = num;
      setValues((prv) => ({
        ...prv,
        total: copylist[finditem].total
      }))
      setAryLimit(copylist);
    }
  };


  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);
  const [positionmodal, setpositionmodal] = useState(-20)
  const _keyboardDidShow = () => setpositionmodal(230)
  const _keyboardDidHide = () => setpositionmodal(-20)



  return (
    <Pressable style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        statusBarTranslucent={true}>
        <Pressable
          onPress={() => {
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
                value={values.total}
                onSubmitEditing={Keyboard.dismiss}
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
  );
};
export default MyModal;
