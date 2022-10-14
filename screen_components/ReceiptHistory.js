import { React, useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ContextFilter } from '../contextFilter';

export default function ReceiptHistory() {
    const options = { year: 'numeric', month: 'long' };
    const navigation = useNavigation();
    const [ReceiptHistoryContent, SetReceiptHistoryContent] = useState([{
        id: 1,
        dataType: 'RHistory',
        theme: 'Горячая вода',
        status: 'Оплачена',
        money: '1680',
        dataFilter: '2021-02-26T17:25:45Z',
        createDate: (new Date('2021-02-26').toLocaleDateString('ru-RU', options)),
        closeDate: (new Date('2021-03-26').toLocaleDateString('ru-RU', options)),
    },
    {
        id: 2,
        dataType: 'RHistory',
        theme: 'Горячая вода',
        status: 'На проверке',
        money: '1680',
        dataFilter: '2021-02-26T17:25:45Z',
        createDate: (new Date('2021-02-26').toLocaleDateString('ru-RU', options)),
        closeDate: (new Date('2021-03-26').toLocaleDateString('ru-RU', options)),
    },
    {
        id: 3,
        dataType: 'RHistory',
        theme: 'Горячая вода',
        status: 'Оплачена',
        money: '1680',
        dataFilter: '2021-02-26T17:25:45Z',
        createDate: (new Date('2021-02-26').toLocaleDateString('ru-RU', options)),
        closeDate: (new Date('2021-03-26').toLocaleDateString('ru-RU', options)),
    },
    {
        id: 4,
        dataType: 'RHistory',
        theme: 'Горячая вода',
        status: 'На проверке',
        money: '1680',
        dataFilter: '2021-02-26T17:25:45Z',
        createDate: (new Date('2021-02-26').toLocaleDateString('ru-RU', options)),
        closeDate: (new Date('2021-03-26').toLocaleDateString('ru-RU', options)),
    },])

    const [ReceiptHistory, SetReceiptHistory] = useState(ReceiptHistoryContent);
    const { FilterItem, SetFilterItem } = useContext(ContextFilter);

    console.log(FilterItem)

    let CanGoBack = navigation.canGoBack();

    navigation.addListener('focus', () => {
        if (CanGoBack) {
            if (FilterItem) {
                for (let index = 0; index < FilterItem.length; index++) {
                    if (FilterItem[index].dataType == 'RHistory') {
                        SetReceiptHistory(FilterItem)
                    } else {
                        SetReceiptHistory(ReceiptHistoryContent)
                    }
                }
            } else {
                SetReceiptHistory(ReceiptHistoryContent)
            }
        } else {
            console.log('false')
        }
    })

    function ReceiptHistoryRender({ item }) {
        return (
            <View style={styles.RCHItem}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.RCHItemTitle}>Создан</Text>
                        <Text style={styles.RCHItemSubtitle}>{item.createDate}</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'right', ...styles.RCHItemTitle }}>Проведен</Text>
                        <Text style={styles.RCHItemSubtitle}>{item.closeDate}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.RCHItemTitle}>Назначение</Text>
                        <Text style={styles.RCHItemSubtitle}>{item.theme} {item.createDate}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.RCHItemTitle}>Сумма, ₽</Text>
                        <Text style={styles.RCHItemSubtitle}>{item.money}</Text>
                    </View>
                    <View>
                        {
                            item.status == 'Оплачена' ?
                                <Text style={styles.ReceiptTextStatusScc}>{item.status}</Text>
                                :
                                <Text style={styles.ReceiptTextStatusCom}>{item.status}</Text>
                        }
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{}} onPress={() => navigation.navigate('ReceiptHistoryFilter', {
                    ContRoom: ReceiptHistoryContent,
                })}>
                    <View style={{
                        flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginBottom: 15,
                    }}>
                        <Image
                            source={require('../assets/icons/Filter.png')}
                            resizeMode='contain'
                            style={{
                                width: 22,
                                height: 22,
                                marginRight: 14,
                            }}
                        />
                        <Text>
                            Фильтры
                        </Text>
                    </View>
                </TouchableOpacity>
                {FilterItem
                    ? <TouchableOpacity onPress={() => {
                        SetReceiptHistory(ReceiptHistoryContent);
                        SetFilterItem('');
                    }}>
                        <View style={{ marginLeft: 10, marginTop: 7, }}>
                            <Image
                                source={require('../assets/icons/closeBTN.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    : null}
            </View>
            <View>
                <FlatList
                    data={ReceiptHistory}
                    renderItem={({ item }) => (
                        <ReceiptHistoryRender item={item} />
                    )}
                    style={{ marginTop: 20 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    RCHItem: {
        height: 180,
        paddingHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.05,
        shadowRadius: 11.00,
        elevation: 24,


    },
    RCHItemTitle: {
        color: '#6B8795',
        fontWeight: '400',
        fontSize: 12,
    },
    RCHItemSubtitle: {
        color: '#062A3D',
        fontWeight: '600',
        fontSize: 13,
    },
    ReceiptTextStatusScc: {
        backgroundColor: '#B8EEC1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#1EA133",
    },
    ReceiptTextStatusFal: {
        backgroundColor: '#FDD6DB',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#EB5757",
    },
    ReceiptTextStatusCom: {
        backgroundColor: '#DED6FD',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#7B61FF",
    }
})
