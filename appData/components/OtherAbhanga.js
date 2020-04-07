import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
let titleList = [
{ title: "कृष्ण जन्माचे अभंग ", fileName: 'mangalacharan2' },
{ title: "राम जन्माचे अभंग  ", fileName: 'mangalacharan1' },
{ title: "ताटीचे अभंग ", fileName: 'mangalacharan1' },
{ title: "माऊलींचे समाधीचे अभंग ", fileName: 'mangalacharan1' },
{ title: "पंढरीत प्रवेश करताना म्हणायचे अभंग " }, { title: "मालिका ७ वी " },
{ title: " वाराचे अभंग  ", fileName: 'vasudev' }]
let data = titleList.map((data, id) => {
    return {
        id,
        name: data.title,
        fileName: data.fileName,
        imagePath: require('../images/tp.jpg')
    }
})
export default class OtherAbhanga extends Component {
    constructor() {
        super()

    }
    onTouchCard = (data) => {
        console.log(data, "id==")
        this.props.navigation.navigate("ShowList", { folderName: 'kakada', databaseList: data.fileName, title: data.name })

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
                        <Icon name="arrow-left" size={30} color="white" onPress={() => this.goBack()} />
                    </View>
                    <View style={style.navTitle} >
                        <Text style={style.textNavTitle}>
                            {'निवडक  अभंग'}
                        </Text>

                    </View>
                </View>
                <View style={style.screenView}>
                    <ScrollView>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                            {
                                data.map((item, i) =>
                                    <TouchableOpacity key={item.id} onPress={() => this.onTouchCard(item)
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
            backgroundColor: `white`
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