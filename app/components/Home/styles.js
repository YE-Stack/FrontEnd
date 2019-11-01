import { StyleSheet } from 'react-native'
export default StyleSheet.create({
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
        padding:15,
      },

      resultText:{
        fontSize:30,
        // fontWeight:'bold',
        color:"#000000",
        fontFamily:'Roboto',
        alignSelf:'center',
    },

    headerText:{
        fontSize:45,
        // fontWeight:'bold',
        color:"#000000",
        alignSelf:'flex-start',
      },
      
      input:{
        //alignSelf:'stretch',
        fontSize:25,
        opacity:0.5,
        padding:10,
        fontFamily:'Roboto',
        backgroundColor:'transparent',
        flexDirection:'column',
        alignSelf:'stretch',
        textAlign:'center',
        minWidth:300,
        borderColor:"#ffffff",
        borderWidth:4,
        // borderRadius:10,
        elevation:1,
        // flex: 1,
    },
})