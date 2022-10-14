import React from "react";
import Header from '../navigation/header';
import MyUKOC from './MyUKOK';
import Requisites from './Requisites';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";

const { width } = Dimensions.get("screen");
const {height} = Dimensions.get('screen')

export default class MyUK extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000,
        officeName: 'Не выбрано',
        Adress : '',
        OfficePhone: '',
        WorkTime: '',
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    handleNameChange = props => {
        let {
            xTabTwo,
        } = this.state;

        this.setState({ officeName: props.OfficeName, Adress: props.Adress, OfficePhone: props.OfficePhone, WorkTime: props.WorkTime})
        this.handleSlide(xTabTwo)
        this.setState({ active: 1 }, () =>
        this.handleSlide(xTabTwo)
    )
    }

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#148225'}}>
                <Header
                    titleName='Моя УК'
                />
                <View style={styles.myUKFull}>
                    <View
                        style={{
                            width: "96%",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <View style={styles.myUKContainer}>
                            <Text style={{ fontSize: 14, color: '#6B8795', fontWeight: '400' }}>Ваша управляющая компания</Text>
                            <Text style={{ fontSize: 18, color: '#062A3D', fontWeight: '600', marginTop: 5, fontFamily: 'Montserrat-Bold', textTransform: 'uppercase'}}>Амилен</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 20,
                                marginBottom: 20,
                                height: 36,
                                position: "relative",
                            }}
                        >
                            <Animated.View
                                style={{
                                    position: "absolute",
                                    width: "50%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    // backgroundColor: "#1EA133",
                                    borderBottomWidth : 3,
                                    borderColor: '#1EA133',
                                    borderRadius: 4,
                                    transform: [
                                        {
                                            translateX
                                        }
                                    ],
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 4,
                                    borderRightWidth: 0,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0
                                }}
                                onLayout={event =>
                                    this.setState({
                                        xTabOne: event.nativeEvent.layout.x
                                    })
                                }
                                onPress={() =>
                                    this.setState({ active: 0 }, () =>
                                        this.handleSlide(xTabOne)
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        color: active === 0 ? "#1EA133" : "#C6D8E1"
                                    }}
                                >
                                    Офисы компании
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 4,
                                    borderLeftWidth: 0,
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0
                                }}
                                onLayout={event =>
                                    this.setState({
                                        xTabTwo: event.nativeEvent.layout.x
                                    })
                                }
                                onPress={() =>
                                    this.setState({ active: 1 }, () =>
                                        this.handleSlide(xTabTwo)
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        color: active === 1 ? "#1EA133" : "#C6D8E1"
                                    }}
                                >
                                    Реквизиты
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateX: translateXTabOne
                                        }
                                    ],
                                    display: active === 1 ? 'none' : 'flex',
                                    marginBottom:-200
                                }}
                                onLayout={event =>
                                    this.setState({
                                        translateY: event.nativeEvent.layout.height
                                    })
                                }
                            >
                                <MyUKOC onChange={this.handleNameChange} />
                            </Animated.View>

                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateX: translateXTabTwo
                                        },
                                        {
                                            translateY: -translateY
                                        }
                                    ],
                                }}
                            >
                                <Requisites name={this.state.officeName} Adress={this.state.Adress} OfficePhone={this.state.OfficePhone} WorkTime={this.state.WorkTime}/>
                            </Animated.View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myUKContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 20,
    },
    myUKFull: {
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginHorizontal: 15,
        marginVertical: 5,
    },

})