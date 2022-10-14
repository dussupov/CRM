import { React, useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import Header from "../navigation/header";
import AppealScreenItem from "../screen_components/AppealScreenItem";
import { useNavigation } from '@react-navigation/native';
import { ContextAppeal } from "../contextAppeal";
import { useContext } from "react";
import { ContextFilter } from "../contextFilter";


const Appeal = ({ }) => {

    const navigation = useNavigation();

    const { AppealItems, AppealSetState } = useContext(ContextAppeal);

    const { FilterItem, SetFilterItem } = useContext(ContextFilter);

    const [AppealHistory, SetAppealHistory] = useState(AppealItems);

    const refreshHistory = () =>{
        SetAppealHistory(AppealItems);
    }

    const [refreshToken , setRefreshToken] = useState(false)

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
                    if( FilterItem[index].dataType == 'Appeal' ){
                        SetAppealHistory(FilterItem)
                    }else{
                        SetAppealHistory(AppealItems)
                    }
                }
            }else{
                SetAppealHistory(AppealItems)
            }
          } else {
            console.log('false')
          }
    })

    const [ShadowShow, ShadowShowSetState] = useState(false)

    const ShadowHandler = (props) => {
        return ShadowShowSetState(props)
    }

    return (
        <View>
            <Header
                titleName="Обращения"
                showArrow={false}
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                    <View style={styles.filterContainer}>
                        <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => navigation.navigate('AppealFilter', {
                            Appeals: AppealItems,
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
                                SetAppealHistory(AppealItems);
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
                    <View>
                        <FlatList
                            data={AppealHistory}
                            renderItem={({ item }) => (
                                <AppealScreenItem el={item} onChange={ShadowHandler} refreshToken={updateRefreshToken}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default Appeal;

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
