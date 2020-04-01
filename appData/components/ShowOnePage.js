import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text, View, Dimensions, Share, ScrollView, StyleSheet, Animated,
    ImageBackground, AppRegistry, ToastAndroid, TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');
const backAction = NavigationActions.back({
    screen: 'Abhang',
});
export default class FullAbhang extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        const name = navigation.getParam('name', 'tp data');
        const title = navigation.getParam('title', 'पाण्डुरङ्गाष्टकं');
        const folderName = navigation.getParam('folderName', 'पाण्डुरङ्गाष्टकं');
        this.state = {
            title,
            initialFontSize: 16,
            data: '',
            name,
            folderName
        }

    }
    fetchApi = (fileName, folderName) => {

        console.log("API URL", url, this.state.folderName)
        let url = `https://sudarshanapatil.github.io/savedfiles/${folderName}/${fileName}.json`
        console.log("API URL", url)
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                console.log(response, "API data")
                this.setState({
                    loading: false,
                    data: response.data
                })
            })
            .catch(error => console.log(error, "here")) //to catch the errors if any
    }

    componentDidMount(apiName) {
        this.fetchApi(this.state.name, this.state.folderName)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { navigation } = nextProps;
        const name = navigation.getParam('name', '');
        const title = navigation.getParam('title', 'पाण्डुरङ्गाष्टकं');
        const folderName = navigation.getParam('folderName', 'पाण्डुरङ्गाष्टकं');
        this.setState({
            name, title, folderName
        })
        this.fetchApi(name, folderName)
    }

    renderPage = () => {
        return (
            <ScrollView>
                <View style={{
                    flex: 1, width: width - 16,  backgroundColor: '#ffffff',
                    margin: 8, padding: 10, alignItems: 'center',
                    justifyContent: 'center', elevation: 10
                }}>

                    < Text style={{
                        fontSize: this.state.initialFontSize, color: '#000000',
                        fontFamily: 'Laila-Medium',
                    }}>
                        {this.state.data}
                    </Text>
                </View >
            </ScrollView>

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
        // const listPageNo = navigation.getParam('pageNo', 0)
        const fullAbhang = navigation.getParam('fullAbhang', `देह जावो अथवा राहो ।\n तुझे नामी धरीला भावो ॥\n\n तुझ्या पायाचा विश्वास ।\n म्हणोनिया झालो दास ॥\n\n तुझे रूप माझे मनी ।\n तेची ठसविले ध्यानी ॥\n\n कदा न फिरे माघारी ।\n बाळा म्हणे कृपा करी ॥`)
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
                <ScrollView>
                    <View style={{
                        flex: 1, width: width - 16, alignItems: 'center',
                        justifyContent: 'center', backgroundColor: '#ffffff', margin: 8,
                        padding: 16, elevation: 10,marginBottom:60
                    }}>
                        <Text style={{
                            fontSize: this.state.initialFontSize, color: '#000000',
                            fontFamily: 'Laila-Medium',
                        }}>
                            {this.state.data}
                        </Text>
                    </View>
                </ScrollView>
                {/* {
                    this.renderPage()
                } */}
                <View style={style.contentView}>
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

                </View>
            </View>)
    }
}

let style = StyleSheet.create({
    container: {
        flex: 1,
        width: width, height: height, backgroundColor: 'white'
    },
    navbar: {
        justifyContent: 'center', flexDirection: 'row',
        width: width, height: 50, backgroundColor: 'darkcyan'
    },
    backButton: {
        width: 50, height: 50, alignItems: 'center', justifyContent: 'center'
    },
    navTitle: {
        width: width - 50, height: 50, alignItems: 'center', justifyContent: 'center'
    },
    textNavTitle: {
        alignContent: 'center', alignItems: 'center', textAlign: "center", fontFamily: 'Laila-Bold',
        alignSelf: 'center', fontSize: 20, color: "white"
    },
    contentView: {
        width, height: 50, position: 'absolute', alignItems: 'center',
        bottom: 0, left: 0, flexDirection: "row", backgroundColor: '#e9fcf6', elevation: 5
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
    navButtons: { width: width / 3, height: 50, alignItems: 'center', justifyContent: 'center' }
})