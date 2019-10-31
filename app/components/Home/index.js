import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
export default class Home extends Component {
	constructor(props) {
    	super(props);
   		this.state = {
	};
}

	render() {
    	return (
      		<View style={styles.container}>
        		<View style={styles.divide}>
					{/* header */}
					<View style={styles.header}>
            			<Text style={styles.headerText}>Input</Text>
          			</View>
					{/* input area */}
				  	<View style={styles.body}>
						{/* body area */}
						<View style={styles.inputPadding}>
							<TextInput placeholderTextColor="#C0C0C0" style={styles.input} placeholder="Enter a Text"/>
						</View>
						
						<View style={styles.inputPadding}>
							<TextInput placeholderTextColor="#C0C0C0" style={styles.input} placeholder="Enter a number"/>
						</View>

						<View style={styles.inputPadding}>
							<TouchableOpacity style={styles.submit} onPress={()=>this.props.navigation.navigate("Main")}>
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
    );
  }
}