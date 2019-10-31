import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {
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


const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	padding: 8,
  	},

  	divide:{
    	flex:1,
 	},

  	inputPadding:{
	  	padding:5,
  	},

 	submit:{
		borderWidth:2,
		borderRadius:5,
		backgroundColor:"#000000",
		padding:5,
		minWidth:200,
		textAlign:'center',
		//elevation:1,
	},

  	submitText:{
		fontSize:25,
		textAlign:'center',
		fontWeight:'bold',
		color:'#ffffff'
	},

  	body:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
  	},

  	header:{
    	flex:1,
  	},

  	headerText:{
		fontSize:75,
		color:"#000000",
		alignSelf:'flex-start',
  	},

  	input:{
		//alignSelf:'stretch',
		fontSize:25,
		padding:10,
		fontFamily:'Roboto',
		backgroundColor:'transparent',
		flexDirection:'column',
		alignSelf:'stretch',
		textAlign:'center',
		minWidth:300,
		borderColor:"#000000",
		borderWidth:2,
		// borderRadius:10,
		elevation:1,
		// flex: 1,
	},
})