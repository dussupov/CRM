import { React, useState, useContext } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ContextFilter } from '../contextFilter';




export default function ReceiptContent() {

    const options = { year: 'numeric', month: 'long' };
    const navigation = useNavigation();


    const [ReceiptItemArray, SetReceiptItem] = useState([
        {   
            dataType:'RContent',
            receiptData: (new Date('2021-02-26').toLocaleDateString('ru-RU', options)),
            dataFilter: '2021-02-26T17:25:45Z',
            receiptStatus: 'Оплачена',
            receiptSource: 'Холодная вода',
        },
        {
            dataType:'RContent',
            receiptData: (new Date('2021-03-26').toLocaleDateString('ru-RU', options)),
            dataFilter: '2021-03-26T17:25:45Z',
            receiptStatus: 'На проверке',
            receiptSource: 'Горячая вода',
        },
        {
            dataType:'RContent',
            receiptData: (new Date('2020-08-26').toLocaleDateString('ru-RU', options)),
            dataFilter: '2020-08-26T17:25:45Z',
            receiptStatus: 'Не оплачена',
            receiptSource: 'Водоотведение',
        },
        {
            dataType:'RContent',
            receiptData: (new Date('2021-09-26').toLocaleDateString('ru-RU', options)),
            dataFilter: '2021-09-26T17:25:45Z',
            receiptStatus: 'Оплачена',
            receiptSource: 'Водоотведение',
        },
        {
            dataType:'RContent',
            receiptData: (new Date('2019-02-26').toLocaleDateString('ru-RU', options)),
            dataFilter: '2019-02-26T17:25:45Z',
            receiptStatus: 'Не оплачена',
            receiptSource: 'Горячая вода',
        },
        {
            dataType:'RContent',
            receiptData: (new Date('2020-01-26').toLocaleDateString('ru-RU', options)),
            dataFilter: '2020-01-26T17:25:45Z',
            receiptStatus: 'На проверке',
            receiptSource: 'Холодная вода',
        },

    ])

    const [ReceiptHistory, SetReceiptHistory] = useState(ReceiptItemArray);
    const { FilterItem, SetFilterItem } = useContext(ContextFilter);

    let CanGoBack = navigation.canGoBack();

    navigation.addListener('focus', () => {
        if (CanGoBack) {
            if (FilterItem) {
                for (let index = 0; index < FilterItem.length; index++) {
                    if (FilterItem[index].dataType == 'RContent') {
                        SetReceiptHistory(FilterItem)
                    } else {
                        SetReceiptHistory(ReceiptItemArray)
                    }
                }
            } else {
                SetReceiptHistory(ReceiptItemArray)
            }
        } else {
            console.log('false')
        }
    })

    const [ReceiptItem, ReceiptItemSetState] = useState(ReceiptItemArray);

    function VUSTimeOpen({ item, index }) {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ReceiptOpenPage', {
                    RData: item.receiptData,
                    RStatus: item.receiptStatus,
                    RSource: item.receiptSource,
                })}>

                    <View style={styles.ReceiptTextBlock}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.ReceiptTextTitle}>{item.receiptData}</Text>
                            <Text style={styles.ReceiptTextSubitle}>{item.receiptSource}</Text>
                        </View>
                        <View>
                            {item.receiptStatus == 'Оплачена'
                                ? <Text style={styles.ReceiptTextStatusScc}>{item.receiptStatus}</Text>
                                : false
                            }
                            {item.receiptStatus == 'Не оплачена'
                                ? <Text style={styles.ReceiptTextStatusFal}>{item.receiptStatus}</Text>
                                : false
                            }
                            {item.receiptStatus == 'На проверке'
                                ? <Text style={styles.ReceiptTextStatusCom}>{item.receiptStatus}</Text>
                                : false
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate('ReceiptContentFilter', {
                    ContRoom: ReceiptItemArray,
                })}>
                    <View style={{
                        flexDirection: 'row', marginTop: 10, marginBottom: 15,
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
                        SetReceiptHistory(ReceiptItemArray);
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
                        <VUSTimeOpen item={item} />
                    )}
                    style={{ marginTop: 20 }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    ReceiptTextBlock: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.00,
        elevation: 24,
        marginHorizontal: 1,
        marginVertical: 5,
        paddingHorizontal: 25,
    },
    ReceiptTextTitle: {
        fontWeight: '600',
        fontSize: 13,
    },
    ReceiptTextSubitle: {
        paddingTop: 3,
        fontWeight: '400',
        fontSize: 11,
        color: '#6B8795',
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