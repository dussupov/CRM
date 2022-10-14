import { React, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, Image, Dimensions } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from 'react-native'



export default function VUSFinale({ onChangeTitle }) {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const windowHeight80 = windowHeight / 1.5;

    const handleTitleChange = () => {
        return onChangeTitle('Тема посещения и данные')
    }
    handleTitleChange();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [FIO, FIOSetState] = useState('');
    const [Adress, AdressSetState] = useState('г. Воронеж, ул. Генерала Перхоровича,д. 11, кв. 18')
    const [items, setItems] = useState([
        { label: 'Жалоба', value: 'Жалоба' },
        { label: 'Отзыв', value: 'Отзыв' }
    ]);

    const [Phone, PhoneSetState] = useState('+7 (900) 762-98-09')
    const [FinaleTheme, FinaleThemeSetState] = useState('')

    const onChange = (text) => {
        FIOSetState(text);
    }

    const isChanged = () => {
        console.log(123)
    }

    return (
        <View style={{ position: 'relative', zIndex: 1 }}>
            <KeyboardAwareScrollView
                extraScrollHeight={60}
                style={{ maxHeight: windowHeight80 }}>
                <View style={{ marginBottom: 10, position: 'relative', zIndex: 1000 }}>
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
                                FinaleThemeSetState(value);
                            }}
                        />
                    </View>
                </View>
                <ScrollView style={styles.ApplicHomeContainer}>
                    <View>
                        <Text style={{ color: '#6B8795', marginBottom: 10, }}>ФИО посетителя</Text>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Введите данные..."
                            placeholderTextColor="#C6D8E1"
                            numberOfLines={1}
                            multiline={false}
                            onChangeText={onChange}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#6B8795', marginBottom: 10, marginTop: 10 }}>Контрактный телефон</Text>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#C6D8E1"
                            numberOfLines={2}
                            multiline={false}
                            onChangeText={onChange}
                            value={Phone}
                            selectTextOnFocus={true}
                            editable={false}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#6B8795', marginBottom: 10, marginTop: 10 }}>Адрес</Text>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#C6D8E1"
                            numberOfLines={2}
                            multiline={true}
                            onChangeText={onChange}
                            value={Adress}
                            selectTextOnFocus={true}
                            editable={false}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#6B8795', marginBottom: 10, marginTop: 10 }}>ФИО собственника</Text>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Введите данные..."
                            placeholderTextColor="#C6D8E1"
                            numberOfLines={1}
                            multiline={false}
                            onChangeText={onChange}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#6B8795', marginBottom: 10, marginTop: 10 }}>Текст заявки</Text>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={{ ...styles.textArea, height: 80 }}
                            underlineColorAndroid="transparent"
                            placeholder="Например : Потек кран"
                            placeholderTextColor="#C6D8E1"
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={onChange}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: '#6B8795', fontSize: 14, fontWeight: '400', }}>Добавить документы</Text>
                            <Image
                                source={require('../../assets/icons/AddApplic.png')}
                                resizeMode='contain'
                                style={{ height: 37, width: 37, marginLeft: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    ApplicHomeContainer: {
        position: 'relative',
        zIndex: 1
    },
    textAreaContainer: {
        height: 'auto',
        borderColor: "#EFF1F5",
        borderWidth: 1,
        padding: 5,
        position: 'relative',
        zIndex: 1,
        borderRadius: 10,
    },
    textArea: {
        paddingHorizontal: 5,
        minHeight: 37,
        height: 'auto',
        justifyContent: "flex-start",
        position: 'relative',
        zIndex: 1,
        paddingVertical: 5
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
})