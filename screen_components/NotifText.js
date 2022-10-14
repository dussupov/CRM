import { react, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";

import React from 'react'

export default function NotifText({ route, navigate }) {
    const { NotifName, NotifTitle, NotifData} = route.params;
    console.log(route.paramss);
    return (
        <View>
            <Header
                titleName="Уведомления"
            />
            <View style={{ backgroundColor: 'rgb(4, 145, 1)', height: '100%' }}>
                <View style={styles.myUKFull}>
                    <View style={styles.NotificationsContainer}>
                        <Text>{NotifData}</Text>
                        <Text style={{fontWeight: '600', marginBottom: 26}}>{NotifName}</Text>
                        <Text style={{color: '#062A3D'}}>{NotifTitle}</Text>
                    </View>
                </View>
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
})
