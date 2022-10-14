import { React, useContext, useState, useRef } from "react"

import { Text, View, TouchableOpacity, StyleSheet, TextInput, Modal } from "react-native"
import Header from "../navigation/header"
import { Context } from '../context'
import { useNavigation } from '@react-navigation/native';

import { AirbnbRating } from 'react-native-ratings';
import BottomSheet from "react-native-gesture-bottom-sheet";


export default function ContRoomItemOpen({ route }) {
    const { CRStatus, CRTitle, CRData, CRText, CRStar } = route.params;
    const CRRText = 'заявка №' + CRText

    const bottomSheet = useRef();
    const [isModalVisible, setModalVisible] = useState(false);
    const { ContRoomItems, ContRoomSetState } = useContext(Context)

    const navigation = useNavigation();

    const deleteHandler = (CRText) => {
        setModalVisible(!isModalVisible);

        ContRoomSetState((list) => {
            return list.filter(ContRoomItems => ContRoomItems.key != CRText)
        })
        bottomSheet.current.close();
        navigation.goBack();
    }

    const ratingCompleted = (rating) => {
        ContRoomSetState(prevState =>
            prevState.map(item =>
                item.key === CRText
                    ? { ...item, star: rating }
                    : item

            )
        )
        setModalVisible(!isModalVisible);
        bottomSheet.current.close();
        navigation.goBack();
    }
    return (
        <View>
            <Header
                titleName={CRRText}
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.bgcontainer}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ paddingTop: 15, paddingLeft: 15 }}>
                                <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400' }}>Создано</Text>
                                <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '600' }}>26.05.2021  13:00</Text>
                            </View>
                            <View style={{ paddingTop: 15, paddingLeft: 15, paddingBottom: 25, width: '90%' }}>
                                <Text>Статус</Text>
                                {CRStatus == 'В работе'
                                    ? <Text style={styles.CRTextStatusScc}>{CRStatus}</Text>
                                    : false
                                }
                                {CRStatus == 'Выполнена'
                                    ? <Text style={styles.CRTextStatusCom}>{CRStatus}</Text>
                                    : false
                                }
                                {CRStatus == 'Новый'
                                    ? <Text style={styles.CRTextStatusNew}>{CRStatus}</Text>
                                    : false
                                }
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ paddingTop: 15, paddingRight: 15, marginBottom: 35 }}>
                                <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', textAlign: "right" }}>Срок исполнения</Text>
                                <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '600', textAlign: "right" }}>Не указан</Text>
                            </View>
                            <View>
                                {CRStatus == 'Выполнена' &&
                                    CRStar == 0
                                    ?
                                    <TouchableOpacity style={{ marginBottom: 30, paddingRight: 15, }} onPress={() => bottomSheet.current.show()}>
                                        <Text style={{ fontSize: 13, fontWeight: '500', color: '#1EA133' }}>Оценить результат</Text>
                                    </TouchableOpacity>
                                    : false
                                }
                                {CRStatus == 'Выполнена' &&
                                    CRStar > 0
                                    ? <View style={{ marginTop: -40 }}>
                                        <AirbnbRating
                                            count={5}
                                            reviews={''}
                                            defaultRating={CRStar}
                                            size={20}
                                            onFinishRating={ratingCompleted}
                                            isDisabled
                                        />
                                    </View>
                                    : false
                                }
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            {CRStatus == 'Новый'
                                ? <TouchableOpacity style={styles.CRCancelBtn} onPress={() => bottomSheet.current.show()}>
                                    <Text style={styles.CRCancelText}>Отменить заявку</Text>
                                </TouchableOpacity>
                                : false
                            }
                            {CRStatus == 'Выполнена'
                                ?
                                <View style={{ paddingHorizontal: 20 }}>
                                    <View>
                                        <Text style={{ fontWeight: '600', fontSize: 12, color: '#062A3D', marginBottom: 10, marginLeft: 16 }}>Текст завяки</Text>
                                        <TextInput editable={false} selectTextOnFocus={false} defaultValue="Потек кран"
                                            style={{
                                                fontWeight: '400', fontSize: 13, color: '#062A3D', marginBottom: 10, backgroundColor: '#F9F9FA', height: 39, borderRadius: 4,
                                                paddingLeft: 16,
                                            }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: '600', fontSize: 12, color: '#062A3D', marginBottom: 10, marginLeft: 16, marginTop: 20, }}>Исполнитель</Text>
                                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginLeft: 16, marginBottom: 10 }}>ФИО</Text>
                                        <TextInput editable={false} selectTextOnFocus={false} defaultValue="Хрушкин Т.Б. (Инженер)"
                                            style={{
                                                fontWeight: '600', fontSize: 13, color: '#062A3D', marginBottom: 10, backgroundColor: '#F9F9FA', height: 39, borderRadius: 4,
                                                paddingLeft: 16,
                                            }} />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginLeft: 16, marginBottom: 10 }}>Контрактный телефон</Text>
                                        <TextInput editable={false} selectTextOnFocus={false} defaultValue="+7 (900) 762-98-09"
                                            style={{
                                                fontWeight: '400', fontSize: 13, color: '#062A3D', marginBottom: 10, backgroundColor: '#F9F9FA', height: 39, borderRadius: 4,
                                                paddingLeft: 16,
                                            }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: '600', fontSize: 12, color: '#062A3D', marginBottom: 10, marginLeft: 16, marginTop: 20, }}>Результат работы</Text>
                                        <TextInput editable={false} selectTextOnFocus={false} defaultValue="Все починили"
                                            style={{
                                                fontWeight: '400', fontSize: 13, color: '#062A3D', marginBottom: 10, backgroundColor: '#F9F9FA', height: 39, borderRadius: 4,
                                                paddingLeft: 16,
                                            }}
                                        />
                                    </View>
                                </View>
                                : false
                            }
                        </View>
                    </View>
                    <BottomSheet hasDraggableIcon ref={bottomSheet} height={200}>
                        {CRStatus == 'Новый'
                            ? 
                            <View>
                                <View>
                                    <Text style={{alignSelf:'center', paddingTop:20, marginBottom:50, fontSize:13, fontWeight:'600'}}>Отменить заявку?</Text>
                                </View>
                                <TouchableOpacity>
                                    <TouchableOpacity style={styles.CRCancelBtnOpen} onPress={() => deleteHandler(CRText)}>
                                        <Text style={styles.CRCancelTextOpen}>Да</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            : false
                        }

                        {CRStatus == 'Выполнена'
                            ?
                            <View>
                                <View>
                                    <Text style={{alignSelf:'center', color:'#062A3D', fontSize:13, fontWeight:'600', paddingTop:20}}>
                                        Оцените результат работы по заявке
                                    </Text>
                                </View>
                                <View>
                                    <AirbnbRating
                                        count={5}
                                        reviews={''}
                                        defaultRating={1}
                                        size={40}
                                        onFinishRating={ratingCompleted}
                                    />
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        borderBottomColor: '#F5F8FD',
        borderBottomWidth: 2
    },
    CRTextStatusScc: {
        backgroundColor: '#B8EEC1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#1EA133",
        textAlign: 'center',
    },
    CRTextStatusCom: {
        backgroundColor: '#C6D8E1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#6B8795",
        textAlign: 'center'
    },
    CRTextStatusNew: {
        backgroundColor: '#DED6FD',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#7B61FF",
        textAlign: 'center'
    },
    bgcontainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    CRCancelBtn: {
        height: 38,
        borderWidth: 1,
        borderColor: '#1EA133',
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
    },
    CRCancelBtnOpen: {
        height: 38,
        borderWidth: 1,
        borderColor: '#1EA133',
        backgroundColor: '#1EA133',
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4
    },
    CRCancelText: {
        textAlign: 'center',
        color: '#1EA133',
        fontSize: 14,
        fontWeight: '500',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        width: '100%',
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
        position: 'absolute',
        zIndex: 11,
        bottom: 60,
        width: '90%',
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
    },
    headerText: {
        color: '#062A3D',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 40,
    },
    CRCancelTextOpen: {
        color: "white",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
    }
})