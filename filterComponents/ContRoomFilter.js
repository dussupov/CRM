import { React, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import Header from "../navigation/header";
import { useContext } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { ContextFilter } from "../contextFilter";
import { ContextFilterOK } from "../contextFilterOK";


const ContRoomFilter = ({route}) => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Жалоба', value: 'Жалоба' },
        { label: 'Отзыв', value: 'Отзыв' }
    ]);

    const {ContRoom, ChangeHistory} = route.params;

    const { FilterItem, SetFilterItem } = useContext(ContextFilter)

    const { FilterOK, SetFilterOK } = useContext(ContextFilterOK)

    const [filterTheme, SetfilterTheme] = useState('');

    const [ ContRoomItems, ContRoomSetState ] = useState(ContRoom);

    const [firstDateISO, setFirstDateISO] = useState('');
    const [secondDateISO, setSecondDateISO] = useState('')
    const [firstDate, setFirstDate] = useState('00.00.00');
    const [secondDate, setSecondDate] = useState('00.00.00')

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);

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
    };



    // Фильрация

    const dateSort = () => {
        let result = ContRoomItems.filter(element => {
            let date = new Date(element.dataFilter);
            let dateISO = date.toISOString()
            return dateISO >= firstDateISO && dateISO <= secondDateISO;
        });

        let resultTheme = result.filter(el =>{
            let theme = el.theme;
            return theme == filterTheme;
        })
        navigation.goBack();
        SetFilterItem(resultTheme);
    }

    return (
        <View>
            <Header
                titleName="Фильтры"
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.filterText}>Дата Создания</Text>
                        <View style={styles.filterInput}>
                            <TouchableOpacity onPress={showDatePicker}>
                                <Text style={{ color: '#C6D8E1' }}>{firstDate}</Text>
                            </TouchableOpacity>
                            <Text style={{ color: '#C6D8E1' }}> - </Text>
                            <TouchableOpacity onPress={showDatePicker2}>
                                <Text style={{ color: '#C6D8E1' }}>{secondDate}</Text>
                            </TouchableOpacity>
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
                    <View style={{ marginBottom: 10, position: 'relative', zIndex: 1000, marginTop:20}}>
                            <View>
                                <Text style={{ color: '#6B8795', marginBottom: 10, }}>Тема обращения</Text>
                            </View>
                            <View>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    style={{ zIndex: 1000, backgroundColor: 'white', borderColor: '#EFF1F5' }}
                                    dropDownContainerStyle={{ backgroundColor: 'white', borderColor: '#EFF1F5' }}
                                    placeholder="Выбирите из списка..."
                                    placeholderStyle={{
                                        color: "#C6D8E1",
                                    }}
                                    onChangeValue={(value) => {
                                        SetfilterTheme(value);
                                    }}
                                />
                            </View>
                        </View>
                    <View>
                        <TouchableOpacity style={styles.filterBtn} onPress={dateSort}>
                            <Text style={{
                                color: '#1EA133',
                                fontSize: 14,
                                fontWeight: '500'
                            }}>Применить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContRoomFilter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 25,
    },
    filterText: {
        color: '#6B8795',
        fontSize: 12,
    },
    filterInput: {
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
    filterBtn: {
        height: 40,
        borderWidth: 1,
        borderColor: "#1EA133",
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
});
