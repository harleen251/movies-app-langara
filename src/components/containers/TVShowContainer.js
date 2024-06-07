import React from 'react';
import { Box, Center, Image, Text } from "@gluestack-ui/themed";

const TVShowContainer = ({ tvShow }) => {

    return (
        <Box width='100%' px={20}>
            <Center py={10}>
                
                <Text my={10} fontWeight="bold" fontSize="$2xl">{tvShow.name}</Text>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}}
                    style={{ width: 200, height: 300, borderRadius: 8 }}
                    accessibilityLabel={`Poster for ${tvShow.name}`}
                />
                <Text my={2}>{tvShow.overview}</Text>
                <Text my={2} fontSize='12px'>
                    <Text style={{ fontWeight: 'bold' , fontSize:'12px'}}>Popularity:</Text> {tvShow.popularity} | 
                    <Text style={{ fontWeight: 'bold' , fontSize:'12px'}}> First Air Date:</Text> {new Date(tvShow.first_air_date).toLocaleDateString()}
                </Text>
            </Center>
        </Box>
    );
};

export default TVShowContainer;
