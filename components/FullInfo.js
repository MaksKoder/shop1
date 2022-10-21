import React  from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { gStyle } from '../styles/style';




export default function Contacts({ route }) {
  
 
  return (
    <View style={gStyle.main}>
     <Image source={
            {
              width: '100%',
              height: 400,
              url: route.params.img
            }} />
     
       <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
       <Text style={styles.full} >{route.params.full}</Text>
       
    </View>
  );

}

const styles = StyleSheet.create({
   full: {
    fontSize: 40,
    textAlign: 'center',
    color: 'red',
    marginTop: 20
  },
  header: {
    fontSize: 35,
    marginTop: 25
  }
});