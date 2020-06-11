import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text, View, Dimensions, Share, ScrollView, StyleSheet, Animated,
    ImageBackground, AppRegistry, ToastAndroid, TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
//import abhangList from '../database/naat'

const { width, height } = Dimensions.get('window');

// import TrackPlayer from 'react-native-track-player';
//import console = require('console');
//AppRegistry.registerComponent('appname', () => App);
const backAction = NavigationActions.back({
    screen: 'Abhang',
});
export default class Naamjap extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        const name = navigation.getParam('name', 'tp data');
        const title = navigation.getParam('title', 'पाण्डुरङ्गाष्टकं');
        this.state = {
            title,
            count: 0,
            maal: 0,
            totalCount: 0
        }

    }

    onTouchCard = () => {
        let count = this.state.count;
        let totalCount = this.state.totalCount
        count++;
        totalCount++;


        if (count === 108) {
            let maal;
            maal = this.state.maal
            maal++
            count = 0
            this.setState({ maal, count, totalCount })
        }
        else {
            this.setState({ count, totalCount })
        }

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { navigation } = nextProps;
        const name = navigation.getParam('name', '');
        this.setState({
            name
        })
    }
    increaseFont = (type) => {
        let newFont;
        if (type == "plus")
            newFont = this.state.initialFontSize + 1
        else if (type == "minus")
            newFont = this.state.initialFontSize - 1
        this.setState({
            initialFontSize: newFont
        })

    }
    pauseSound = (type) => {
        // if (type == 0)
        // TrackPlayer.pause()
        // else
        // TrackPlayer.play()
    }
    goBack = () => {
        //TrackPlayer.stop()
        const { navigate } = this.props.navigation;
        navigate('Home');


    }
    onShare = async (data) => {
        try {
            const result = await Share.share({
                message: `भक्तिरस\n\n${data}\n\n अधिक अभंग वाचण्यासाठी डाउनलोड करा हरीभक्त अँप`
            });
        } catch (error) {
            alert(`काही तंत्ररिक कारणांमुळे शेअर केले जाऊ शकत नाही .क्षमस्व!`);
        }
    }
    showToast = () => {

        ToastAndroid.showWithGravity('तुमच्या फेवरिट्स मध्ये संपादित केले!', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    render() {
        const { navigation } = this.props;
        // const listPageNo = navigation.getParam('pageNo', 0)
        const fullAbhang = navigation.getParam('fullAbhang', `देह जावो अथवा राहो ।\n तुझे नामी धरीला भावो ॥\n\n तुझ्या पायाचा विश्वास ।\n म्हणोनिया झालो दास ॥\n\n तुझे रूप माझे मनी ।\n तेची ठसविले ध्यानी ॥\n\n कदा न फिरे माघारी ।\n बाळा म्हणे कृपा करी ॥`)
        return (
            <View style={style.container}>
                <View style={style.navbar}>
                    <View style={style.backButton}>
                        <Icon name="arrow-left" size={30} color='white' onPress={() => this.goBack()} />
                    </View>
                    <View style={style.navTitle} >
                        <Text style={style.navTextStyle}>
                            नामजप
                        </Text>

                    </View>
                </View>
                <View style={{
                    flex: 1, height: height - 50, alignContent: 'center', alignItems: 'center', justifyContent: 'center'
                }}>
                    <ImageBackground
                        style={style.backImage}
                        // source={require('../images/namjap.jpeg')}
                        opacity={0.5}
                        imageStyle={{ borderRadius: 6 }}
                        resizeMode={'stretch'}>
                        <View style={{
                            backgroundColor: 'white', width, height: 100,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={style.textStyle}>
                                संपूर्ण नामजप   - {this.state.totalCount}
                            </Text>
                            <Text style={style.textStyle}>
                                जपमाळ  - {this.state.maal}
                            </Text>
                            <Text style={style.textStyle}>
                                जपसंख्या  - {this.state.count}
                            </Text>
                        </View>
                        <TouchableOpacity key={8} onPress={() => this.onTouchCard(this.state.count)
                        }>
                            <View style={style.naapjapButton} >
                                <Text style={style.navTextStyle}>
                                    राम कृष्ण हरि
                        </Text>
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>
                </View>


            </View>)
    }
}
let style = StyleSheet.create({
    container: {
        flex: 1, width, height
    },
    navbar: {
        justifyContent: 'center', flexDirection: 'row',
        width: width, height: 50, backgroundColor: 'orange'
    },
    backButton: {
        width: 70, height: 50, alignItems: 'center', justifyContent: 'center',
    },
    navTitle: {
        width: width - 50, height: 50, alignItems: 'center', justifyContent: 'center'
    },
    navTextStyle: {
        alignContent: 'center', alignItems: 'center', textAlign: "center", fontFamily: 'Laila-Bold',
        alignSelf: 'center', fontSize: 20, color: "white"
    },
    textStyle: {
        alignContent: 'center', alignItems: 'center', textAlign: "center", fontFamily: 'Laila-Bold',
        alignSelf: 'center', fontSize: 20, color: "teal"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    fontButton: {
        width: 40, height: 40,
        borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 2
    },
    fontView: {
        width: width / 4, height: 50, justifyContent: 'center',
        alignItems: 'center'
    },
    navButtons: { width: width / 3, height: 50, alignItems: 'center', justifyContent: 'center' },
    naapjapButton: {
        width: 100, height: 100, backgroundColor: 'orange',
        borderRadius: 50, alignContent: 'center',
        alignItems: 'center', justifyContent: 'center',
        margin:120
    },
    backImage: {
        width, height: height - 70
    },
})