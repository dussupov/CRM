import { React, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../navigation/header';


const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
                <Header
                    showArrow={false}
                    titleName="ПЕТРОВ С.С. (Л/С 1234567890)"
                />
            </TouchableHighlight>
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>

                    <View style={styles.HomeScreenHeaderContainer}>

                        <View style={styles.HomeScreenHeader}>
                            <TouchableOpacity onPress={() => navigation.navigate('MyUK')} style={{ alignItems: "center" }}>
                                <Image
                                    source={require('../assets/icons/myUK.png')}
                                    resizeMode='contain'
                                    style={styles.HomeScreenHeaderImage}
                                />
                                <Text>Моя УК</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.HomeScreenHeader}>
                            <TouchableOpacity onPress={() => navigation.navigate('receipt')} style={{ alignItems: "center" }}>
                                <Image
                                    source={require('../assets/icons/Bill.png')}
                                    resizeMode='contain'
                                    style={styles.HomeScreenHeaderImage}
                                />
                                <Text>Квитанция</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.HomeScreenHeader}>
                            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('notifications')}>
                                <Image
                                    source={require('../assets/icons/uvd.png')}
                                    resizeMode='contain'
                                    style={styles.HomeScreenHeaderImage}
                                />
                                <Text>Уведомления</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.HomeScreenMainContainer}>

                        <TouchableOpacity onPress={() => navigation.navigate("ApplicHome")}>
                            <View style={styles.HomeScreenMain}>
                                <Text style={{ paddingHorizontal: 16 }}>Заявка в диспетчерскую</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('AddAppeal')}>
                            <View style={styles.HomeScreenMain}>
                                <Text style={{ paddingHorizontal: 16 }}>Направить обращение</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('VUSAdd')}>
                            <View style={styles.HomeScreenMain}>
                                <Text style={{ paddingHorizontal: 16 }}>Записаться на прием в УК</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                            <View style={styles.HomeScreenMain}>
                                <Text style={{ paddingHorizontal: 16 }}>Cтраница авторизации</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>

    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    HomeScreenHeader: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '30%',
        minHeight: 93,
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
        marginHorizontal: 5,
    },
    HomeScreenHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 20,
        marginHorizontal: 20,
        height: '35%',

    },
    HomeScreenHeaderImage: {
        width: 35,
        height: 35,
        marginBottom: 17,
    },
    HomeScreenMainContainer: {
        marginBottom: '135%',
    },
    HomeScreenMain: {
        justifyContent: 'center',
        height: 50,
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
        marginHorizontal: 15,
        marginVertical: 5,
    }
});
