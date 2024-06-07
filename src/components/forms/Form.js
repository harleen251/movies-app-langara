import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Box, Select, Text } from '@gluestack-ui/themed';

const Form = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  const options = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
      <Box style={styles.boxContainer}>
        <Text>Select Category:</Text>
        <Select>
          <Select.SelectTrigger variant="outline" size="md">
            <Select.SelectInput placeholder="Select category" value={selectedValue} onChange={handleValueChange} />
          </Select.SelectTrigger>
          <Select.SelectPortal>
            <Select.SelectBackdrop />
            <Select.SelectContent>
              {options.map((option) => (
                <Select.SelectItem key={option.value} label={option.label} value={option.value} />
              ))}
            </Select.SelectContent>
          </Select.SelectPortal>
        </Select>
      </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});

export default Form;
