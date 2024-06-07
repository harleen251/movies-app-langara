import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import MovieContainer from '../containers/MovieContainer';

const MovieDetailsScreen = () => {
    const route = useRoute();
    const { movie, navigation } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
    };

    if (!movie) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Movie data is not available</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleGoBack} style={{ position: 'absolute', top: 20, left: 20 }}>
                <Text>Back to Page</Text>
            </TouchableOpacity>
            <MovieContainer movie={movie} />
        </View>
    );
};

export default MovieDetailsScreen;
