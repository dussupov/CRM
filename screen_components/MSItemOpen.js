import { React, useState } from 'react'
import { Text, View, FlatList, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Header from '../navigation/header'

export default function MSItemOpen({ route }) {
    const { MSType, MSPlace, MSTarif, MSNextVision, MSKey } = route.params;
    const [MSTestimony, SetMSTestimony] = useState([
        {
            Data: '12.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '11.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '10.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '9.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '8.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '7.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '6.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '5.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '5.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '5.2021',
            Main: '2.0',
            Plus: '1.0'
        },
        {
            Data: '5.2021',
            Main: '2.0',
            Plus: '1.0'
        },

    ])

    return (
        <View>
            <Header
                titleName="История показаний"
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
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
                    {
                        MSTarif == "Однотарифный" ?
                            <View style={{ height: 40, backgroundColor: "#F9F9FA", marginHorizontal: 20, marginTop: 20, marginBottom: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '100%', alignItems: 'center' }}>
                                    <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500' }}>Период</Text>
                                    <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500' }}>Показания</Text>
                                </View>
                            </View>
                            :
                            <View style={{ height: 40, backgroundColor: "#F9F9FA", marginHorizontal: 20, marginTop: 20, marginBottom: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '100%', alignItems: 'center' }}>
                                    <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500' }}>Период</Text>
                                    <View>
                                        <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500' }}>Пик,</Text>
                                        <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500', textAlign: 'center' }}>Т1</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500' }}>Льготное,</Text>
                                        <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500', textAlign: 'center' }}>Т2</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500' }}>Полульготное,</Text>
                                        <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '500', textAlign: 'center' }}>Т3</Text>
                                    </View>
                                </View>
                            </View>
                    }
                    <ScrollView style={{
                    }}>
                        {
                            MSTarif == "Однотарифный" ?
                                <FlatList
                                    data={MSTestimony}
                                    style={{
                                        flexGrow: 1, height: "100%",
                                        marginBottom: 210,
                                        flex: 1,
                                    }}
                                    renderItem={({ item }) => (
                                        <View style={{ height: 40, borderBottomColor: "#F5F8FD", borderBottomWidth: 2, marginHorizontal: 20, marginTop: 10 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 50 }}>
                                                <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '400' }}>{item.Data}</Text>
                                                <View>
                                                    <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500', textAlign: 'right' }}>{item.Main}</Text>
                                                    <Text style={{ color: '#1EA133', fontSize: 11, fontWeight: '500' }}>+{item.Plus}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                />
                                :
                                <FlatList
                                    data={MSTestimony}
                                    style={{
                                        flexGrow: 1, height: "100%",
                                        marginBottom: 210,
                                        flex: 1,
                                    }}
                                    renderItem={({ item }) => (
                                        <TouchableWithoutFeedback>
                                            <View style={{ height: 40, borderBottomColor: "#F5F8FD", borderBottomWidth: 2, marginHorizontal: 20, marginTop: 10, flexGrow: 1 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                                                    <Text style={{ color: '#6B8795', fontSize: 13, fontWeight: '400' }}>{item.Data}</Text>
                                                    <View style={{ marginLeft: 25 }}>
                                                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500', textAlign: 'right' }}>{item.Main}</Text>
                                                        <Text style={{ color: '#1EA133', fontSize: 11, fontWeight: '500' }}>+{item.Plus}</Text>
                                                    </View>
                                                    <View style={{ marginLeft: 55 }}>
                                                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500', textAlign: 'right' }}>{item.Main}</Text>
                                                        <Text style={{ color: '#1EA133', fontSize: 11, fontWeight: '500' }}>+{item.Plus}</Text>
                                                    </View>
                                                    <View style={{ marginLeft: 75 }}>
                                                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500', textAlign: 'right' }}>{item.Main}</Text>
                                                        <Text style={{ color: '#1EA133', fontSize: 11, fontWeight: '500' }}>+{item.Plus}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )}
                                />

                        }
                    </ScrollView>
                </View>
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
});


