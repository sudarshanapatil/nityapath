import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');

let numbers = ["१", "२", "३", "४", "५", "६", '७', "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", '१७', "१८"]

let data = numbers.map((key, index) => {
    return {
        id: index+1,
        name: `अध्याय - ${key}`,
        imagePath: require('../images/tp.jpg')
    }
})

export default class GeetaAdhyayList extends Component {
    constructor() {
        super()
    }

    onTouchCard = (id) => {
        this.props.navigation.navigate("ShowOnePage", {
            name: `adhyay${id}`,
            title: `अध्याय ${id}`,
            folderName: 'geeta'
        })
    }
    render() {

        return (
            <View>
                <View style={styles.viewStyle}>
                    <View style={styles.navbar}>
                        <Text style={styles.title}>
                            गीता
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