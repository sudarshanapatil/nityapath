import React, { Component } from 'react';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { createStackNavigator, createAppContainer } from "react-navigation";

const data = [
    {
        id: 1,
        name: "काकडा",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 2,
        name: "नाटाचे अभंग",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 3,
        name: "तुकाराम महाराजांनी नित्यपाठासाठी स्वार्गाहून पाठविलेले अभंग",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 4,
        name: "हरिपाठ",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 5,
        name: "स्तोत्र",
        imagePath: require('../images/tp.jpg')
    }
]
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            showSplash: 1
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showSplash: 0
            })
        }, 300)
    }

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("Abhang")
                break;
            case 2:
                this.props.navigation.navigate("Naat")
                break;
            case 3:
                this.props.navigation.navigate("Index")
                break;
            case 4:
                this.props.navigation.navigate("Others")
                break;
        }
    }
    render() {

        return (
            <View>
                {
                    (this.state.showSplash) ? <View style={styles.viewStyle}>
                        <Text>
                            hii
                        </Text>
                    </View>
                        :
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
                }
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