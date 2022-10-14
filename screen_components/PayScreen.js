import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Button, ScrollView, Modal, Dimensions } from 'react-native'
import { useContext } from 'react'
import Header from '../navigation/header'
import { ContextAppeal } from '../contextAppeal'
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window')



export default function PayScreen() {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Карта', value: 'Карта' },
        { label: 'Наличные', value: 'Наличные' }
    ]);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const [isModalVisible, setModalVisible] = useState(false);

    const { AppealSetState } = useContext(ContextAppeal);

    const [applText, applTextSetState] = useState('')

    const [applTheme, applThemeSetState] = useState('')

    const [checkOK, SetCheckOK] = useState(false)

    const [isSelected, setSelection] = useState(false);

    const onChange = (text) => {
        applTextSetState(text);
    }


    return (
        <View>
            {isModalVisible == true
                ? <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', position: 'absolute', zIndex: 2 }}></View>
                : false
            }
            <View>
                <Header
                    titleName="Оплата"
                />
                <View style={{ backgroundColor: '#148225', height: '100%' }}>
                    <View style={styles.container}>
                        <ScrollView style={styles.ApplicHomeContainer}>
                            <View style={{ marginBottom: 10, position: 'relative', zIndex: 1000 }}>
                                <View>
                                    <Text style={{ color: '#6B8795', marginBottom: 10, fontSize: 12 }}>Терминал оплаты</Text>
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
                                            fontSize: 12
                                        }}
                                        onChangeValue={(value) => {
                                            applThemeSetState(value);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <View>
                                    <Text style={{ color: '#6B8795', marginBottom: 10, fontSize: 12 }}>Сумма оплаты</Text>
                                </View>
                                <View style={styles.textAreaContainer} >
                                    <TextInput
                                        style={styles.textArea}
                                        underlineColorAndroid="transparent"
                                        placeholder="Сумма..."
                                        placeholderTextColor="#C6D8E1"
                                        numberOfLines={1}
                                        multiline={false}
                                        onChangeText={onChange}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 10, width: '80%', color: '#6B8795', marginTop: 15 }}>
                                        Сервисный сбор 0.00 ₽  будет добавлен к сумме автоматически
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <View>
                                    <Text style={{ color: '#6B8795', marginBottom: 10, fontSize: 12 }}>Назначение платежа</Text>
                                </View>
                                <View style={styles.textAreaContainer} >
                                    <TextInput
                                        style={styles.textArea}
                                        underlineColorAndroid="transparent"
                                        numberOfLines={1}
                                        multiline={false}
                                        onChangeText={onChange}
                                        value={'Холодная вода'}
                                        editable={false}
                                    />
                                </View>
                                <View style={{ marginTop: 25 }}>
                                    <Text style={{ color: '#062A3D', fontSize: 11 }}>
                                        Безопасность платежей обеспечивается с помощью Банка-эквайера, функционирующего на основе современных протоколов и технологий, разработанных платежными системами Visa International, MasterCard International и Мир.
                                        {"\n"}{"\n"}
                                        Информация о платеже поступает в управляющую организацию (ТСЖ) в режиме реального времени. Зачисление денежных средств на лицевой счет производится в течение 5 рабочих дней.
                                        {"\n"}{"\n"}
                                        При ошибочном перечислении, денежные средства могут быть возвращены только на Вашу карту.
                                        {"\n"}{"\n"}
                                        Оплата производится через защищенный платежный шлюз
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    color={isSelected ? '#1EA133' : undefined}
                                    style={{ borderColor: '#EFF1F5', borderWidth: 1 }}
                                />
                                <TouchableOpacity onPress={()=>{
                                    setSelection(!isSelected)
                                }}>
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ color: '#062A3D', fontSize: 13 }}>
                                            Я согласен с правилами оплаты
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 30 }}>
                                <View style={{opacity: isSelected? 1 : 0.3}}>
                                    <TouchableOpacity
                                        disabled={!isSelected}>
                                        <View style={styles.ROPPayBtn}>
                                            <Text style={styles.ROPPayBtnText}>
                                                Оплатить
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={()=>{
                                        navigation.goBack();
                                    }}>
                                        <View style={styles.ROPCloseBtn}>
                                            <Text style={styles.ROPCloseBtnText}>
                                                Отмена
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

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
                                            setModalVisible(!isModalVisible);
                                            applTextSetState('');
                                            applThemeSetState('');
                                            NumberApplicationSetState('')
                                        }}>
                                        <Text style={styles.addButtonText}>Да</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </Modal> */}

                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        paddingBottom: 350,
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'relative',
        zIndex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    textAreaContainer: {
        borderColor: "#EFF1F5",
        borderWidth: 1,
        padding: 5,
        position: 'relative',
        zIndex: 1,
        borderRadius: 10
    },
    textArea: {
        height: 37,
        justifyContent: "flex-start",
        position: 'relative',
        zIndex: 1,
        paddingLeft: 10,
        fontSize: 12
    },
    ApplicHomeContainer: {
        flex: 1,
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
        position: 'absolute',
        zIndex: 11,
        bottom: 60,
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
    },
    ROPPayBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#1EA133',
        borderRadius: 5,
        marginTop: 20,
    },
    ROPPayBtnText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
    },
    ROPCloseBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#1EA133',
        borderRadius: 5,
        marginTop: 20,
    },
    ROPCloseBtnText: {
        color: '#1EA133',
        fontSize: 14,
        fontWeight: '500',
    },
})
