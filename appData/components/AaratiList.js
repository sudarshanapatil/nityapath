import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/FontAwesome';
const data = [
    {
        id: 1,
        name: "ज्ञानदेव आरती",
        imagePath: require('../images/mauli.jpeg')
    },
    {
        id: 2,
        name: "नाथ आरती",
        imagePath: require('../images/nath.jpeg')
    },
    {
        id: 3,
        name: "तुकाराम महाराज आरती",
        imagePath: require('../images/nivruttiNath.jpeg')
    },
    {
        id: 4,
        name: "नामदेव महाराज आरती",
        imagePath: require('../images/namdev.jpeg')
    },
    {
        id: 5,
        name: "नामदेव महाराज आरती",
        imagePath: require('../images/tukaramMhrj.jpeg')
    },

]
export default class AaratiList extends Component {
    constructor() {
        super()
    }

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("ShowOnePage", { name: 'mauli', title: 'ज्ञानदेव आरती',folderName:'aarati' })
                break;
            case 2:
                this.props.navigation.navigate("ShowList", { folderName:'haripath',databaseList: 'nathHaripath', title: 'नाथ हरिपाठ' })
                break;
            case 3:
                this.props.navigation.navigate("ShowList", { folderName:'haripath',databaseList: MauliHaripath })
                break;
            case 4:
                this.props.navigation.navigate("ShowList", { folderName:'haripath',databaseList: MauliHaripath })
                break;
        }
    }
    goBack = () => {
        //TrackPlayer.stop()
        const { navigate } = this.props.navigation;
        navigate('Home');
    }
    render() {

        return (
            <View style={style.container}>
                <View style={style.navbar}>
                    <View style={style.backButton}>
                        <Icon name="arrow-left" size={30} color="white" onPress={() => this.goBack()} />
                    </View>
                    <View style={style.navTitle} >
                        <Text style={style.textNavTitle}>
                            {'आरती संग्रह '}
                        </Text>

                    </View>
                </View>
                    <View style={style.screenView}>
                        <ScrollView>
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                                {
                                    data.map((item, i) =>
                                        <TouchableOpacity key={item.key} onPress={() => this.onTouchCard(item.id)
                                        }>
                                            <View style={style.card}>
                                                <ImageBackground
                                                    style={style.backImage}
                                                    source={item.imagePath}
                                                    opacity={0.5}
                                                    imageStyle={{ borderRadius: 6 }}
                                                    resizeMode={'stretch'}>
                                                    <View style={style.imageText}>
                                                        <Text style={style.cardText}>{item.name}</Text>
                                                    </View>
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </ScrollView>
                    </View>
            </View>)
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: width, height: height, backgroundColor: 'white'
        },
        navbar: {
            justifyContent: 'center', flexDirection: 'row',
            width: width, height: 50, backgroundColor: 'orange'
        },
        backButton: {
            width: 50, height: 50, alignItems: 'center', justifyContent: 'center'
        },
        navTitle: {
            width: width - 50, height: 50, alignItems: 'center', justifyContent: 'center'
        },
        textNavTitle: {
            alignContent: 'center', alignItems: 'center', textAlign: "center", fontFamily: 'Laila-Bold',
            alignSelf: 'center', fontSize: 24, color: "white"
        },
        title: {
            fontWeight: 'bold',
            fontSize: 22
        },
        screenView: {
            width,
            height: height - 50
        },
        card: {
            width: width / 2 - 10,
            height: height / 3 - 40,
            margin: 5,
            backgroundColor: 'white',
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,

        },
        backImage: {
            width: width / 2 - 10,
            height: height / 3 - 40,
        },
        imageText: {
            width: width / 2 - 8,
            height: height / 4 - 8,
            alignItems: 'center',
            justifyContent: 'center'
        },
        cardText: {
            fontSize: 20,
            fontWeight: 'bold'
        }


    }
)