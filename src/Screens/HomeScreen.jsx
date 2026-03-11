import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MENU_ITEMS = [
  { id: '1', name: 'Pizza', price: '$10', description: 'Delicious pizza with tomato sauce and fresh basil.' },
  { id: '2', name: 'Burger', price: '$8', description: 'Juicy beef burger with lettuce and tomato.' },
  { id: '3', name: 'Pasta', price: '$12', description: 'Creamy Alfredo pasta with grilled chicken.' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('Details', { menu: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#ddd',
        opacity: 0.9,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: 'green',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
});

export default HomeScreen;
