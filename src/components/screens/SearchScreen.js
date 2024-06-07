import React, { useState } from 'react';
import {
    Button, ButtonIcon, ButtonText, Center, FormControl, FormControlLabelText, HStack, Icon,
    Input, InputField, InputIcon, SearchIcon, VStack, Select, SelectTrigger, SelectInput,
    SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectItem, Text,
    FlatList,
    View,
    Image,
    ScrollView
} from "@gluestack-ui/themed";
import { searchMovies } from '../../services/api';
import { StyleSheet, TouchableOpacity } from 'react-native';


const SearchScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('multi');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const renderMovieItem = ({ item }) => (
        <View style={styles.movieItem}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={styles.movieImage}
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{item.title || item.name}</Text>
            {item.release_date && (
              <Text style={styles.movieDetails}>Release Date: {item.release_date}</Text>
            )}
            {item.first_air_date && (
              <Text style={styles.movieDetails}>First Air Date: {item.first_air_date}</Text>
            )}
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

    const options = [
        { label: 'Multi', value: 'multi' },
        { label: 'TV Show', value: 'tv' },
        { label: 'Movie', value: 'movie' },
    ];

    const handleSearch = async () => {
        if (!searchTerm) {
            setError('Please enter a search term.');
            return;
        }

        setIsLoading(true);
        try {
            const results = await searchMovies(searchTerm, searchType);
            setSearchResults(results);
            setError('');
        } catch (error) {
            console.error(error);
            setSearchResults([]); 
            setError('Error fetching search results.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchTypeChange = (value) => {
        setSearchType(value);
        setSearchResults([]); 
        setError(''); 
    };

    const handleMoreDetails = (item) => {
        console.log("moving to the details page ", item);
        navigation.navigate('movieDetails', { movie: item });
    };

    return (
        <ScrollView style={styles.container}>
            <Center px={4}>
                <VStack space={4} width="100%" p={5}>
                    <FormControl isRequired>
                        <FormControl.Label>
                            <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
                        </FormControl.Label>
                        <HStack width="100%" space={2} alignItems="center">
                            <Input width="80%" flexDirection="row" alignItems="center">
                                <InputIcon>
                                    <Icon as={SearchIcon} size="sm" />
                                </InputIcon>
                                <InputField
                                    placeholder="i.e. James Bond, CLI"
                                    value={searchTerm}
                                    onChangeText={setSearchTerm}
                                    style={{ flex: 1 }}
                                />
                            </Input>
                        </HStack>
                        <FormControl.Label>
                            <FormControlLabelText>Choose Search Type</FormControlLabelText>
                        </FormControl.Label>
                        <HStack space={6} alignItems="center" >
                            <Select value={searchType} onValueChange={handleSearchTypeChange} style={{ flex: 1, paddingRight: '20px'}}>
                                <SelectTrigger variant="outline" size="md">
                                    <SelectInput placeholder="Search Type" />
                                </SelectTrigger>
                                <SelectPortal>
                                    <SelectBackdrop />
                                    <SelectContent>
                                        <SelectDragIndicatorWrapper>
                                            <SelectDragIndicator />
                                        </SelectDragIndicatorWrapper>
                                        {options.map((option) => (
                                            <SelectItem key={option.value} label={option.label} value={option.value} />
                                        ))}
                                    </SelectContent>
                                </SelectPortal>
                            </Select>
                            <Button onPress={handleSearch} style={styles.searchButton}>
                                <ButtonIcon as={SearchIcon} mr='$2' />
                                <ButtonText>Search</ButtonText>
                            </Button>
                        </HStack>
                        {error && (
                            <Text color="red" mt={2}>
                                {error}
                            </Text>
                        )}
                    </FormControl>
                    {isLoading && (
                        <Center>
                            <Text>Loading...</Text>
                        </Center>
                    )}
                    {!isLoading && searchResults.length > 0 && (
                        <FlatList
                            data={searchResults}
                            renderItem={renderMovieItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={{ paddingBottom: 100 }}
                        />
                    )}
                    <Text style={styles.smallText}>Please select a Search type.</Text> 
                </VStack>
            </Center>
        </ScrollView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
    smallText: {
        fontSize: 12, 
        marginBottom: 8, 
    },
    searchButton: {
        width: 100,
        marginLeft:'20px'
    },
});
