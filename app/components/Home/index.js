
import React,{ Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import img from '../assets/background.jpg';
import firebase from '../Config/config.js';
// import NotificationPopup from 'react-native-push-notification-popup';
import PushNotification from '../Pushcontrol'

export default class Home extends Component {
    constructor(props) {
        super(props);
           this.state = {
            text: "",
            num: "",
            result: "",
            siteUser:null,
        };
    }
    writeData=()=>{
        firebase.database().ref('mobile/' ).set({
            text:this.state.text,
            number:this.state.num,
        });            
    }

    checkData=()=>{
        let result = null;      		
          
        firebase.database().ref('result/').on('value', (snapshot)=>{
            result = snapshot.val();
            this.setState({
                result:result,
            })
            this.forceUpdate()
            console.log(this.state.result)
        });
    }

    componentDidMount() {
        this.checkData();
    }

	render() {
        return (
            
            <ImageBackground source={img} style={{width: '100%', height: '100%',}}>
                <View style={styles.container}>
                    <View style={styles.divide}>

                        <View style={styles.header}>
                            <Text style={[styles.headerText,{padding:15,color:'#ffffff',fontSize:52}]}>Input</Text>
                        </View>
                            
                        {/* input area */}
                        
                        <View style={styles.body}>
                                {/* body area */}
                            <View style={styles.inputPadding}>
                                <TextInput placeholderTextColor="#C0C0C0"
                                    style={styles.input}
                                    onChangeText={(text)=>this.setState({text})}
                                    keyboardType="default"
                                    placeholderTextColor="#ffffff"
                                    placeholder="Enter a Text"                                            
                                />
                            </View>
                                    
                            <View style={styles.inputPadding}>
                                <TextInput placeholderTextColor="#C0C0C0"
                                    style={styles.input}
                                    placeholder="Enter a Number"
                                    placeholderTextColor="#ffffff"
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

                        <View style={[styles.divide,{backgroundColor: '#FFFFFF',borderRadius:25,opacity:0.6}]}>
                                <View style={[styles.header,{padding:15}]}>
                                    <Text style={styles.headerText}>Output</Text>
                                </View>
                                {/* Space for output */}
                                <View style={{flex:6,alignItems:'center',justifyContent:'center',padding:14}}>
                                    <Text style={styles.resultText}>{this.state.result}</Text>
                                </View> 
                        </View>
                        <PushNotification/>
                </View>
                <PushNotification/>
            </View>    
        </ImageBackground>    
            
    );
  }
}