import React from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';

const TVShowsContainer = ({ navigation, data }) => {

  console.log(" data inside TVShowsContainer", data);

  const renderTVShowItem = ({ item }) => (
    <View style={styles.tvShowItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.tvShowImage}
      />
      <View style={styles.tvShowInfo}>
        <Text style={styles.tvShowTitle}>{item.name}</Text>
        <Text style={styles.tvShowDetails}>First Air Date: {item.first_air_date}</Text>
        <Text style={styles.tvShowDetails}>Popularity: {item.popularity}</Text>
        <TouchableOpacity
          style={styles.moreDetailsButton}
          onPress={() => handleMoreDetails(item)}
        >
          <Text style={styles.moreDetailsText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleMoreDetails = (tvShow) => {
    console.log("data being sent is ", tvShow);
    navigation.navigate('TVShowDetails', { tvShow });
  };

  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderTVShowItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.tvShowList}
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
  tvShowList: {
    marginTop: 16,
  },
  tvShowItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  tvShowImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  tvShowInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  tvShowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tvShowDetails: {
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

export default TVShowsContainer;
