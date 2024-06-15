/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/003/183/small/woman-travel-relax-the-beach-raised-arms-happy-against-sunset-in-summer-free-photo.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>What is new in Js 21-ES12</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text numberOfLines={6} style={styles.bodyTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga
            ea! Totam labore dolorum sint, id consequuntur ut qui dignissimos
            atque autem, voluptatem esse iure nesciunt debitis, tenetur eum
            placeat perferendis aliquam quibusdam laboriosam veritatis!
            Corrupti, labore, perspiciatis dolorem amet velit ullam cupiditate
            distinctio ab nesciunt quis similique voluptate nihil.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.prothomalo.com/')}>
            <Text style={styles.footerButton}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/jishan1019')}>
            <Text style={styles.footerButton}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },

  card: {
    width: 320,
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
  headingContainer: {
    paddingHorizontal: 8,
  },
  headingTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  bodyContainer: {
    padding: 4,
    flex: 1,
  },
  bodyTitle: {
    color: 'black',
    fontSize: 14,
    paddingHorizontal: 6,
  },
  footerContainer: {
    paddingBottom: 20,
    paddingTop: 30,
  },
  footerButton: {
    backgroundColor: 'red',
    height: 40,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 8,
    borderRadius: 4,
    margin: 6,
  },
});
