import React from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';

const MoviesContainer = ({ navigation, data, searchData }) => {

    const renderMovieItem = ({ item }) => (
    
      <View style={styles.movieItem}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.movieImage}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.movieDetails}>Release Date: {item.release_date}</Text>
          <Text style={styles.movieDetails}>Popularity: {item.popularity}</Text>
          <TouchableOpacity
            style={styles.moreDetailsButton}
            onPress={() => handleMoreDetails(item)}
          >
            <Text style={styles.moreDetailsText}>More Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const handleMoreDetails = (movie) => {
      navigation.navigate('Show', { movie });
    };

    return (
      <View style={styles.container}>
        {data.length > 0 && (
          <FlatList
            data={data}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.movieList}
          />
        )}
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  movieList: {
    marginTop: 16,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDetails: {
    marginTop: 4,
    fontSize: 14,
  },
  moreDetailsButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },  
  moreDetailsText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MoviesContainer;
