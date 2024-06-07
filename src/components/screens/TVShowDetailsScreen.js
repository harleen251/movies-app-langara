import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import TVShowContainer from '../containers/TVShowContainer';

const TVShowDetailsScreen = () => {
  const route = useRoute();
  const { tvShow } = route.params;

  if (!tvShow) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TV show data is not available</Text>
      </View>
    );
  }

  return <TVShowContainer tvShow={tvShow} />;
};

export default TVShowDetailsScreen;
