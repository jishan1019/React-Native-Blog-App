/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './FlatCard';
import ElevatedCard from './ElevatedCard';
import FancyCard from './FancyCard';
import ActionCard from './ActionCard';

const BlogHome = () => {
  return (
    <View>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </View>
  );
};

export default BlogHome;
