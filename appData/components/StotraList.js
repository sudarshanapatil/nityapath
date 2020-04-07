import React, { Component } from 'react';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

import MauliHaripath from '../database/mauliHaripath'
const data = [
    {
        id: 1,
        name: "पाण्डुरङ्गाष्टकं",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 2,
        name: "श्री रामरक्षास्तोत्रम्",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 3,
        name: "गीता",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 3,
        name: "शिवलीला",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "विष्णुसहत्र",
        imagePath: require('../images/tp.jpg')
    },

]
export default class StotraList extends Component {
    constructor() {
        super()

    }
    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("ShowOnePage", { name: 'pandurangashtakam', title: 'पाण्डुरङ्गाष्टकं', folderName: 'stotra' })
                break;
            case 2:
                this.props.navigation.navigate("ShowOnePage", { name: 'ramraksha', title: 'श्री रामरक्षास्तोत्रम्', folderName: 'stotra' })
                break;
            case 3:
                this.props.navigation.navigate("GeetaAdhyayList")
                break;
            case 4:
                this.props.navigation.navigate("ShowList", { databaseList: MauliHaripath })
                break;
        }
    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Home');
        // this.setState({ListName:"",title:""})
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
                            {'स्तोत्र'}
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
                                            <View style={style.imageText}>
                                                <Text style={style.cardText}>{item.name}</Text>
                                            </View>
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
            height: height / 6 - 40,
            margin: 5,
            backgroundColor: '#FFD480',
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