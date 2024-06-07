import React from 'react';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@gluestack-ui/themed';

const MovieCategorySelect = ({ selectedValue, onValueChange }) => {
  const options = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
    <Select value={selectedValue} onValueChange={onValueChange} style={styles.select}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Popular" /> 
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent style={styles.selectContent}>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {options.map((option) => (
            <SelectItem key={option.value} label={option.label} value={option.value} />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

const styles = {
  select: {
    width: '50%', 
  },
  selectContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'white',
    elevation: 5,
  },
};

export default MovieCategorySelect;
