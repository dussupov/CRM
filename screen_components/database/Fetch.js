import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';

import React, {useEffect, useState} from 'react';
import {firebase} from './Config';

export default function Fetch() {

const [users, setUsers] = useState('');
const todoRef = 
firebase.firestore().collection('appeal');

useEffect(async ()=>{
    todoRef
    .onSnapshot(
        querySnapshot =>{
            const users = []
            querySnapshot.forEach((doc) =>{
                const {data, id , star, status , success, title} = doc.data()
                users.push({
                    id,
                    data,
                    star, 
                    status,
                    success, 
                    title
                })
            })
            setUsers(users)
        }
    )
}, [])


console.log(users)
  return (
    <View>
        <FlatList 
        data={users}
        renderItem = {({item}) =>{
            <View>
                <Text>{item.data}</Text>
                <Text>{item.title}</Text>
                <Text>{item.star}</Text>
                <Text>{item.success}</Text>
                <Text>{item.status}</Text>
            </View>
        }}
        />
    </View>
  )
}
