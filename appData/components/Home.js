import React, { Component } from 'react';
import NaatList from '../database/naat'
import NiryanAbhangList from '../database/nirayn'
import StotraList from '../database/stotra'


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
        imagePath: require('../images/kakda.jpeg')
    },
    {
        id: 2,
        name: "नाटाचे अभंग",
        imagePath: require('../images/tp.jpg')
    },
    {
        id: 3,
        name: "तुकाराम महाराजांनी नित्यपाठासाठी स्वार्गाहून पाठविलेले अभंग",
        imagePath: require('../images/niryaan.jpeg')
    },
    {
        id: 4,
        name: "हरिपाठ",
        imagePath: require('../images/haripath.jpeg')
    },
    {
        id: 5,
        name: "स्तोत्र",
        imagePath: require('../images/parayan.jpeg')
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
        }, 3000)
    }

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("KakdaList")
                break;
            case 2:
                this.props.navigation.navigate("ShowList", { databaseList: NaatList })
                break;
            case 3:
                this.props.navigation.navigate("ShowList", {
                    databaseList: NiryanAbhangList,
                    title: "स्वार्गाहून पाठविलेले अभंग"
                })
                break;
            case 4:
                this.props.navigation.navigate("HaripathList")
                break;
            case 5:
                this.props.navigation.navigate("ShowList", {
                    databaseList: StotraList,
                    title: 'स्तोत्र'
                })
                break;
        }
    }
    render() {

        return (
            <View>
                {
                    (this.state.showSplash) ? <View style={styles.viewStyle}>
                        <View style={{ flex: 1, width, height }}>
                            <ImageBackground
                                style={{ width, height }}
                                source={require('../images/splash.jpeg')}
                                opacity={0.8}

                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center', alignItems: 'center',
                                    margin: 5, padding: 10, elevation: 7,

                                }}>

                                </View>
                            </ImageBackground>
                        </View>
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
                                                            opacity={0.4}
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