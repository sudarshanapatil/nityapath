import React, { Component } from 'react';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { createStackNavigator, createAppContainer } from "react-navigation";
import NathHaripath from '../database/nathHaripath'
import MauliHaripath from '../database/mauliHaripath'

const data = [
    {
        id: 1,
        name: "ज्ञानदेव हरिपाठ",
        imagePath: require('../images/mauli.jpeg')
    },
    {
        id: 2,
        name: "नाथ हरिपाठ",
        imagePath: require('../images/nath.jpeg')
    },
    {
        id: 2,
        name: "निवृत्तीनाथ महाराज हरिपाठ",
        imagePath: require('../images/nivruttiNath.jpeg')
    },
    {
        id: 2,
        name: "नामदेव महाराज हरिपाठ",
        imagePath: require('../images/namdev.jpeg')
    },
    {
        id: 2,
        name: "तुकाराम महाराज हरिपाठ",
        imagePath: require('../images/tukaramMhrj.jpeg')
    },

]
export default class HaripathList extends Component {
    constructor() {
        super()
        this.state={
            MauliHaripath:'',
            loading:true
        }

    }

    UNSAFE_componentWillMount(){
        fetch("https://raw.githubusercontent.com/sudarshanapatil/savedfiles/master/mauliHaripath.js")
        .then(response => {
            console.log(response,"API ")
        })
        .then((responseJson)=> {
             console.log(responseJson.body,"API data 1")
        //   this.setState({
        //    loading: false,
        //    MauliHaripath: responseJson
        //   })
        })
        .catch(error=>console.log(error,"here")) //to catch the errors if any
        
    }

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("ShowList", { databaseList: MauliHaripath })
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
                                                <ImageBackground
                                                    style={styles.backImage}
                                                    source={item.imagePath}
                                                    opacity={0.5}
                                                    imageStyle={{ borderRadius: 6 }}
                                                    resizeMode={'stretch'}>
                                                    <View style={styles.imageText}>
                                                        <Text style={styles.cardText}>{item.name}</Text>
                                                    </View>
                                                </ImageBackground>
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