import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Header from '../navigation/header';
import { ContextMS } from "../contextMS";
import { useContext } from "react";
import MSItemScreen from '../screen_components/MSItem';


const MetersScreen = () => {
    const { MSItem, SetMSItem } = useContext(ContextMS)
    return (
        <View>
            <Header
                titleName="Счетчики"
                showArrow={false}
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                    <FlatList
                        data={MSItem}
                        renderItem={({ item }) => (
                            <MSItemScreen el={item}/>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

export default MetersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
});

