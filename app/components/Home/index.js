
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import img from '../assets/background.jpg';
import firebase from '../Config/config.js';
import NotificationPopup from 'react-native-push-notification-popup';
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
        console.log(this.state.text);
        console.log(this.state.num);
        firebase.database().ref('mobile/' ).set({
            text:this.state.text,
            number:this.state.num,
        });            
    }

    checkData=()=>{
        let result = null;              
          
        firebase.database().ref('result/').on('value', (snapshot)=>{
            // console.log(snapshot.val());
            result = snapshot.val();
            this.setState({
                result:result,
            })
            this.forceUpdate()
            console.log(this.state.result)
        });
    


        //   if(result !== undefined && result !== null){
        //       this.popup.show({
        //       onPress: function() {console.log('Pressed')},
        //       appIconSource: require('../assets/background.jpg'),
        //       appTitle: 'Message',
        //       timeText: 'Now',
        //       title: 'Hello World',
        //       body: result,
        //       slideOutTime: 5000
        //       });
        //   }

    }

    componentDidMount() {
        this.checkData();
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <ImageBackground source={img} style={{width: '100%', height: '100%',}}>
                        {/* <NotificationPopup ref={ref => this.popup = ref} /> */}
                    <View style={styles.container}>
                        <View style={[styles.divide,{flex:5,}]}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Input</Text>
                            </View>
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

                        <View style={[styles.divide,{backgroundColor: '#FFFFFF',borderRadius:10,opacity:0.6,flex:4}]}>
                            {/* <ImageBackground source={img} style={{width: '100%', height: '100%',opacity:0.9}}> */}
                                <View style={styles.header}>
                                    <Text style={styles.headerText}>Output</Text>
                                </View>
                                {/* Space for output */}
                                <View style={{flex:6,alignItems:'center',justifyContent:'center',padding:14}}>
                                    <Text style={styles.resultText}>{this.state.result}</Text>
                                </View> 
                            {/* </ImageBackground>        */}
                        </View>
                    </View>
                </ImageBackground>    
            </KeyboardAvoidingView>
    );
  }
}