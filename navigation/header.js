import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView, Dimensions, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('screen');

export default Header = (props) => {
    const navigation = useNavigation();
    const { showArrow = true, titleName, showPhone = false } = props;

    return (
        <LinearGradient colors={['#19AF31', '#138125']} style={{
            zIndex: 100,
        }} >
            <View style={styles.headerCont}>
                <View>
                    {showArrow && (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{
                        }}>
                            <Image
                                source={require('../assets/icons/backArrow.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.headerTextCont}>
                    <Text style={styles.headerTitle}>{titleName}</Text>
                </View>

                <View>
                    {showPhone && (
                        <TouchableOpacity onPress={() => { Linking.openURL(`tel:87777777777`)}} style={{
                        }}>
                            <Image
                                source={require('../assets/phone-call.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    headerCont: {
        height: 100,
        // backgroundColor: '#049101',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        alignContent: "center",
        width: width,
        justifyContent:'space-between',
        paddingTop:50,
        paddingHorizontal:20,

    },
    headerTitle: {
        fontSize: 14,
        width: "100%",
        textAlign: 'center',
        // paddingRight: 80,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    headerTextCont: {

    }
})