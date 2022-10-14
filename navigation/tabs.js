import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


import Home from '../screens/HomeScreen';
import Appeal from '../screens/AppealScreen';
import ContRoom from '../screens/ContRoomScreen';
import Meters from '../screens/MetersScreen';
import TestScreen from '../screens/TestScreen';
import VisitUK from '../screens/VisitUKScreen';

const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Петров С.C (Л/С 1234567890)'
      }
    }

    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        evelation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                        height: 70,
                        ...styles.shadow
                    },
                    headerStyle: {
                        height: 100,
                        backgroundColor: '#049101',
                    },
                    headerTitle: this.state.name,
                    headerTitleStyle: {
                        color: 'white',
                        fontFamily: 'Montserrat-Regular',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: '19px',

                    },
                    headerTitleAlign: 'left',
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5,
                        }}>
                            <Image
                                source={require('../assets/icons/Home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#1EA133' : '#C6D8E1',
                                }}
                            />
                            <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 9, marginTop: 5, }}>Главная</Text>
                        </View>
                    )
                }} />
                <Tab.Screen name="Meters" component={Meters} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5,
                        }}>
                            <Image
                                source={require('../assets/icons/Meters.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#1EA133' : '#C6D8E1',
                                }}
                            />
                            <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 9, marginTop: 5, }}>Счетчик</Text>
                        </View>
                    )
                }} />
                <Tab.Screen name="VisitUK" component={VisitUK} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5,
                        }}>
                            <Image
                                source={require('../assets/icons/VisitUk.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#1EA133' : '#C6D8E1',
                                }}
                            />
                            <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 9, marginTop: 5, }}>Посетить УК</Text>
                        </View>
                    )
                }} />
                <Tab.Screen name="Appeal" component={Appeal} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5,
                        }}>
                            <Image
                                source={require('../assets/icons/Appeal.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#1EA133' : '#C6D8E1',
                                }}
                            />
                            <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 9, marginTop: 5, }}>Обращения</Text>
                        </View>
                    )
                }} />
                <Tab.Screen name="ContRoom" component={ContRoom} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5,
                        }}>
                            <Image
                                source={require('../assets/icons/Dispetcher.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#1EA133' : '#C6D8E1',
                                }}
                            />
                            <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 9, marginTop: 5, }}>Заявки</Text>
                        </View>
                    )
                }} />
                {/* <Tab.Screen name="testScreen" component={TestScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5,
                        }}>
                            <Image
                                source={require('../assets/icons/Dispetcher.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#1EA133' : '#C6D8E1',
                                }}
                            />
                            <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 9, marginTop: 5, }}>Тесты</Text>
                        </View>
                    )
                }} /> */}
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});