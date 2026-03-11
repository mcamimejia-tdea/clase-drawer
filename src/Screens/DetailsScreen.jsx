import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const DetailsScreen = ({route}) => {
    const { menu } = route.params;
  return (
    <View style={styles.container}>
      <Text>{menu.name}</Text>
      <Text>{menu.price}</Text>
      <Text>{menu.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
export default DetailsScreen;
