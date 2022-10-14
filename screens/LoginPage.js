import { React, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window')

export default function LoginPage() {

    let correctLogin = '';
    let correctPassword = '';

    const onChangeLogin = (text) => {
        correctLogin = text;
    }

    const onChangePassword = (text) => {
        correctPassword = text;
    }

    const [passwordShow, SetPasswordShow] = useState(true);

    return (
        <View>
            <View style={styles.LoginPageContainer}>
                <ScrollView style={{ position: 'relative', zIndex: 1000, paddingHorizontal: 20, maxHeight: height, overflow: 'hidden' }}
                    scrollEnabled={false}
                >
                    <View style={styles.ImageContainer}>

                        <Image
                            source={require('../assets/loginPage/Union.png')}
                            resizeMode='contain'
                            style={{
                                position: 'relative',
                                width: '106%',
                                height: '106%',
                                zIndex: 102
                            }}
                        />
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>ВХОД</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#F5F8FD',
                                borderRadius: 5,
                                paddingHorizontal: 12,
                                height: 37,
                                textAlign: 'center',
                                width:'95%'
                            }}
                            placeholder={"Логин"}
                            onChangeText={onChangeLogin}
                        />
                        <View style={{flexDirection:'row', marginTop: 30,}}>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#F5F8FD',
                                    borderRadius: 5,
                                    paddingHorizontal: 12,
                                    height: 37,
                                    textAlign: 'center',
                                    width:'95%'
                                }}
                                placeholder={"Пароль"}
                                secureTextEntry={passwordShow}
                                onChangeText={onChangePassword}
                            />
                            {
                                passwordShow ?
                                    <TouchableOpacity onPress={()=>{
                                        SetPasswordShow(false)  
                                    }} style={{justifyContent:'center', alignItems:'center', paddingLeft:10}}>
                                        <Image
                                            source={require('../assets/loginPage/EyeClose.png')}
                                            resizeMode='contain'
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </TouchableOpacity>
                                    : 
                                    <TouchableOpacity onPress={()=>{
                                        SetPasswordShow(true)  
                                    }} style={{justifyContent:'center', alignItems:'center', paddingLeft:10}}>
                                        <Image
                                            source={require('../assets/loginPage/EyeOpen.png')}
                                            resizeMode='contain'
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={styles.BtnContainer}>
                        <TouchableOpacity style={{ width: '35%', alignSelf: 'center' }}>
                            <View style={styles.ROPPayBtn}>
                                <Text style={styles.ROPPayBtnText}>
                                    Войти
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LoginPageContainer: {
        backgroundColor: '#fff',
        height: height,
        width: width,
        position: 'relative',
        zIndex: 1000,
    },
    TextContainer: {
        paddingTop: '35%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputContainer: {
        paddingVertical: 40,
    },
    ROPPayBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#1EA133',
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
    },
    ROPPayBtnText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
    },
    BtnContainer: {
        width: '100%',
    },
    ImageContainer: {
        position: 'absolute',
        zIndex: 100,
        top: '120%',
        left: -25,
        width: '110%',
        height: "110%",
    }
})
