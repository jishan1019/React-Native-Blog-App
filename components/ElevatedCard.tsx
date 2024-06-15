/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },

  container: {
    padding: 4,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 5,
  },

  cardOne: {
    backgroundColor: 'red',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'yellow',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  cardTwo: {
    backgroundColor: 'green',
  },

  cardThree: {
    backgroundColor: 'blue',
  },
});
