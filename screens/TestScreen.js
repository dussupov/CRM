import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Fetch from '../screen_components/database/Fetch';

export default function TestScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Header
                titleName="Тесты"
                showPhone={true}
                showArrow={false}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={navigation.navigate('TestComponent')}>
                        <View style={{width:50, height:50, backgroundColor:'blue'}}>
                            <Text>
                                123
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Fetch></Fetch>
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
});
