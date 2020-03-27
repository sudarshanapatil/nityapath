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
export default class FullAbhang extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        const newPageNo = navigation.getParam('pageNo', 1);
        const abhangList = navigation.getParam('abhangList', 1);
        this.state = {
            isList: 1,
            initialFontSize: 16,
            visible: false,
            x: new Animated.Value(0),
            pageNo: newPageNo,
            abhangList
        }

    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { navigation } = nextProps;
        const newPageNo = navigation.getParam('pageNo', 0);
        const abhangList = navigation.getParam('abhangList', 1);
        this.setState({
            pageNo: newPageNo,
            abhangList
        })
        console.log(this.state, "state")
    }

    setPage = (pageType, listPageNo) => {
        let { pageNo, x } = this.state;

        switch (pageType) {
            case "prev": {
                pageNo--;
                if (pageNo == 0)
                    pageNo = this.state.abhangList.length
                x = new Animated.Value(-width)
                break;
            }
            case "next": {
                pageNo++;
                if (pageNo == this.state.abhangList.length + 1) {
                    pageNo = 1
                }
                x = new Animated.Value(width)
                break;
            }
            default: break;
        }
        this.setState({
            pageNo,
            x,
            isList: 0

        }, () => {
            Animated.timing(this.state.x, {
                toValue: 0,
            }).start();
            this.setState({
                visible: true,
            });
        });
    }
    renderPage = () => {
        let { pageNo } = this.state;
        return (
            <Animated.View
                style={[{
                    flex: 1, width: width - 16, height: height - 16, backgroundColor: '#ffffff',
                    margin: 8, padding: 10, alignItems: 'center', justifyContent: 'center', elevation: 5
                }, {
                    transform: [
                        {
                            translateX: this.state.x
                        }
                    ]
                }]}
            >
                {/* <ImageBackground
                    style={{ flex: 1, width, height: height + 50 }}
                    source={require('../../images/specialPhotos/splash.jpg')}
                    opacity={0.2}
                    resizeMode={'stretch'}
                > */}
                {/* <Text style={{ fontFamily: 'Sahitya-Bold', fontSize: 18 }}>{`\n${pageNo}`}</Text> */}
                <Text style={{

                    fontSize: this.state.initialFontSize, color: '#000000',
                    fontFamily: 'Laila-Medium',
                }}>
                    {this.state.abhangList[pageNo - 1].fullAbhang}
                </Text>
                {/* </ImageBackground> */}
            </Animated.View>
        )
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
        navigate('Abhang');


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
        const listPageNo = navigation.getParam('pageNo', 0)
        const fullAbhang = navigation.getParam('fullAbhang', `देह जावो अथवा राहो ।\n तुझे नामी धरीला भावो ॥\n\n तुझ्या पायाचा विश्वास ।\n म्हणोनिया झालो दास ॥\n\n तुझे रूप माझे मनी ।\n तेची ठसविले ध्यानी ॥\n\n कदा न फिरे माघारी ।\n बाळा म्हणे कृपा करी ॥`)
        return (
            <View style={style.container}>
                <View style={style.navbar}>
                    <View style={{ flexDirection: 'row', alignContent: "flex-end", justifyContent: "flex-end" }}>
                        <View style={style.navButtons}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => this.goBack()} />
                        </View>
                        {/* <View style={style.navButtons}>
                            <Icon name="pause-circle-o" size={30} color="white" onPress={() => this.pauseSound(0)} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="play-circle" size={30} color="white" onPress={() => this.pauseSound(1)} />
                        </View> */}
                        <View style={style.navButtons}>
                            <Icon name="bookmark" size={30} color="white" onPress={() => this.showToast()} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="share-alt" size={30} color="white" onPress={() => this.onShare(fullAbhang)} />
                        </View>
                    </View>

                </View>
                {
                    this.renderPage()
                }
                <View style={{
                    width, height: 50, position: 'absolute', alignItems: 'center',
                    bottom: 0, left: 0, flexDirection: "row", backgroundColor: '#e9fcf6', elevation: 5
                }}>
                    <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.setPage("prev", listPageNo)}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 20, color: 'black' }}>मागे</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.increaseFont("minus")}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '0' }}>अ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.increaseFont("plus")}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 32, color: 'black' }}>अ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.setPage("next", listPageNo)}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 20, color: 'black' }}>पुढे</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>)
    }
}
let style = StyleSheet.create({
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
    navbar: {
        width, height: 50, backgroundColor: "darkcyan"
    },
    container:{
        flex: 1, width, height
    }
})