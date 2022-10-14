import React from 'react'
import { Text, View,TouchableOpacity, Image, Button , StyleSheet} from 'react-native'
import Header from '../navigation/header'
import { useNavigation } from '@react-navigation/native';

export default function ReceiptOpenPage({route}) {
    const { RStatus, RSource, RData} = route.params;
    const navigation = useNavigation();
  return (
    <View>
        <Header 
        titleName={RData}
        />
        <View style={{ backgroundColor: '#148225', height: '100%' }}>
            <View style={styles.ReceiptFull}>
                <View style={styles.ReceiptContainer}>
                      <View style={styles.ROPItem}>
                          <View style={{justifyContent: 'space-around'}}>
                              <Text style={{color:'#6B8795', fontSize: 12,}}>Период</Text>
                              <Text style={{color:'#062A3D', fontWeight:'500', fontSize: 13}}>{RData}</Text>
                          </View>
                          <View>
                              <Text style={{color:'#6B8795', fontSize: 12, paddingBottom : 5}}>Статус</Text>
                              {RStatus == 'Оплачена'
                              ? <Text style={styles.ReceiptTextStatusScc}>{RStatus}</Text>
                              : false
                              }
                              {RStatus == 'Не оплачена'
                                  ? <Text style={styles.ReceiptTextStatusFal}>{RStatus}</Text>
                                  : false
                              }
                              {RStatus == 'На проверке'
                                  ? <Text style={styles.ReceiptTextStatusCom}>{RStatus}</Text>
                                  : false
                              }
                          </View>
                      </View>

                      <View style={styles.ROPItem}>
                          <View>
                              <Text style={{color:'#6B8795', fontSize: 12, paddingBottom : 5}}>Ресурс</Text>
                              <Text style={{color:'#062A3D', fontWeight:'500', fontSize: 13}}>{RSource}</Text>
                          </View>
                      </View>
                      <View style={styles.ROPItem}>
                          <View>
                              <Text style={{color:'#6B8795', fontSize: 12, paddingBottom : 5}}>Тариф</Text>
                              <Text style={{color:'#062A3D', fontWeight:'500', fontSize: 13}}>Однотарифный</Text>
                          </View>
                      </View>
                      <View style={styles.ROPItem}>
                          <View>
                              <Text style={{color:'#6B8795', fontSize: 12, paddingBottom : 5}}>Прибор учета</Text>
                              <Text style={{color:'#062A3D', fontWeight:'500', fontSize: 13}}>ЕН123445678909</Text>
                          </View>
                      </View>
                    
                      <View>
                          <TouchableOpacity>
                              <View style={styles.ROPDownBtn}>
                                  <Image
                                      source={require('../assets/icons/downPDF.png')}
                                      resizeMode='contain'
                                      style={{
                                          width: 22,
                                          height: 22,
                                          marginRight: 14,
                                      }}
                                  />
                                  <Text style={styles.ROPDownBtnText}>
                                      Скачать PDF
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      </View>

                      <View>
                          <TouchableOpacity onPress={() => navigation.navigate('PayScreen')}>
                              <View style={styles.ROPPayBtn}>
                                  <Text style={styles.ROPPayBtnText}>
                                      Оплатить
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      </View>
                </View>

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    ReceiptContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 20,
    },
    ReceiptFull: {
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    ReceiptTextStatusScc: {
        backgroundColor: '#B8EEC1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#1EA133",
    },
    ReceiptTextStatusFal: {
        backgroundColor: '#FDD6DB',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#EB5757",
    },
    ReceiptTextStatusCom: {
        backgroundColor: '#DED6FD',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "#7B61FF",
    },
    ROPItem:{
        flexDirection:'row', 
        justifyContent:"space-between",
        paddingRight: 20,
        paddingVertical: 20,
        borderBottomColor: '#F5F8FD',
        borderBottomWidth : 1
    }, 
    ROPDownBtn:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#1EA133',
        borderRadius: 5,
        marginTop: 40,
    },
    ROPDownBtnText:{
        color: '#1EA133',
        fontSize: 14,
        fontWeight: '500',
    },
    ROPPayBtn:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center',
        height: 40,
        backgroundColor:'#1EA133',
        borderRadius: 5,
        marginTop: 20,
    },
    ROPPayBtnText:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
    }
})