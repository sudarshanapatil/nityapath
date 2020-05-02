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
        name: "ज्ञानदेव हरिपाठ",
        imagePath: require('../images/mauli.jpeg')
    },
    {
        id: 2,
        name: "नाथ हरिपाठ",
        imagePath: require('../images/nath.jpeg')
    },
    {
        id: 3,
        name: "निवृत्तीनाथ महाराज हरिपाठ",
        imagePath: require('../images/nivruttiNath.jpeg')
    },
    {
        id: 4,
        name: "नामदेव महाराज हरिपाठ",
        imagePath: require('../images/namdev.jpeg')
    },
    {
        id: 5,
        name: "तुकाराम महाराज हरिपाठ",
        imagePath: require('../images/tukaramMhrj.jpeg')
    },

]
export default class HaripathList extends Component {
    constructor() {
        super()
    }

    onTouchCard = (id) => {
        switch (id) {
            case 1:
                this.props.navigation.navigate("ShowList", { folderName: 'haripath', databaseList: "mauliHaripath", title: 'ज्ञानदेव हरिपाठ' })
                break;
            case 2:
                this.props.navigation.navigate("ShowList", { folderName: 'haripath', databaseList: 'nathHaripath', title: 'नाथ हरिपाठ' })
                break;
            case 3:
                this.props.navigation.navigate("ShowList", { folderName: 'haripath', databaseList: MauliHaripath })
                break;
            case 4:
                this.props.navigation.navigate("ShowList", { folderName: 'haripath', databaseList: MauliHaripath })
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
                            {'हरिपाठ'}
                        </Text>

                    </View>
                </View>
                <View style={style.screenView}>
                    <ScrollView>
                        <View style={style.haripathListContainer}>
                            {
                                data.map((item, i) =>
                                    <TouchableOpacity key={item.key} onPress={() => this.onTouchCard(item.id)
                                    }>
                                        <View style={style.card}>
                                        <Text style={style.cardText}>{item.name}</Text>
                                            {/* <ImageBackground
                                                style={style.backImage}
                                                source={item.imagePath}
                                                opacity={0.5}
                                                imageStyle={{ borderRadius: 6 }}
                                                resizeMode={'stretch'}>
                                            </ImageBackground> */}
                                            {/* <View style={style.imageText}>
                                                
                                            </View> */}
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

        haripathListContainer: {
            flex: 1, flexDirection: 'row', flexWrap: 'wrap', width,
            justifyContent:'center',
            marginTop:30,
            backgroundColor:'black'
        },
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
            height: height - 50,
            backgroundColor:'black'
        },
        card: {
            width: width  - 100,
            height: height/12,
            margin: 10,
            backgroundColor: '#BC8F8F',
            elevation: 10,
            padding:10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            flexDirection: 'column',
            borderColor:'white',
            borderWidth:5

        },
        backImage: {
            width: width / 2 - 10,
            height: height / 3 - 50,
        },
        imageText: {
            width: width  - 8,
            height: height/8,
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: "row",
            textAlign:'center',
            backgroundColor: 'orange',
            fontSize: 18,
            borderRadius: 10
        },
        cardText: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign:'center',
            color:'white'
        }


    }
)