import React from 'react'

import MyUK from '../screen_components/MyUK'
import Tabs from './tabs'
import Notifications from '../screen_components/Notifications'
import receipt from '../screen_components/Receipt'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import notifText from '../screen_components/NotifText'
import ReceiptOpenPage from '../screen_components/ReceiptOpenPage'
import ApplicHome from '../screen_components/ApplicHome'
import ContRoomItemOpen from '../screen_components/ContRoomItemOpen'
import Profile from '../screen_components/Profile'
import AppealScreenItemOpen from '../screen_components/AppealScreenItemOpen'
import AddAppeal from '../screen_components/AddAppeal'
import MSItemOpen from '../screen_components/MSItemOpen'
import MSItemAdd from '../screen_components/MSItemAdd'
import VUSAdd from '../screen_components/VUSAdd'
import TestComponent from '../screen_components/TestComponent'
import AppealFilter from '../filterComponents/AppealFilter'
import ContRoomFilter from '../filterComponents/ContRoomFilter'
import ReceiptContentFilter from '../filterComponents/ReceiptContentFilter'
import LoginPage from '../screens/LoginPage'
import PayScreen from '../screen_components/PayScreen'
import ReceiptHistoryFilter from '../filterComponents/ReceiptHistoryFilter'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Главная'
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MyUK'
                component={MyUK}
                options={{
                    headerShown: false,
                    title: "Моя УК",
                    headerStyle: {
                        height: 100,
                        backgroundColor: '#049101'
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        lineHeight: '19px',
                    },
                }}
            />
            <Stack.Screen
                name='notifications'
                component={Notifications}
                options={{ headerShown: false, title: "Уведомления" }}
            />
            <Stack.Screen
                name='receipt'
                component={receipt}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='notifText'
                component={notifText}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ReceiptOpenPage'
                component={ReceiptOpenPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ApplicHome'
                component={ApplicHome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ContRoomItemOpen'
                component={ContRoomItemOpen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='AppealScreenItemOpen'
                component={AppealScreenItemOpen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='AddAppeal'
                component={AddAppeal}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MSItemOpen'
                component={MSItemOpen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MSItemAdd'
                component={MSItemAdd}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='VUSAdd'
                component={VUSAdd}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='TestComponent'
                component={TestComponent}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='AppealFilter'
                component={AppealFilter}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ContRoomFilter'
                component={ContRoomFilter}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ReceiptContentFilter'
                component={ReceiptContentFilter}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoginPage'
                component={LoginPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PayScreen'
                component={PayScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ReceiptHistoryFilter'
                component={ReceiptHistoryFilter}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
