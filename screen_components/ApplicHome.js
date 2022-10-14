import * as React from 'react';
import { useState, useRef } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Button, ScrollView, Modal } from 'react-native'
import { useContext } from 'react'
import Header from '../navigation/header'
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Context } from '../context'

export default function ApplicHome() {
    const bottomSheet = useRef()
    const [isModalVisible, setModalVisible] = useState(false);

    const { ContRoomSetState } = useContext(Context);

    const [applText, applTextSetState] = useState('')

    const [checkOK, SetCheckOK] = useState(false)

    const onChange = (text) => {
        applTextSetState(text);
    }

    const [NumberApplication, NumberApplicationSetState] = useState('')

    const isChanged = () => {
        const min = 1;
        const max = 100000;
        const rand = min + Math.random() * (max - min);
        const randDone = Math.round(rand).toString();
        if (!applText.trim()) {
            bottomSheet.current.show();
            return false;
        } else {
            ContRoomSetState((list) => {
                return [
                    {
                        key: randDone,
                        data: "12 ноября 2021",
                        status: 'Новый',
                        title: applText,
                        star: 0
                    },
                    ...list
                ]
            })
            NumberApplicationSetState(randDone);
            SetCheckOK(true);
            bottomSheet.current.show();
        }
    }

    return (
        <View>
            <View>
                <Header
                    titleName="Новая заявка"
                />
                <View style={{ backgroundColor: '#148225', height: '100%' }}>
                    <ScrollView style={styles.container}>
                        <View style={styles.ApplicHomeContainer}>
                            <View>
                                <Text style={{ color: '#6B8795', marginBottom: 10, }}>Текст заявки</Text>
                            </View>
                            <View style={styles.textAreaContainer} >
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Например : Потек кран"
                                    placeholderTextColor="#C6D8E1"
                                    numberOfLines={10}
                                    multiline={true}
                                    onChangeText={onChange}
                                />
                            </View>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", marginTop: 40 }}>
                                    <Text style={{ color: '#6B8795', fontSize: 14, fontWeight: '400', }}>Добавить документы</Text>
                                    <Image
                                        source={require('../assets/icons/AddApplic.png')}
                                        resizeMode='contain'
                                        style={{ height: 37, width: 37, marginLeft: 20, }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 40 }}>
                                <TouchableOpacity onPress={isChanged}>
                                    <View style={styles.AHSendBtn}>
                                        <Text style={styles.AHSendBtnText}>
                                            Отправить
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <BottomSheet hasDraggableIcon ref={bottomSheet} height={200}>
                        {!checkOK
                            ?
                            <View>
                                <View>
                                    <Text style={{ alignSelf: 'center', paddingTop: 20, marginBottom: 50, fontSize: 13, fontWeight: '600' }}>Ошибка</Text>
                                </View>
                                <TouchableOpacity>
                                    <TouchableOpacity style={styles.addButton} onPress={() => bottomSheet.current.close()}>
                                        <Text style={styles.addButtonText}>Закрыть</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            : false
                        }

                        {checkOK
                            ?
                            <View>
                                <View>
                                    <Text style={{ alignSelf: 'center', color: '#062A3D', fontSize: 13, fontWeight: '600', paddingTop: 20, marginBottom: 50 }}>
                                        Ваша заявка №{NumberApplication} принята
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.addButton}
                                        onPress={() => {
                                            applTextSetState('');
                                            NumberApplicationSetState('');
                                            bottomSheet.current.close();
                                        }}>
                                        <Text style={styles.addButtonText}>Да</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : false
                        }
                    </BottomSheet>
                </View>
            </View>
        </View>

    )
}

{/* <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    onRequestClose={() => {
        // this.closeButtonFunction()
    }}>
    {checkOK == false
        ?
        <View style={{ width: '100%', height: '100%' }}>
            <View
                style={{
                    height: '25%',
                    marginTop: 'auto',
                }}>
                <View style={styles.footer}>
                    <Text style={styles.headerText}>Ошибка</Text>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        setModalVisible(!isModalVisible);
                    }}>
                    <Text style={styles.addButtonText}>Закрыть</Text>
                </TouchableOpacity>
            </View>
        </View>
        :
        <View style={{ width: '100%', height: '100%' }}>
            <View
                style={{
                    height: '25%',
                    marginTop: 'auto',
                }}>
                <View style={styles.footer}>
                    <Text style={styles.headerText}>Ваша заявка №{NumberApplication} принята</Text>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {

                    }}>
                    <Text style={styles.addButtonText}>Да</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
</Modal> */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'relative',
        zIndex: 1
    },
    textAreaContainer: {
        borderColor: "#EFF1F5",
        borderWidth: 1,
        padding: 5,
        position: 'relative',
        zIndex: 1
    },
    textArea: {
        height: 82,
        justifyContent: "flex-start",
        position: 'relative',
        zIndex: 1
    },
    ApplicHomeContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        position: 'relative',
        zIndex: 1
    },
    AHSendBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderColor: '#1EA133',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        position: 'relative',
        zIndex: 1
    },
    AHSendBtnText: {
        color: '#1EA133',
        fontSize: 14,
        fontWeight: '500',
        position: 'relative',
        zIndex: 1
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 20,
        backgroundColor: '#ddd',
        borderTopWidth: 2,
        borderTopColor: '#ddd',
    },
    addButton: {
        backgroundColor: 'green',
        width: '90%',
        height: 38,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        marginHorizontal: 15,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    headerText: {
        color: '#062A3D',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 40,
    }
})
