import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './DateFilterGroup.styles';

const FILTERS = ['Hoje', 'Ontem', '7d', '20d', '30d'];

/**
 * Grupo de botões de filtro de data.
 *
 * @param {function} onFilterChange - Função chamada com o filtro selecionado.
 */
const DateFilterGroup = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]); // 'Hoje' é o padrão

  const handlePress = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtro</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <TouchableOpacity
              key={filter}
              style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
              onPress={() => handlePress(filter)}
            >
              <Text style={[styles.chipText, isActive ? styles.chipTextActive : styles.chipTextInactive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DateFilterGroup;