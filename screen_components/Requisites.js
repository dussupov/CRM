import React from 'react'
import { View, Text, StyleSheet, Linking , TouchableOpacity} from 'react-native'


const Requisites = ({ name, Adress, OfficePhone, WorkTime }) => {

  return (
    <View style={{}}>
      <View style={styles.ReqItem}>
        <Text style={styles.ReqTitle}>Название</Text>
        <Text style={{
              fontSize: 15,
              fontWeight: '600',
              marginBottom: 20,
        }}>{name}</Text>
      </View>
      <View style={styles.ReqItem}>
        <Text style={styles.ReqTitle}>Адрес</Text>
        <Text style={styles.ReqSubTitle}>{Adress}</Text>
      </View>
      <View style={styles.ReqItem}>
        <Text style={styles.ReqTitle}>График работы</Text>
        <Text style={styles.ReqSubTitle}>{OfficePhone}</Text>
      </View>
      <View style={styles.ReqItem}>
        <Text style={styles.ReqTitle}>Телефон</Text>
        <Text style={styles.ReqSubTitle}>{WorkTime}</Text>
      </View>
      <View style={{
        justifyContent:'center', 
        alignItems:'center',
        marginTop: 40,
      }}>
        <TouchableOpacity style={styles.PhoneBtn} onPress={() => { Linking.openURL(`tel:${OfficePhone}`); }}>
          <Text style={{
            color:'#1EA133',
            ...styles.funcNavText}}>Позвонить</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Requisites;

const styles = StyleSheet.create({
  ReqItem: {
    height: 70,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F8FD',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  ReqTitle: {
    fontSize: 14,
    color: '#6B8795',
  },
  ReqSubTitle: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 20,
  },
  PhoneBtn: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#1EA133',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
})