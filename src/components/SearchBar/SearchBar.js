import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './SearchBar.styles';

/**
 * Componente de barra de pesquisa reutilizável.
 *
 * @param {string} value - O valor atual da pesquisa.
 * @param {function} onChangeText - Função chamada quando o texto muda.
 * @param {function} onFilterPress - Função chamada ao tocar no ícone de filtro.
 */
const SearchBar = ({ value, onChangeText, onFilterPress }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={styles.icon.color} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar dependente"
        placeholderTextColor={styles.placeholder.color}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Ionicons name="filter-outline" size={24} color={styles.icon.color} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;