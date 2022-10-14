import { React, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import Header from '../navigation/header';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";



function Notifications() {
    const navigation = useNavigation();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [firstDateISO, setFirstDateISO] = useState('');
    const [secondDateISO, setSecondDateISO] = useState('')
    const [firstDate, setFirstDate] = useState('00.00.00');
    const [secondDate, setSecondDate] = useState('00.00.00');
    const [useFilter, setUseFilter] = useState(false);
    const [notfItem, somthingsetState] = useState([{
        id: 1,
        NotfName: 'Собрание собвственников',
        NotfTitle: `Всем привет.\n\nВажно!!!\n\nЗавтра (24 июня) в 8.00 по Москве мы остановим модуль Корреспонденция для его масштабного обновления:\n\n1) будет реализован перенос модуля и всех данных на отдельный микросервис (будет работать в разы быстрее и не нужно будет обновлять страницу (так сейчас работает Квартплата, Телефония и т.д.)\n\n2) модуль не будет работать около часа, потом будет работать в штатном режиме\n\n3) все файлы, которые вы загрузили ранее будут постепенно по мере переноса становиться доступными, так что без паники.\n\nКроме этого, залили новый пакет обновлений, которые коснулись:`,
        NotfData: (new Date('2019-01-26').toLocaleDateString('ru-RU', options)),
        dataFilter: '2019-01-26T17:25:45Z',
    },
    {
        id: 2,
        NotfName: 'Собрание собвственников',
        NotfTitle: `Всем привет.\n\nВажно!!!\n\nЗавтра (24 июня) в 8.00 по Москве мы остановим модуль Корреспонденция для его масштабного обновления:\n\n1) будет реализован перенос модуля и всех данных на отдельный микросервис (будет работать в разы быстрее и не нужно будет обновлять страницу (так сейчас работает Квартплата, Телефония и т.д.)\n\n2) модуль не будет работать около часа, потом будет работать в штатном режиме\n\n3) все файлы, которые вы загрузили ранее будут постепенно по мере переноса становиться доступными, так что без паники.\n\nКроме этого, залили новый пакет обновлений, которые коснулись:`,
        NotfData: (new Date('2020-01-26').toLocaleDateString('ru-RU', options)),
        dataFilter: '2020-01-26T17:25:45Z',
    }, {
        id: 3,
        NotfName: 'Собрание собвственников',
        NotfTitle: `Всем привет.\n\nВажно!!!\n\nЗавтра (24 июня) в 8.00 по Москве мы остановим модуль Корреспонденция для его масштабного обновления:\n\n1) будет реализован перенос модуля и всех данных на отдельный микросервис (будет работать в разы быстрее и не нужно будет обновлять страницу (так сейчас работает Квартплата, Телефония и т.д.)\n\n2) модуль не будет работать около часа, потом будет работать в штатном режиме\n\n3) все файлы, которые вы загрузили ранее будут постепенно по мере переноса становиться доступными, так что без паники.\n\nКроме этого, залили новый пакет обновлений, которые коснулись:`,
        NotfData: (new Date('2021-01-26').toLocaleDateString('ru-RU', options)),
        dataFilter: '2021-01-26T17:25:45Z',
    }]);
    const [FilterItem, SetFilterItem] = useState(notfItem);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setFirstDate(date.toLocaleDateString('ru-RU', options));
        setFirstDateISO(date.toISOString())
        hideDatePicker();
    };


    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };

    const handleConfirm2 = (date2) => {
        setSecondDate(date2.toLocaleDateString('ru-RU', options));
        setSecondDateISO(date2.toISOString())
        hideDatePicker2();
        dateSort();
    };

    const dateSort = () => {
        let result = notfItem.filter(element => {
            let data = new Date(element.dataFilter);
            let dateISO = data.toISOString()
            return dateISO >= firstDateISO && dateISO <= secondDateISO;
        });
        SetFilterItem(result);
        setUseFilter(true)
    }

    function NotifItemRender({ item }) {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('notifText', {
                    NotifName: item.NotfName,
                    NotifData: item.NotfData,
                    NotifTitle: item.NotfTitle
                })}>
                    <View style={styles.NotifTextBlock}>
                        <Text style={styles.NotifTextTitle}>{item.NotfName}</Text>
                        <Text style={styles.NotifTextSubitle}>{item.NotfData}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <Header
                titleName="Уведомления"
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.myUKFull}>
                    <View style={styles.NotificationsContainer}>
                        <View>
                            <Text style={styles.filterText}>Дата Создания</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.filterInput}>
                                    <TouchableOpacity onPress={showDatePicker}>
                                        <Text style={{ color: '#C6D8E1' }}>{firstDate}</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: '#C6D8E1' }}> - </Text>
                                    <TouchableOpacity onPress={showDatePicker2}>
                                        <Text style={{ color: '#C6D8E1' }}>{secondDate}</Text>
                                    </TouchableOpacity>
                                </View>
                                {useFilter
                                    ? <TouchableOpacity onPress={() => {
                                        SetFilterItem(notfItem);
                                        setUseFilter(false);
                                        setFirstDate('00.00.00')
                                        setSecondDate('00.00.00')
                                    }}>
                                        <View style={{ marginLeft: 10, marginTop: 7, }}>
                                            <Image
                                                source={require('../assets/icons/closeBTN.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 22,
                                                    height: 22,
                                                }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    : null}
                            </View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                locale='ru-RU'
                                cancelTextIOS="Закрыть"
                                confirmTextIOS="Выбрать"
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible2}
                                locale='ru-RU'
                                cancelTextIOS="Закрыть"
                                confirmTextIOS="Выбрать"
                                mode="date"
                                onConfirm={handleConfirm2}
                                onCancel={hideDatePicker2}
                            />
                        </View>
                        <View>
                            <FlatList
                                data={FilterItem}
                                renderItem={({ item }) => (
                                    <NotifItemRender item={item} />
                                )}
                                style={{ marginTop: 20 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    NotificationsContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 20,
    },
    myUKFull: {
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    NotifTextBlock: {
        justifyContent: 'space-evenly',
        height: 55,
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
        paddingHorizontal: 15,
    },
    NotifTextTitle: {
        fontWeight: '600',
        fontSize: 13,
    },
    NotifTextSubitle: {
        fontWeight: '400',
        fontSize: 11,
        color: '#6B8795',
    },
    filterInput: {
        width: '90%',
        height: 37,
        borderWidth: 1,
        borderColor: '#EFF1F5',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 4,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    filterText: {
        color: '#6B8795',
        fontSize: 12,
    },
})