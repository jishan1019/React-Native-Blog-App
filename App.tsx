import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import BlogHome from './components/Blog/BlogHome';
import PassGeneratorHome from './components/PassGenerator/PassGeneratorHome';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <BlogHome /> */}
        <PassGeneratorHome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
