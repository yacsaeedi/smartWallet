import React, { useState } from 'react';
import { Text, View, FlatList, Modal, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from "./LimitsListStyle";
import ParentStyle from "../../../Styles"
import Data from "../../../Constants/Data";
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavBar from "../NavBar"
const LimitsList = (props) => {
    const { showDate, showModal } = props
    const [modalVisible, setModalVisible] = useState(true);
    const [values, setValues] = useState(
        {
            total: "",
            title: "",
            index: ""
        }
    )
    const [numVsl, setnumVsl] = useState(values.total)
    const changeValue = (item, id) => {
        let copylist = [...Data.limitsList];
        const finditem = copylist.findIndex((item) => {
            return item.index === id //index itemi k idsh barabare id k frestadam barat ro bargardon va briz to finditem

        });
        console.log("indexoItem:", finditem);
        if (finditem !== -1) { //yani age pyda kardi
            setValues((prv) => ({
                ...prv,
                total: numVsl
            }))
        }
    }
    return (
        <>
            <FlatList
                data={Data.limitsList}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable style={styles.box}
                            onPress={() => {
                                setValues({
                                    total: item.total,
                                    title: item.title,
                                    index: index
                                })
                                setModalVisible(true)
                            }}
                        >
                            <View style={styles.content}>
                                <View style={styles.iconboxheader} >
                                    <Icon name={item.icon} size={14} color="#8c8c8e" />
                                </View>
                                <Text style={[ParentStyle.Text_W_U]}>{item.title}</Text>
                                <Text style={ParentStyle.Text_C_l}>{item.price}/{values.total}
                                </Text>
                            </View>
                            {item.busy == "0%" ?
                                null
                                :
                                <View
                                    style={styles.busyBox}
                                >
                                    <View style={[styles.busyValue, { width: item.busy }]}></View>
                                </View>
                            }
                        </Pressable>
                    )
                }}
            />
            <Pressable
                style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    statusBarTranslucent={true}
                >
                    <Pressable
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}
                        style={styles.centeredView1}>
                        <View style={[styles.modalView]}>
                            <View style={styles.btnTop}>
                                <Icon />
                            </View>
                            <View style={styles.modalHeader}>
                                <NavBar textNav={values.title} change={"HomeNav"} showIcon={false} />
                                <Text style={[ParentStyle.Text_C_R, ParentStyle.marginWrp_H, { lineHeight: 20 }]}>set limits evry month to save money set limits evry month to save money set limits evry month to save money</Text>
                            </View>
                            <View style={[ParentStyle.center_cloumn, ParentStyle.paddingWrp_H, styles.inputParent, ParentStyle.between_cloumn]}>
                                <TextInput
                                    style={[styles.input, ParentStyle.Text_W_M]}
                                    onChangeText={(num) => {
                                        console.log("values.total", values.index);
                                        setnumVsl(num)
                                    }}
                                    value={numVsl}
                                />
                                <Pressable
                                    style={styles.saveChange}
                                    onPress={() => {
                                        changeValue(values.total, values.index)
                                    }}
                                >
                                    <Text style={[ParentStyle.Text_W_M, ParentStyle.text_center]}>Change</Text>
                                </Pressable>
                                <Text style={[ParentStyle.text_center, ParentStyle.Text_W_M, { alignSelf: 'center', paddingVertical: 10 }]}>No Limit</Text>
                            </View>
                        </View>
                    </Pressable>
                </Modal>

            </Pressable>

        </>
    )
}
export default LimitsList