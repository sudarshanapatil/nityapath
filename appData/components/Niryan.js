import React, { Component } from 'react';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import NiryanList from '../database/nirayn'
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const backAction = NavigationActions.back({
    screen: 'Others',
});

const { width, height } = Dimensions.get('window');
export default class Niryan extends Component {
    onTouchCard = (detailAbhang, pageNo) => {
        this.props.navigation.navigate("FullAbhang", { fullAbhang: detailAbhang, pageNo })
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
                        <Icon name="arrow-left" size={25} color="white" onPress={() => this.goBack()} />
                    </View>
                    <View style={style.navTitle} >
                        <Text style={style.textNavTitle}>
                            {`नाटाचे अभंग`}
                        </Text>

                    </View>
                </View>
                <ScrollView>
                    <View style={style.scrollView}>
                        {
                            NiryanList.map((item, i) =>
                                <TouchableOpacity key={i} onPress={() => this.onTouchCard(item.fullAbhang, (i + 1))}>
                                    <View style={styles.card}>
                                        <View style={{ margin: 10, alignContent: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.cardText}>
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
const styles = StyleSheet.create({
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