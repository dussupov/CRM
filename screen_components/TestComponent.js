import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import MyUKOK from './MyUKOK';
import Requisites from './Requisites';

export default function TestComponent() {
    const Tab = createBottomTabNavigator();
    return (
        <View>
            <Header
                titleName="Тестовый компонент"
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                    <Tab.Navigator
                        screenOptions={{
                            tabBarShowLabel: false,
                            tabBarStyle: {
                                position: 'absolute',
                                evelation: 0,
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                height: "7%",
                                top:0,
                                ...styles.shadow,
                                borderTopRightRadius: 15,
                                borderTopLeftRadius: 15,
                            },
                            headerStyle: {
                                height: 100,
                                backgroundColor: '#148225',
                            },
                            headerTitle: '123',
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
                        <Tab.Screen name="MyUKOK" component={MyUKOK} options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: 10,
                                    width:'100%'
                                }}>
                                    <Text style={{ color: focused ? '#1EA133' : '#C6D8E1', fontSize: 14, marginTop: 5, fontWeight:'600'}}>Квитанции</Text>
                                    <View style={{width:'80%', height:2, backgroundColor: focused ? '#1EA133' : '#C6D8E1', top:30, position:'absolute', borderRadius:20}}></View>
                                </View>
                            )
                        }} />
                         <Tab.Screen name="Requisites" component={Requisites} options={{
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
                    </Tab.Navigator>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#148225',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    activeLine:{
        width:'80%', height:2, backgroundColor:'#1EA133', top:30, position:'absolute'
    },
    LineDissable:{
        width:'80%', height:2, backgroundColor:'#C6D8E1', top:30, position:'absolute'
    }
});
