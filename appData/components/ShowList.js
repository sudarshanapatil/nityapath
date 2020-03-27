import React, { Component } from 'react';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
//import NaatList from '../database/naat'
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const backAction = NavigationActions.back({
    screen: 'Others',
});

const { width, height } = Dimensions.get('window');
export default class ShowList extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        const listName = navigation.getParam('databaseList');
        const title = navigation.getParam('title');
        const folderName = navigation.getParam('folderName');
        console.log("in constructor", listName, title)
        this.state =
            { listData: [], title, listName, folderName }

    }

    fetchApi = (fileName,folderName) => {
        
        let url = `https://sudarshanapatil.github.io/savedfiles/${folderName}/${fileName}.json`
        console.log("API URL", url)
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                // console.log(data, "API data")
                this.setState({
                    loading: false,
                    listData: data
                })
            })
            .catch(error => console.log(error, "here")) //to catch the errors if any
    }

    componentDidMount() {
        console.log("in did mount")
        let listName = this.state.listName;
        this.fetchApi(listName)
    }
    UNSAFE_componentWillReceiveProps(props) {       
        const { navigation } = props;
        const listName = navigation.getParam('databaseList');
        const title = navigation.getParam('title')
        const folderName = navigation.getParam('folderName');        
        this.setState({ listName, title, folderName })
        console.log("in will props",folderName,"Folder",listName)
        this.fetchApi(listName,folderName)
    }
    onTouchCard = (detailAbhang, pageNo) => {
        this.props.navigation.navigate("FullAbhang", { fullAbhang: detailAbhang, pageNo, abhangList: this.state.listData })
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
                        <Icon name="heart" size={30} color="pink" onPress={() => this.goBack()} />
                    </View>
                    <View style={style.navTitle} >
                        <Text style={style.textNavTitle}>
                            {this.state.title}
                        </Text>

                    </View>
                </View>
                <ScrollView>
                    <View style={style.scrollView}>
                        {
                            this.state.listData.map((item, i) =>
                                <TouchableOpacity key={i} onPress={() => this.onTouchCard(item.fullAbhang, (i + 1))}>
                                    <View style={style.card}>
                                        <View style={{ margin: 10, alignContent: 'center', justifyContent: 'center' }}>
                                            <Text style={style.cardText}>
                                                {item.initial}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const style = StyleSheet.create({
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
    scrollView: {
        width,
        backgroundColor: "white"
    },
    card: {
        width: width - 10, height: 80,
        padding: 8,
        alignContent: 'center', justifyContent: 'center',
        backgroundColor: 'white',
        shadowRadius: 2, shadowColor: 'darkcyan',
        elevation: 5,
        shadowOffset: { width: 2, height: 5 }, shadowOpacity: 1,
        margin: 5, borderRadius: 10
    },
    cardText: { fontSize: 16, textAlign: 'justify', textAlign: "center", fontFamily: "Laila-Medium" }
});