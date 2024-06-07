import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@gluestack-ui/themed';
import TVShowsContainer from '../containers/TVShowsContainer';
import { getTVShows } from '../../services/api'; 
import TVShowCategorySelect from '../ui/TVShowCategorySelect';

const TVShowScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('popular');
  const [tvShows, setTvShows] = useState([]);

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  useEffect(() => {
    fetchTVShows(selectedValue);
  }, [selectedValue]);

  const fetchTVShows = async (category) => {
    try {
      const fetchedTvShows = await getTVShows(category);
      console.log("fetched tv shows are, ", fetchedTvShows);
      setTvShows(fetchedTvShows);
    } catch (error) {
      console.error('Error fetching TV Shows:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TVShowCategorySelect selectedValue={selectedValue} onValueChange={handleValueChange} />
      <TVShowsContainer navigation={navigation} data={tvShows} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TVShowScreen;
