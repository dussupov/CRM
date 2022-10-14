import { React, useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, Modal, Clipboard, Alert } from 'react-native'
import Header from '../navigation/header'
import { ContextPhone } from '../contextPhone';

export default function Profile() {
    const [isModalVisible, setModalVisible] = useState(false);
    const { Phone, PhoneSetState } = useContext(ContextPhone);

    const [personalAcc, SetPersonalAcc] = useState('123456789')

    const [copiedText, setCopiedText] = useState('')

    const copyToClipboard = () => {
        Clipboard.setString(personalAcc)
    }

    let correctNumber = '';

    const onChange = (text) => {
        correctNumber = text;
    }

    const showAlert = () => {
        return Alert.alert(
          // the title of the alert dialog
          "Лицевой счет",
    
          // the message you want to show up
          "Успешно скопирован",
    
          // buttons
          // On iOS there is no limit of how many buttons you can use, but on Android three is the maximum
          // If you're developing an app for both platforms, don't use more than three buttons
          [
            // the first button
            {
              text: "Хорошо",
              onPress: () => setChoice("Хорошо"),
            },
    
          ]
        );
      };
    
      const [choice, setChoice] = useState("");


    return (
        <View>
            {isModalVisible == true
                ? <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', position: 'absolute', zIndex: 2 }}></View>
                : false
            }
            <Header
                titleName="Мой профиль"
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <ScrollView style={styles.container}>
                    <View style={{ marginTop: 20, ...styles.profileCont }}>
                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginBottom: 5, }}>Адрес</Text>
                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500' }}>Путиловская 17, кв 60</Text>
                    </View>
                    <View style={styles.profileCont}>
                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginBottom: 5, }}>Собственник</Text>
                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500' }}>Петров С.С.</Text>
                    </View>
                    <View style={styles.profileCont}>
                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginBottom: 5, }}>Лицевой счет</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                            <TouchableOpacity onPress={() => {copyToClipboard()
                            showAlert()
                            }}>
                                <Text style={{ color: '#1EA133', fontSize: 13, fontWeight: '500', textDecorationLine: 'underline' }}>{personalAcc}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {copyToClipboard()
                            showAlert()
                            }}>
                                <Image
                                    source={require('../assets/icons/Icon-Copy.png')}
                                    resizeMode='contain'
                                    style={{ width: 20, height: 20, }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.profileCont}>
                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginBottom: 5, }}>Помещение</Text>
                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500' }}>Площадь помещения 89.65 м²</Text>
                        <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '500', marginBottom: 20 }}>Площадь по Л/С 89.65 м²</Text>
                    </View>
                    <ScrollView style={styles.profileCont}>
                        <Text style={{ color: '#6B8795', fontSize: 12, fontWeight: '400', marginBottom: 5, }}>Номер телефона</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#F5F8FD',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                height: 37,
                            }}
                            placeholder={Phone}
                            onChangeText={onChange}
                        // value={Phone}
                        />
                    </ScrollView>
                    <View>
                        <TouchableOpacity style={styles.ProfileBtn} onPress={() => {
                            PhoneSetState(correctNumber);
                            setModalVisible(!isModalVisible);
                        }}>
                            <Text style={{
                                color: '#1EA133',
                                fontSize: 14,
                                fontWeight: '500'
                            }}>Сохранить</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            // this.closeButtonFunction()
                        }}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <View
                                style={{
                                    height: '25%',
                                    marginTop: 'auto',
                                }}>
                                <View style={styles.footer}>
                                    <Text style={styles.headerText}>Данные изменены</Text>
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
                    </Modal>

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
    profileCont: {
        marginHorizontal: 20,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F8FD',
        minHeight: 55,
        height: 'auto',
    },
    ProfileBtn: {
        height: 40,
        borderWidth: 1,
        borderColor: "#1EA133",
        borderRadius: 4,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
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
    }
})
