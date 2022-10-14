import { React, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Requisites from './Requisites'

const MyUKOC = ({ onChange }) => {

    const office = [
        {
            OfficeName: 'Главный',
            Adress: "г. Воронеж, ул. Лебедева, д. 51, офис 234",
            WorkTime: 'пн-пт 10:00 17:00',
            OfficePhone: '+7 (4732) 78-90-86'
        },
        {
            OfficeName: 'Левобережный',
            Adress: "г. Воронеж, ул. Лебедева, д. 51, офис 234",
            WorkTime: 'пн-пт 10:00 17:01',
            OfficePhone: '+7 (4732) 78-90-87'
        },
        {
            OfficeName: 'Бухгалтерия',
            Adress: "г. Воронеж, ул. Лебедева, д. 51, офис 234",
            WorkTime: 'пн-пт 10:00 17:02',
            OfficePhone: '+7 (4732) 78-90-88'
        },
    ];

    const [name, somethingSetState] = useState(office)

    // const handleNameChange = (props) =>{
    //     return onChange(name)
    //     }


    return (
        <View>
            <View style={styles.HomeScreenMain}>
                <TouchableOpacity onPress={(props) => {
                    return (
                        onChange(name[0])
                        )
                }}>
                    <Text style={{ paddingHorizontal: 16, fontWeight: '600' }}>{name[0].OfficeName}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.HomeScreenMain}>
                <TouchableOpacity onPress={(props) => {
                    return onChange(name[1])
                }}>
                    <Text style={{ paddingHorizontal: 16, fontWeight: '600' }}>{name[1].OfficeName}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.HomeScreenMain}>
                <TouchableOpacity onPress={(props) => {
                    return onChange(name[2])
                }}>
                    <Text style={{ paddingHorizontal: 16, fontWeight: '600' }}>{name[2].OfficeName}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyUKOC;

const styles = StyleSheet.create({
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
        marginHorizontal: 10,
        marginVertical: 5,
    },
})