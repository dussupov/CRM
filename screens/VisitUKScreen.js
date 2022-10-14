import { React, useContext, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import Header from '../navigation/header'
import { useNavigation } from '@react-navigation/native';
import { ContextVUS } from '../contextVUS';


export default function VisitUKScreen() {
  const navigation = useNavigation();

  const { VUS, SetVUS } = useContext(ContextVUS);

  function VUSItem({ item }) {
    return (
      <View style={styles.VUSItem}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: '#062A3D', fontSize: 13, fontWeight: '600' }}>{item.key}</Text>
            <Text style={{ color: '#6B8795', fontSize: 11, fontWeight: '400' }}>{item.data}</Text>
          </View>
          <View>
            <Text style={styles.CRTextStatusNew}>{item.status}</Text>
          </View>
        </View>

        <View>
          <Text style={{ color: '#062A3D', fontWeight: '600', fontSize: 13 }}>{item.office}</Text>
          <Text style={{ fontSize: 13, fontWeight: '400', color: '#062A3D' }}>{item.officeStreet}</Text>
        </View>

        <View>
          <Text style={{ fontSize: 13, fontWeight: '600', color: '#062A3D' }}>{item.service}</Text>
        </View>

      </View>
    )
  }

  return (
    <View>
      <Header
        titleName="Посетить УК"
        showPhone={true}
        showArrow={false}
      />
      <View style={{ backgroundColor: '#148225', height: '100%' }}>
        <View style={styles.container}>

          <FlatList
            data={VUS}
            renderItem={({ item }) => (
              <VUSItem item={item} />
            )}
          />

          <View style={{ position: 'absolute', top: 580, right: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('VUSAdd')}>
              <Image
                source={require('../assets/addBtn.png')}
                resizeMode='contain'
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 5,
                }}
              />
            </TouchableOpacity>
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
  VUSItem: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10.41,
    elevation: 2,
    borderRadius: 6,
    marginHorizontal: 20,
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 150,
    justifyContent: 'space-around'
  },
  CRTextStatusNew: {
    backgroundColor: '#DED6FD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#7B61FF",
  },
});
