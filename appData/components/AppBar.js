import React, { Component } from 'react';
import {
	Dimensions,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	// Image
} from 'react-native';
import Icon1 from 'react-native-vector-icons/Feather';

const width = Dimensions.get('window').width;

class AppBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showEllipsisMenu: false
		}
	}

	render = () => {
		return (
			<View style={{
				flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 16, paddingRight: 16,
				width, height: 50, borderBottomWidth: 1, borderBottomColor: '#e6e6e6',
				backgroundColor: this.props.backgroundColor,
			}}>
				<TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
					{/* <Image
						source={require('../images/menu.png')}
						style={{ width: 28, height: 22 }}
					/> */}
					<Icon1 name="menu" size={24} color="#ffffff" />
				</TouchableOpacity>
				<Text style={appBarStyles.appTitle}>{'भजनी मालिका'}</Text>
				<TouchableOpacity onPress={() => this.toggleEllipsisMenu()}>
					<View style={{ width: 24, height: 24, opacity: 0 }}>
						{/* <Image
                                          source={require('../images/3dotmenu.png')}
                                          style={{ width: 24, height: 24 }}
                                    /> */}
						<Icon1 name="menu" size={24} color="#ffffff" />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const appBarStyles = StyleSheet.create({
	appBar: {
		// position: 'absolute',
		// top: 0,
		// left: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 16,
		paddingRight: 16,
		width,
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#e6e6e6',
		backgroundColor: '#f1810b',
	},
	appTitle: {
		fontSize: 26,
		fontFamily: 'Modak-Regular',
		color: '#ffffff'
	},
});

export default AppBar;

