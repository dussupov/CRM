import {React, useState, useRef} from "react"

import { Text, View, TouchableOpacity, StyleSheet, Image, Modal} from "react-native"
import { useNavigation } from '@react-navigation/native';

import { Context } from "../context";
import { useContext } from "react";

import { AirbnbRating } from "react-native-ratings";

import BottomSheet from "react-native-gesture-bottom-sheet";

export default function ContRoomItem({ el, onChange, refreshToken }) {

    const bottomSheet = useRef();
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const { ContRoomItems, ContRoomSetState } = useContext(Context)

    const ratingCompleted = (rating) => {
        ContRoomSetState(prevState =>
            prevState.map(item =>
                item.key === el.key
                    ? { ...item, star: rating }
                    : item

            )
        )
        setModalVisible(!isModalVisible);
        onChange(!isModalVisible)
        refreshToken(true);
        bottomSheet.current.close();
    }

    return (
        <View style={{
            marginVertical: 10, marginHorizontal: 20,backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.05,
            shadowRadius: 11.00,
            elevation: 24, minHeight: 93
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('ContRoomItemOpen', {
                CRText: el.key,
                CRData: el.data,
                CRStatus: el.status,
                CRTitle: el.title,
                CRStar : el.star
            })}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={styles.container}>
                            <View>
                                <Text style={{ fontSize: 13, fontWeight: '600', color: '#062A3D' }}>{el.key}</Text>
                                <Text style={{ fontSize: 11, fontWeight: '400', color: '#6B8795' }}>{el.data}</Text>
                            </View>
                        </View>
                        <View style={{ paddingRight: 15, paddingTop: 15, }}>
                            {el.status == 'В работе'
                                ? <Text style={styles.CRTextStatusScc}>{el.status}</Text>
                                : false
                            }
                            {el.status == 'Выполнена'
                                ? <Text style={styles.CRTextStatusCom}>{el.status}</Text>
                                : false
                            }
                            {el.status == 'Новый'
                                ? <Text style={styles.CRTextStatusNew}>{el.status}</Text>
                                : false
                            }
                        </View>
                    </View>
                    <View style={{ paddingBottom: 15 }}>
                        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{el.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {el.status == 'Выполнена'
                    ?
                    <View style={styles.bottomTabs}>
                        <View style={{ width: '45%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                            {
                                el.status == 'Выполнена' &&
                                    el.star == 0
                                    ?
                                    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => bottomSheet.current.show()}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#1EA133' }}>Оценить результат</Text>
                                    </TouchableOpacity>
                                    : false
                            }
                            {el.status == 'Выполнена' &&
                                el.star > 0
                                ? <View style={{ marginTop: -40 }}>
                                    <AirbnbRating
                                        count={5}
                                        reviews={''}
                                        defaultRating={el.star}
                                        size={20}
                                        onFinishRating={ratingCompleted}
                                        isDisabled
                                    />
                                </View>
                                : false
                            }
                        </View>
                        <View style={{ width: '55%', height: '100%', flexDirection:'row' , justifyContent:'center', alignItems:'center'}}>
                            <View>
                                <Image
                                    source={require('../assets/icons/success.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 15,
                                        height: 15,
                                        marginRight:10,
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, fontWeight: '600' }}>27.08.2021 в 12:09</Text>
                            </View>
                        </View>
                    </View>
                    : false
                }
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={200}>
                <View>
                    <View>
                        <Text style={{ alignSelf: 'center', color: '#062A3D', fontSize: 13, fontWeight: '600', paddingTop: 20 }}>
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
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    CRTextStatusScc: {
        backgroundColor: '#B8EEC1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#1EA133",
    },
    CRTextStatusCom: {
        backgroundColor: '#C6D8E1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#6B8795",
    },
    CRTextStatusNew: {
        backgroundColor: '#DED6FD',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#7B61FF",
    },
    title: {
        overflow: 'hidden',
        paddingLeft: 15,
    },
    bottomTabs: {
        height: 46,
        width: '100%',
        backgroundColor: '#F9F9FA',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginBottom: 10,
        flexDirection: 'row',
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