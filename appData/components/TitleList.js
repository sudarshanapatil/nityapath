import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, Text, View, Image,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TitleList extends Component {
    constructor(props) {
        console.log("in constru")
        super(props)
        const { navigation } = props;
        const data = navigation.getParam('titleList', 'tp data');
        console.log("in tiltlelist", data)
        const title = navigation.getParam('title', 'पाण्डुरङ्गाष्टकं');
        const type = navigation.getParam('type', 'stotra');
        this.state = {
            data, title, type
        }

    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { navigation } = nextProps;
        const data = navigation.getParam('titleList', 'tp data');
        console.log("in tiltlelist recive props", data)
        const title = navigation.getParam('title', 'पाण्डुरङ्गाष्टकं');
        const type = navigation.getParam('type', 'stotra');
        this.setState({
            data, title, type
        })
    }
    onTouchCard = (item) => {
        console.log(item, "touch", item.id)
        if (item.folderName === 'stotra') {
            switch (item.id) {
                case 1:
                    this.props.navigation.navigate("ShowOnePage",
                        { fileName: 'pandurangashtakam', title: 'पाण्डुरङ्गाष्टकं', folderName: 'stotra' })
                    break;
                case 2:
                    this.props.navigation.navigate("ShowOnePage",
                        { fileName: 'ramraksha', title: 'श्री रामरक्षास्तोत्रम्', folderName: 'stotra' })
                    break;
                case 3:
                    this.props.navigation.navigate("GeetaAdhyayList")
                    break;
                case 4:
                    this.props.navigation.navigate("ShowList", { databaseList: MauliHaripath })
                    break;
            }
        }
        else if (item.folderName === 'aarati') {
            this.props.navigation.navigate("ShowOnePage",
                { fileName: item.fileName, title: item.name, folderName: item.folderName })

        }
        else {
            console.log("in else=========")
            this.props.navigation.navigate("ShowList",
                { folderName: item.folderName, databaseList: item.fileName, title: item.name })
        }

    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Home');
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
                            {this.state.title}
                        </Text>

                    </View>
                </View>
                <View style={style.screenView}>
                    <ScrollView>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width }}>
                            {
                                this.state.data.map((item, i) =>
                                    <TouchableOpacity key={item.key}
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


            </View>)
    }
}

const style = StyleSheet.create(
    {
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
            height: height - 50
        },
        card: {
            width: width - 20,
            height: height / 6 - 40,
            margin: 10,
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
            fontFamily: 'Laila-Medium',
        }


    }
)