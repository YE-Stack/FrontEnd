import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from './styles'
import img from '../assets/background.jpg'
import firebase from '../Config/config.js'

export default class Home extends Component {
	constructor(props) {
    	super(props);
   		this.state = {
			text: "",
            num: "",
            result: "",
		};
	}		

	writeData=()=>{
		console.log(this.state.text);
		console.log(this.state.num);
		firebase.database().ref('mobile/' ).set({
			text:this.state.text,
			number:this.state.num,
        });
        let temp;
        firebase.database().ref('mobile/').on('value', function (snapshot) {
            console.log(snapshot.val())
            temp = snapshot.val();
        });
        this.setState({result: temp})       		
	}

	render() {
    	return (
            <KeyboardAvoidingView>
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
                                    <TextInput placeholderTextColor="#C0C0C0"
										style={styles.input}
										onChangeText={(text)=>this.setState({text})}
                                        placeholder="Enter a Text"
                                        keyboardType="default"
                                        />
                                </View>
                                
                                <View style={styles.inputPadding}>
                                    <TextInput placeholderTextColor="#C0C0C0"
                                        style={styles.input}
										placeholder="Enter a Number"
										onChangeText={(num)=>this.setState({num})}
                                        keyboardType="number-pad"
                                        />
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
            </KeyboardAvoidingView>
    );
  }
}