import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles'
// import * as firebase from 'firebase'
import firebase from '../Config/config.js'
import img from '../Images/background.jpg'

export default class Home extends Component {
	constructor(props) {
    	super(props);
   		this.state = {
			text:"",
			num:"",
		};
	}		

	writeData=()=>{
		console.log(this.state.text);
		console.log(this.state.num);
		firebase.database().ref('mobile/' ).set({
			text:this.state.text,
			number:this.state.num,
		});
		
	}

	render() {
    	return (
			<ImageBackground source={img} style={{width: '100%', height: '100%'}}>
				<View style={styles.container}>
					<View style={styles.divide}>
						{/* header */}
						{/* <View style={styles.header}>
							<Text style={styles.headerText}>Input</Text>
						</View> */}
						{/* input area */}
						<View style={styles.body}>
							{/* body area */}
							<View style={styles.inputPadding}>
								<TextInput placeholderTextColor="#C0C0C0" onChangeText={(text)=>this.setState({text})} style={styles.input} placeholder="Enter a Text"/>
							</View>
							
							<View style={styles.inputPadding}>
								<TextInput placeholderTextColor="#C0C0C0" onChangeText={(num)=>this.setState({num})} style={styles.input} placeholder="Enter a number"/>
							</View>

							<View style={styles.inputPadding}>
								<TouchableOpacity style={styles.submit} onPress={this.writeData}>
									<Text style={styles.submitText}>Submit</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.divide}>
						{/* Space for output */}
						<Text>Space for output</Text>
					</View>
				</View>
			</ImageBackground>	
    );
  }
}