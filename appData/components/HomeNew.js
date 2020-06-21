import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppBar from './AppBar'
const nivadakAbhang = [
    { name: "कृष्ण जन्माचे अभंग ", fileName: 'mangalacharan2' },
    { name: "राम जन्माचे अभंग  ", fileName: 'mangalacharan1' },
    { name: "ताटीचे अभंग ", fileName: 'mangalacharan1' },
    { name: "माऊलींचे समाधीचे अभंग ", fileName: 'mangalacharan1' },
    { name: "पंढरीत प्रवेश करताना म्हणायचे अभंग " },
    { name: " वाराचे अभंग  ", fileName: 'vasudev' }]
const aaratiList = [
    {
        id: 1,
        name: "ज्ञानेश्वर महाराज आरती ",
        fileName: 'mauli',
        folderName: 'aarati'
    },
    {
        id: 2,
        name: "एकनाथ महाराज आरती ",
        fileName: 'nath',
        folderName: 'aarati'
    },
    {
        id: 3,
        name: "तुकाराम महाराज आरती",
        fileName: 'tukoba',
        folderName: 'aarati'
    },
    {
        id: 4,
        name: "नामदेव महाराज आरती",
        fileName: 'mauli',
        folderName: 'aarati'
    },
    {
        id: 5,
        name: "पांडुरंगाची आरती",
        fileName: 'vitthal',
        folderName: 'aarati'
    },

]
const stotraList = [
    {
        id: 1,
        name: "पाण्डुरङ्गाष्टकं",
        fileName: 'pandurangashtakam',
        title: 'पाण्डुरङ्गाष्टकं',
        folderName: 'stotra'
    },
    {
        id: 2,
        name: "श्री रामरक्षास्तोत्रम्",
        fileName: 'ramraksha', title: 'श्री रामरक्षास्तोत्रम्', folderName: 'stotra'
    },
    {
        id: 3,
        name: "गीता",
        folderName: 'stotra'
    },
    {
        id: 4,
        name: "शिवलीला",
    },
    {
        id: 5,
        name: "विष्णुसहत्रनाम",
        fileName: 'vishnuSahatraNaam',
        title: 'विष्णुसहत्रनाम',
        folderName: 'stotra'
    },
    {
        id: 6,
        name: "गणेश स्तोत्र ",
        fileName: 'ganeshStotra',
        title: 'गणेश स्तोत्र ',
        folderName: 'stotra'
    },

]
const data = [
    {
        id: 1,
        name: "काकडा",
    },
    {
        id: 2,
        name: "नाटाचे अभंग",
    },
    {
        id: 3,
        name: "नित्यपाठ १२ अभंग ",
    },
    {
        id: 4,
        name: "हरिपाठ",
    },
    {
        id: 5,
        name: "स्तोत्र",
    },
    {
        id: 6,
        name: "आरती संग्रह "
    },
    {
        id: 7,
        name: "निवडक  अभंग",
    },
    {
        id: 8,
        name: "नामजप",
        // imagePath: require('../images/namjap.jpeg')
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
        console.log("in home ",id)
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
                this.props.navigation.navigate("TitleList",
                    { folderName: 'stotra', titleList: stotraList, title: 'स्तोत्र', type: 'stotra' })
                break;
            case 6:
                this.props.navigation.navigate("TitleList",
                    { folderName: 'aarati', titleList: aaratiList, title: 'आरती संग्रह', type: 'aarati' })
                break;
            case 7:
                this.props.navigation.navigate("TitleList",
                    { folderName: 'aarati', titleList: nivadakAbhang, title: 'निवडक  अभंग', type: 'aarati' })
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
                                backgroundColor={'#4682B4'}
                            />
                            {/* <View style={style.navbar}>
                                <Text style={style.title}>
                                    भजनी मालिका
                                </Text>
                            </View> */}
                            <View style={style.screenView}>
                                <ScrollView>
                                    <View style={style.homeContainer}>
                                        {
                                            data.map((item, i) =>
                                                <TouchableOpacity key={item.key} onPress={() => this.onTouchCard(item.id)
                                                }>
                                                    <View style={style.card}>
                                                        {/* <ImageBackground
                                                            style={style.backImage}
                                                            source={item.imagePath}
                                                            opacity={0.4}
                                                            imageStyle={{ borderRadius: 6 }}
                                                            resizeMode={'stretch'}> */}
                                                        <View style={style.imageText}>
                                                            <Text style={style.cardText}>{item.name}</Text>
                                                        </View>
                                                        {/* </ImageBackground> */}
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
        homeContainer: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'skyblue'
        },
        viewStyle: {
            width,
            height,
            backgroundColor: `white`
        },
        navbar: {
            width,
            height: 50,
            backgroundColor: '#4682B4',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            // fontWeight: 'bold',
            fontSize: 22,
            color: "white",
            fontFamily: 'Laila-Medium',
        },
        screenView: {
            width,
            height: height - 50,
            backgroundColor: 'skyblue'
        },
        card: {
            width: width - 50,
            height: height / 8 - 30,
            margin: 5,
            // marginTop: 30,
            backgroundColor: '#4682B4',
            elevation: 10,
            fontFamily: 'Arya-Regular',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 4

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
            color: 'white',
            fontFamily: 'Laila-Medium',
        },
        imageContainer: {
            flex: 1,
            justifyContent: 'center', alignItems: 'center',
            margin: 5, padding: 10, elevation: 7,

        }


    }
)