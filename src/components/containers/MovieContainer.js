import React from 'react';
import { Box, Center, Image, Text } from "@gluestack-ui/themed";

const MovieContainer = ({ movie }) => {

    return (
        <Box width='100%' px={20}>
            <Center py={10}>
                
                <Text my={10} fontWeight="bold" fontSize="$2xl">{movie.title}</Text>
                <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
                style={{ width: 200, height: 300, borderRadius: 8 }}
                accessibilityLabel={`Poster for ${movie.title}`}
        
                />
                <Text my={2}>{movie.overview}</Text>
                <Text my={2} fontSize='12px'>
                    <Text style={{ fontWeight: 'bold' , fontSize:'12px'}}>Popularity:</Text> {movie.popularity} | 
                    <Text style={{ fontWeight: 'bold' , fontSize:'12px'}}> Release Date:</Text> {new Date(movie.release_date).toLocaleDateString()}
                </Text>
            </Center>
        </Box>
    );
};

export default MovieContainer;
