import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import Home from './app/components/Home'
import firebase from 'firebase';

var config = {
    databaseURL: "https://yestack1.firebaseio.com",
    projectId: "yestack1",
};
firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
export default Home

