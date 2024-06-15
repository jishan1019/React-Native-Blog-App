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
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>What is new in Js 21-ES12</Text>
        </View>

        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/003/183/small/woman-travel-relax-the-beach-raised-arms-happy-against-sunset-in-summer-free-photo.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
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
            <Text>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/jishan1019')}>
            <Text>Follow</Text>
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

  card: {},
  cardElevated: {},
  headingContainer: {},
  headingTitle: {},
  cardImage: {
    height: 180,
  },
  bodyContainer: {},
  footerContainer: {},
});
