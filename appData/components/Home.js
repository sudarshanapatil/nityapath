import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppBar from './AppBar'
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
        name: "नित्यपाठ १२ अभंग ",
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
    },
    {
        id: 6,
        name: "आरती संग्रह ",
        imagePath: require('../images/kakda.jpeg')
    },
    {
        id: 7,
        name: "निवडक  अभंग",
        imagePath: require('../images/nivadakAbhang.jpeg')
    },
    {
        id: 8,
        name: "नामजप",
        imagePath: require('../images/namjap.jpeg')
    }
]
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            showSplash: 1
        }

    }
    static navigationOptions = {
        title: "Home",
        drawerLabel: "Home",
    };
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
                this.props.navigation.navigate("ShowList", { folderName: 'naat', databaseList: 'naat', title: 'नाटाचे अभंग' })
                break;
            case 3:
                this.props.navigation.navigate("ShowList", {
                    folderName: 'twelveAbhanga',
                    databaseList: 'twelveAbhanga',
                    title: "स्वार्गाहून पाठविलेले अभंग"
                })
                break;
            case 4:
                this.props.navigation.navigate("HaripathList")
                break;
            case 5:
                this.props.navigation.navigate("StotraList")
                break;
            case 6:
                this.props.navigation.navigate("AaratiList")
                break;
            case 7:
                this.props.navigation.navigate("OtherAbhanga")
                break;
            case 8:
                this.props.navigation.navigate("Naamjap", { title: "Naamjap" })
                break;
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                {
                    (this.state.showSplash) ? <View style={style.viewStyle}>
                        <View style={{ flex: 1, width, height }}>
                            <ImageBackground
                                style={{ width, height }}
                                source={require('../images/splash.jpeg')}
                                opacity={0.8}

                            >
                                <View style={style.imageContainer}>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                        :
                        <View style={style.viewStyle}>
                            <AppBar
                                navigation={navigation}
                                isEllipsisVisible={0}
                                backgroundColor={'#ff9900'}
                            />
                            {/* <View style={style.navbar}>
                                <Text style={style.title}>
                                    भजनी मालिका
                                </Text>
                            </View> */}
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
                                                            opacity={0.4}
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
                        </View>
                }
            </View>)
    }
}

const style = StyleSheet.create(
    {
        viewStyle: {
            width,
            height,
            backgroundColor: `white`
        },
        navbar: {
            width,
            height: 50,
            backgroundColor: '#FF9933',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 'bold',
            fontSize: 22,
            color: "white",
             fontFamily: 'Laila-Medium',
        },
        screenView: {
            width,
            height: height - 50
        },
        card: {
            width: width / 2 - 10,
            height: height / 4 - 40,
            margin: 5,
            backgroundColor: 'white',
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,

        },
        backImage: {
            width: width / 2 - 10,
            height: height / 4 - 40,
        },
        imageText: {
            width: width / 2 - 8,
            height: height / 4 - 8,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Laila-Medium',
        },
        cardText: {
            fontSize: 20,
            // fontWeight: 'bold',
            fontFamily: 'Laila-Medium',
        },
        imageContainer: {
            flex: 1,
            justifyContent: 'center', alignItems: 'center',
            margin: 5, padding: 10, elevation: 7,

        }


    }
)