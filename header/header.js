import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () =>{
    return(
    <View style={styles.header}>
        <View>
            <Text style={styles.headerText}></Text>
        </View>
    </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    width: '100%',
    height: '100%',
    
});