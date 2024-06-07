import React from 'react';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@gluestack-ui/themed';

const TVShowCategorySelect = ({ selectedValue, onValueChange }) => {
  const options = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'Popular', value: 'popular' },
    { label: 'On The Air', value: 'on_the_air' },
    { label: 'Top Rated', value: 'top_rated' },
  ];

  return (
    <Select value={selectedValue} onValueChange={onValueChange}>
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

export default TVShowCategorySelect;
