import React from 'react'
import { Text, View, Modal, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import Header from '../navigation/header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function MSItemAdd({ route }) {
    const { MSType, MSPlace, MSTarif, MSNextVision, MSKey } = route.params;
    return (
        <View>
            <Header
                titleName='Подать показания'
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <ScrollView style={styles.container}>
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
                            borderRadius: 6,
                        }}>
                            <View style={{ marginLeft: 15, marginTop: 10, flexDirection: 'row' }}>
                                <View style={{ width: '60%' }}>
                                    <Text style={{ color: "#062A3D", fontWeight: '600', fontSize: 13, lineHeight: 19 }}>{MSType}</Text>
                                </View>
                                <View style={{ width: '40%' }}>
                                    <View style={{ marginRight: 10, }}>
                                        <View style={{}}>
                                            <Text style={{ textAlign: 'right', fontWeight: '400', color: '#062A3D', fontSize: 10, marginTop: 10, lineHeight: 10 }}>
                                                Следующая проверка
                                            </Text>
                                            <Text style={{ textAlign: 'right', fontWeight: '400', color: '#062A3D', fontSize: 10 }}>
                                                {MSNextVision}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400' }}>Тариф</Text>
                                    <Text style={{ color: '#062A3D', fontSize: 12, fontWeight: '500' }}>{MSTarif}</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400' }}>Номер прибора</Text>
                                    <Text style={{ color: '#062A3D', fontSize: 12, fontWeight: '500' }}>№ {MSKey}</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400' }}>Место установки</Text>
                                    <Text style={{ color: '#062A3D', fontSize: 12, fontWeight: '500' }}>{MSPlace}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        {
                            MSTarif == "Однотарифный"
                                ?
                                <KeyboardAwareScrollView>

                                    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                                        <View>
                                            <Text style={{ color: '#6B8795', }}>Показания прошлого месяца</Text>
                                            <View style={{
                                                height: 37, borderWidth: 1, borderColor: '#EFF1F5', borderRadius: 4,
                                                flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15,
                                                justifyContent: 'space-between', marginTop: 10,
                                            }}>
                                                <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500' }}>12345</Text>
                                                <Image
                                                    source={require('../assets/lock.png')}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 20,
                                                        height: 20,
                                                        marginRight: 5,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{ color: '#6B8795' }}>Текущие показания</Text>
                                            <TextInput
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: '#F5F8FD',
                                                    borderRadius: 6,
                                                    paddingHorizontal: 12,
                                                    height: 37,
                                                    marginTop: 10,
                                                }}
                                                placeholder='Введите данные...'

                                            />
                                        </View>
                                        <View style={{ marginTop: 30 }}>
                                            <Text style={{ color: '#6B8795' }}>Дата подачи показаний</Text>
                                            <TextInput
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: '#F5F8FD',
                                                    borderRadius: 6,
                                                    paddingHorizontal: 12,
                                                    height: 37,
                                                    marginTop: 10,
                                                }}
                                                placeholder='00.00.00'
                                            />
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.ProfileBtn}>
                                                <Text style={{
                                                    color: '#1EA133',
                                                    fontSize: 14,
                                                    fontWeight: '500'
                                                }}>Отправить</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </KeyboardAwareScrollView>
                                :
                                
                                <KeyboardAwareScrollView>

                                <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                                    <View>
                                        <Text style={{ color: '#6B8795', }}>Час пик - Т1</Text>
                                        <Text style={{ color: '#6B8795', }}>(Показания в прошлом месяце: 100 000)</Text>
                                        <TextInput
                                            style={{
                                                borderWidth: 1,
                                                borderColor: '#F5F8FD',
                                                borderRadius: 6,
                                                paddingHorizontal: 12,
                                                height: 37,
                                                marginTop: 10,
                                            }}
                                            placeholder='Введите данные...'

                                        />
                                    </View>
                                    <View style={{ marginTop: 30 }}>
                                        <Text style={{ color: '#6B8795', }}>Льготное время - Т2</Text>
                                        <Text style={{ color: '#6B8795', }}>(Показания в прошлом месяце: 100 000)</Text>
                                        <TextInput
                                            style={{
                                                borderWidth: 1,
                                                borderColor: '#F5F8FD',
                                                borderRadius: 6,
                                                paddingHorizontal: 12,
                                                height: 37,
                                                marginTop: 10,
                                            }}
                                            placeholder='Введите данные...'

                                        />
                                    </View>
                                    <View style={{ marginTop: 30 }}>
                                        <Text style={{ color: '#6B8795', }}>Полульготное время - Т3</Text>
                                        <Text style={{ color: '#6B8795', }}>(Показания в прошлом месяце: 100 000)</Text>
                                        <TextInput
                                            style={{
                                                borderWidth: 1,
                                                borderColor: '#F5F8FD',
                                                borderRadius: 6,
                                                paddingHorizontal: 12,
                                                height: 37,
                                                marginTop: 10,
                                            }}
                                            placeholder='Введите данные...'

                                        />
                                    </View>
                                    <View style={{ marginTop: 30 }}>
                                        <Text style={{ color: '#6B8795' }}>Дата подачи показаний</Text>
                                        <TextInput
                                            style={{
                                                borderWidth: 1,
                                                borderColor: '#F5F8FD',
                                                borderRadius: 6,
                                                paddingHorizontal: 12,
                                                height: 37,
                                                marginTop: 10,
                                            }}
                                            placeholder='00.00.00'
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.ProfileBtn}>
                                            <Text style={{
                                                color: '#1EA133',
                                                fontSize: 14,
                                                fontWeight: '500'
                                            }}>Отправить</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </KeyboardAwareScrollView>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    ProfileBtn: {
        height: 40,
        borderWidth: 1,
        borderColor: "#1EA133",
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
});
