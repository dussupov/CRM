import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, Modal } from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function MSItem({ el }) {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MSItemOpen', {
                MSType: el.typeMS,
                MSPlace: el.place,
                MSTarif: el.tarif,
                MSNextVision: el.nextVision,
                MSKey: el.key
            })}>
                <View style={{ paddingBottom: 10 }}>
                    <View style={{
                        marginHorizontal: 20, minHeight: 135, marginTop: 11,
                        backgroundColor: 'white',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 10.41,
                        elevation: 2,
                        borderRadius:6,
                    }}>
                        <View style={{ marginLeft: 15, marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ width: '60%' }}>
                                <Text style={{ color: "#062A3D", fontWeight: '600', fontSize:13, lineHeight: 19 }}>{el.typeMS}</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <View style={{ marginRight: 10, }}>
                                    {
                                        el.lastPocStatus == true
                                            ?
                                            <View style={{}}>
                                                <Text style={{ textAlign: 'right', fontWeight: '400', color: '#062A3D', fontSize:10, marginTop: 10, lineHeight: 10 }}>
                                                    Следующая проверка
                                                </Text>
                                                <Text style={{ textAlign: 'right', fontWeight: '400', color: '#062A3D', fontSize:10 }}>
                                                    {el.nextVision}
                                                </Text>
                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 15 }}>
                                                <Image
                                                    source={require('../assets/warning.png')}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        marginRight: 5,
                                                        marginTop: 5
                                                    }}
                                                />
                                                <Text style={{ color: '#EB5757', fontSize:10, width: '100%', marginTop: 5 }}>Требуется проверка</Text>
                                            </View>
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#6B8795', fontSize:12, fontWeight: '400' }}>Тариф</Text>
                                <Text style={{ color: '#062A3D', fontSize:12, fontWeight: '500' }}>{el.tarif}</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#6B8795', fontSize:12, fontWeight: '400' }}>Номер прибора</Text>
                                <Text style={{ color: '#062A3D', fontSize:12, fontWeight: '500' }}>№ {el.key}</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#6B8795', fontSize:12, fontWeight: '400' }}>Место установки</Text>
                                <Text style={{ color: '#062A3D', fontSize:12, fontWeight: '500' }}>{el.place}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ minHeight: 37, backgroundColor: '#F9F9FA', marginHorizontal: 20, height: 40 }}>
                        {
                            el.lastPocStatus == true
                                ?
                                <View>
                                    <View style={{ marginHorizontal: 15 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                                            <View>
                                                <Text style={{ color: '#6B8795', fontSize:13, fontWeight: '400', marginTop: 5 }}>Последние показания</Text>
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={() => navigation.navigate('MSItemAdd', {
                                                    MSType: el.typeMS,
                                                    MSPlace: el.place,
                                                    MSTarif: el.tarif,
                                                    MSNextVision: el.nextVision,
                                                    MSKey: el.key
                                                })}>
                                                    <Text style={{ color: '#1EA133', fontSize:13, fontWeight: "600" }}>Подать показания</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={{ marginHorizontal: 15, height: '100%', justifyContent: 'center' }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('MSItemAdd', {
                                            MSType: el.typeMS,
                                            MSPlace: el.place,
                                            MSTarif: el.tarif,
                                            MSNextVision: el.nextVision,
                                            MSKey: el.key
                                        })}>
                                            <Text style={{ color: '#1EA133', fontSize:13, fontWeight: "600", }}>Подать показания</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        }
                    </View>
                    {
                        el.lastPocStatus == true
                            ?
                            <View style={{ backgroundColor: '#F9F9FA', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, height: 42, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize:11 }}>Пик, Т1</Text>
                                    <Text style={{ color: '#062A3D', fontWeight: '600' }}>{el.lastPocT1}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize:11 }}>Льготное, Т2</Text>
                                    <Text style={{ color: '#062A3D', fontWeight: '600' }}>{el.lastPocT2}</Text>
                                </View>
                                <View style={{ marginRight: 20 }}>
                                    <Text style={{ fontSize:11 }}>Полульготное, Т3</Text>
                                    <Text style={{ color: '#062A3D', fontWeight: '600' }}>{el.lastPocT3}</Text>
                                </View>
                            </View>
                            : false
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}
