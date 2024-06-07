// App.js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/layout/Header';
import MoviesContainer from './src/components/containers/MoviesContainer';
import AppStack from './src/components/stacks/AppStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <View style={styles.container}>
          <AppStack />
        </View>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Main screen background color
  },
});

export default App;
