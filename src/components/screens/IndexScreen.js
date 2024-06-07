import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@gluestack-ui/themed';
import MovieCategorySelect from '../ui/MovieCategorySelect';
import MoviesContainer from '../containers/MoviesContainer';
import { getMovies } from '../../services/api'; 

const IndexScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('popular');
  const [movies, setMovies] = useState([]);

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  useEffect(() => {
    fetchMovies(selectedValue);
  }, [selectedValue]);

  const fetchMovies = async (category) => {
    try {
      const fetchedMovies = await getMovies(category);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <View style={styles.container}>
      <MovieCategorySelect selectedValue={selectedValue} onValueChange={handleValueChange} />
      <MoviesContainer navigation={navigation} data={movies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexScreen;
