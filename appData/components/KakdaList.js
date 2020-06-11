import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
let titleList = [{ title: "मंगलाचरण पहिले ", fileName: 'mangalacharan1' },
{ title: "मंगलाचरण दुसरे ", fileName: 'mangalacharan2' },
{ title: "मंगलाचरण तिसरे ", fileName: 'mangalacharan1' },
{ title: "काकडा आरती", fileName: 'mangalacharan1' },
{ title: "भूपाळ्याचे अभंग ", fileName: 'mangalacharan1' },
{ title: "मालिका ६ वी " }, { title: "मालिका ७ वी " },
{ title: " वासुदेव  ", fileName: 'vasudev' },
{ title: "आंधळे-पांगुळ ", fileName: 'mangalacharan1' },
{
    title: "गौळणी", fileName: 'gaulan',
    titleList: [{ id: 1, name: 'ज्ञानोबारायांच्या गौळणी ', fileName: 'dnyanobarayGaulan', folderName: 'kakada/gaulan' },
    { id: 2, name: 'तुकोबारायांच्या गौळणी ', fileName: 'tukobarayGaulan', folderName: 'kakada/gaulan' },
    { id: 3, name: 'निळोबारायांच्या गौळणी ', fileName: 'nilobarayGaulan', folderName: 'kakada/gaulan' }]
}]
let data = titleList.map((data, id) => {
    return {
        id,
        name: data.title,
        fileName: data.fileName,
        titleList: data.titleList
        // imagePath: require('../images/tp.jpg')
    }
})
export default class HaripathList extends Component {
    constructor() {
        super()

    }
    onTouchCard = (data) => {
        console.log(data, "id==")
        if (data.id === 9)//for gaulan show different page
            this.props.navigation.navigate("TitleList",
                { folderName: 'gaulan', titleList: data.titleList, title: data.name })
        else
            this.props.navigation.navigate("ShowList",
                { folderName: 'kakada', databaseList: data.fileName, title: data.name })

    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Home');
        // this.setState({ListName:"",title:""})
    }
    render() {
        return (
            <View style={style.container} >
                {/* <View style={style.viewStyle}> */}
                <View style={style.navbar}>
                    <View style={style.backButton}>
                        <Icon name="arrow-left" size={30} color="white"
                            onPress={() => this.goBack()} />
                    </View>
                    <View style={style.navTitle} >
                        <Text style={style.textNavTitle}>
                            {'काकडा'}
                        </Text>

                    </View>
                </View>
                <View style={style.screenView}>
                    <ScrollView>
                        <View style={{
                            flex: 1, flexDirection: 'row',
                            flexWrap: 'wrap', width, marginTop: 40
                        }}>
                            {
                                data.map((item, i) =>
                                    <TouchableOpacity key={item.id}
                                        onPress={() => this.onTouchCard(item)
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
                {/* </View> */}

            </View>)
    }
}

const style = StyleSheet.create(

    {
        container: {
            flex: 1, width, height
        },
        viewStyle: {
            width,
            height,
            backgroundColor: `black`
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
            alignContent: 'center', alignItems: 'center', textAlign: "center",
            fontFamily: 'Laila-Bold',
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
            marginBottom: 14,
            backgroundColor: '#FFD480',
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'orange',
            borderRadius: 10,
            borderWidth: 4,
            fontFamily: 'Laila-Medium',

        },
        backImage: {
            width: width / 2 - 10,
            height: height / 3 - 40,
        },
        // imageText: {
        //     width: width / 2 - 8,
        //     height: height / 4 - 8,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     fontFamily: 'Laila-Medium',
        // },
        cardText: {
            fontSize: 20,
            // fontWeight: 'bold',
            fontFamily: 'Laila-Medium',
        }
    }
)