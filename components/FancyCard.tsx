/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trading Place</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/happy-couple-love-travel-raised-hands-cliff-happy-couple-love-travel-raised-hands-cliff-norway-man-woman-112188598.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Himchori</Text>
          <Text style={styles.cardLabel}>Khulna, Bangladesh</Text>
          <Text style={styles.cardDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            modi optio, magni nam consequatur atque, consectetur iste sed
            corporis earum ut magnam expedita accusantium voluptas eius qui
            minus quis nemo.
          </Text>
          <Text style={styles.cardFooter}>Khulna, Bangladesh</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    width: 320,
    height: 360,
    margin: 'auto',
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 8,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    color: 'black',
    fontSize: 12,
    marginBottom: 4,
    marginTop: 6,
  },
  cardFooter: {
    color: 'black',
    fontSize: 12,
  },
});
