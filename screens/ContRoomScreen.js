import { React, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from "../navigation/header";
import ContRoomItem from "../screen_components/ContRoomItem";
import { Context } from "../context";
import { useContext } from "react";
import { ContextFilter } from "../contextFilter";
import { useNavigation } from '@react-navigation/native';

const ContRoom = () => {

    const navigation = useNavigation();

    const { ContRoomItems, ContRoomSetState } = useContext(Context)

    const { FilterItem, SetFilterItem } = useContext(ContextFilter);

    const [History, SetHistory] = useState(ContRoomItems);

    const [ShadowShow, ShadowShowSetState] = useState(false)

    const [refreshToken , setRefreshToken] = useState(false)

    const refreshHistory = () =>{
        SetHistory(ContRoomItems);
    }

    const updateRefreshToken = (props) =>{
        setRefreshToken(props)
    }

    if(refreshToken == true){
        refreshHistory()
        setRefreshToken(false)
    }

    let CanGoBack = navigation.canGoBack();
    
    navigation.addListener('focus', ()=>{
        if (CanGoBack) {
            if (FilterItem){
                for (let index = 0; index < FilterItem.length; index++) {
                    if( FilterItem[index].dataType == 'ContRoom' ){
                        SetHistory(FilterItem)
                    }else{
                        SetHistory(ContRoomItems)
                    }
                }
            }else{
                SetHistory(ContRoomItems)
            }
          } else {
            console.log('false')
          }
    })

    const ShadowHandler = (props) => {
        return ShadowShowSetState(props)
    }

    return (
        <View>
            <Header
                titleName="Заявки"
                showArrow={false}
                showPhone={true}
            />

            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                <View style={styles.filterContainer}>
                        <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => navigation.navigate('ContRoomFilter', {
                            ContRoom: ContRoomItems,
                        }, )}>
                            <View style={{
                                flexDirection: 'row', marginTop: 26, marginBottom: 15,
                            }}>
                                <Image
                                    source={require('../assets/icons/Filter.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 22,
                                        height: 22,
                                        marginRight: 14,
                                    }}
                                />
                                <Text>
                                    Фильтры
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {FilterItem
                            ? <TouchableOpacity onPress={() => {
                                SetHistory(ContRoomItems);
                                SetFilterItem('');
                            }}>
                                <View style={{ marginLeft: 10, marginTop: 7, }}>
                                    <Image
                                        source={require('../assets/icons/closeBTN.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                            : null}

                    </View>
                    <FlatList
                        data={History}
                        renderItem={({ item }) => (
                            <ContRoomItem el={item} onChange={ShadowHandler} refreshToken={updateRefreshToken} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

export default ContRoom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
