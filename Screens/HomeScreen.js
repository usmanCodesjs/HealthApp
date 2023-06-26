import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View >
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Diseases</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Symptom checker</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Local Pharmicy/Medical Center</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Help</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    button:{
        
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:80,
        borderRadius:30,
        backgroundColor:"green",
        width:"70%",
        height:90
    },

    buttonText:{
       fontSize:30,
       fontWeight:"bold",
       color:"white",
       marginTop:75,
       justifyContent:"center",
       alignItems:"center"
      


    }
})