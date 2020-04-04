import React, { Component } from 'react';

import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
let titleList = [{ title: "मंगलाचरण पहिले ", fileName: 'mangalacharan1' },
{ title: "मंगलाचरण दुसरे ", fileName: 'mangalacharan2' },
{ title: "मंगलाचरण तिसरे ", fileName: 'mangalacharan1' },
{ title: "काकडा आरती", fileName: 'mangalacharan1' }, { title: "भूपाळ्याचे अभंग ", fileName: 'mangalacharan1' },
{ title: "मालिका ६ वी " }, { title: "मालिका ७ वी " },
{ title: " वासुदेव  ", fileName: 'vasudev' }, { title: "आंधळे-पांगुळ ", fileName: 'mangalacharan1' },
{ title: "गौळणी", fileName: 'gaulan' }]
let data = titleList.map((data, id) => {
    return {
        id,
        name: data.title,
        fileName: data.fileName,
        imagePath: require('../images/tp.jpg')
    }
})
export default class HaripathList extends Component {
    constructor() {
        super()

    }
    onTouchCard = (data) => {
        console.log(data, "id==")
        this.props.navigation.navigate("ShowList", { folderName: 'kakada', databaseList: data.fileName, title: data.name })

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
                                        <TouchableOpacity key={item.id} onPress={() => this.onTouchCard(item)
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