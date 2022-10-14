import { React, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Header from '../navigation/header'

import * as Progress from 'react-native-progress';

import Stepper from '../swipper';

import VUSOffice from './VUScomponents/VUSOffice';
import VUSDay from './VUScomponents/VUSDay';
import VUSFinale from './VUScomponents/VUSFinale';

import VUSCal from './VUScomponents/VUSCal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function VUSAdd() {

    const [progressBar, SetProgressBar] = useState(0.25)

    const [progressBarTitle, SetProgressBarTitle] = useState("321321")

    const [active, setActive] = useState(0);

    const changeProgressTitle = (props) => {
        SetProgressBarTitle(props)
    }

    const content = [
        <VUSOffice onChangeTitle={changeProgressTitle} />,
        <VUSCal onChangeTitle={changeProgressTitle} />,
        <VUSDay onChangeTitle={changeProgressTitle} />,
        <VUSFinale onChangeTitle={changeProgressTitle} />,
    ];


    return (
        <View>
            <Header
                titleName={'Записаться на прием'}
                showPhone={true}
            />
            <View style={{ backgroundColor: '#148225', height: '100%' }}>
                <View style={styles.container}>
                    <View style={{ marginVertical: 20, marginHorizontal: 20 , position:'relative', zIndex:3}}>
                        <Stepper
                            active={active}
                            content={content}
                            stepStyle={{ backgroundColor: '#1EA133' }}
                            buttonStyle={{ backgroundColor: '#1EA133' }}
                            onBack={() => {
                                setActive((p) => p - 1)
                                SetProgressBar(progressBar - 0.25)
                            }}
                            onFinish={() => alert('Finish')}
                            onNext={() => {
                                setActive((p) => p + 1)
                                SetProgressBar(progressBar + 0.25)
                            }}
                        />
                    </View>

                    <View style={{ position: 'absolute', top: 600, marginHorizontal: 20, backgroundColor:'white', height:25, paddingTop:10, zIndex:1}}>
                        <View>
                            <Progress.Bar progress={progressBar} width={windowWidth - 40} height={2} color={"rgba(30, 161, 51, 1)"}
                                borderColor={'rgba(198, 216, 225, 1)'}
                            />
                        </View>
                        <View style={{ position: 'absolute', top: 15, justifyContent: 'center', width: '60%' }}>
                            <View style={{ width: '100%', marginTop: '8%' }}>
                                <Text style={{ fontSize: 13, fontWeight: '600' }}>{progressBarTitle}</Text>
                            </View>
                        </View>
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
}
)
