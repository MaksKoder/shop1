import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';



export default function Main({ navigation }) {
  

  const [news, setNews] = useState([
    { name: 'Шахи', anons: '20$', full: 'Шахи - ... !', key: '1', img: 'https://images.pexels.com/photos/5502463/pexels-photo-5502463.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Карти',  anons: '10$', full: 'Карти ... ', key: '2', img: 'https://images.pexels.com/photos/6844385/pexels-photo-6844385.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Великий теніс',  anons: '100$', full: 'Теніс - ... !', key: '3', img: 'https://images.pexels.com/photos/13789945/pexels-photo-13789945.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ]);

  const [modalWindow, setModalWindow] = useState(false);
 
  return (
    <View style={gStyle.main}>
       <Modal visible={modalWindow}>
         <View style={gStyle.main}>
          <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
          <Text style={styles.title}>Форма додавання товару!</Text>
        </View>
      </Modal>

      <Ionicons name="add-circle" size={34} color="green"
        style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
       <Text style={[gStyle.title, styles.header]}>Головна сторінка</Text>
       <FlatList data={news} renderItem={({item}) => (
           <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
           <Image source={
            {
              width: '100%',
              height: 180,
              url: item.img
            }
           } />
             <Text style={styles.title} >{ item.name }</Text>
             <Text style={styles.anons} >{ item.anons }</Text>
        
           </TouchableOpacity>
           )} />
    </View>
  );

}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10
  },
  iconAdd: {
    textAlign: 'center'
  },
  header: {
    marginBottom: 10
  },
  item: {
    width: '100%',
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue'
  },
  anons: {
    fontSize: 15,
    textAlign: 'center',
    color: 'grey'
  }  
});
