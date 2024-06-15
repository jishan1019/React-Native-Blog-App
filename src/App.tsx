import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import BlogHome from './components/Blog/BlogHome';
import PassGeneratorHome from './components/PassGenerator/PassGeneratorHome';
import RandomColorGenerate from './components/RandomColorGenerate/RandomColorGenerate';
import RandomDice from './components/RandomDice/RandomDice';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <BlogHome /> */}
        {/* <PassGeneratorHome /> */}
        {/* <RandomColorGenerate /> */}
        <RandomDice />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
