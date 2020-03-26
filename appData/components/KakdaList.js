import React, { Component } from 'react';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { createStackNavigator, createAppContainer } from "react-navigation";
import Kakda1 from '../database/kakda1'
import MauliHaripath from '../database/mauliHaripath'

const data = [
    {
        id: 1,
        name: "मंगलाचरण पहिले ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 2,
        name: "मंगलाचरण दुसरे ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 3,
        name: "मंगलाचरण तिसरे ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 3,
        name: "काकडा आरती  ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "भूपाळ्याचे अभंग ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "मालिका ६ वी  ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "मालिका ७ वी ",
        imagePath: require('../images/tp.jpg')
    },
    
    {
        id: 4,
        name: " वासुदेव  ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "आंधळे-पांगुळ  ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "गौळणी",
        imagePath: require('../images/tp.jpg')
    },
    

]
export default class HaripathList extends Component {
    constructor() {
        super()

    }

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("ShowList",  { folderName:'haripath',databaseList: "mauliHaripath", title: 'ज्ञानदेव हरिपाठ' })
                break;
            case 2:
                this.props.navigation.navigate("ShowList", { databaseList: NathHaripath })
                break;
            case 3:
                this.props.navigation.navigate("ShowList", { databaseList: MauliHaripath })
                break;
            case 4:
                this.props.navigation.navigate("ShowList", { databaseList: MauliHaripath })
                break;
        }
    }
    render() {

        return (
            <View>

                <View style={styles.viewStyle}>
                    <View style={styles.navbar}>
                        <Text style={styles.title}>
                            भजनी मालिका
                                </Text>
                    </View>
                    <View style={styles.screenView}>
                        <ScrollView>
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                                {
                                    data.map((item, i) =>
                                        <TouchableOpacity key={item.key} onPress={() => this.onTouchCard(item.id)
                                        }>
                                            <View style={styles.card}>
                                                <View style={styles.imageText}>
                                                    <Text style={styles.cardText}>{item.name}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>

            </View>)
    }
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            width,
            height,
            backgroundColor: `white`
        },
        navbar: {
            width,
            height: 50,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center'
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
            backgroundColor: 'lightblue',
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