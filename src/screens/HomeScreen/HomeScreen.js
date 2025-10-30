import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList,
  Alert
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/AppHeader/AppHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import DependentListItem from '../../components/DependentListItem/DependentListItem';

import { MOCK_DEPENDENTS } from '../../constants/mockData';
import styles from './HomeScreen.styles';

/**
 * Tela Principal (Dashboard)
 * Recebe { navigation } do React Navigation.
 */
const HomeScreen = ({ navigation }) => {
  // Estado para o valor da barra de pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  // Função para lidar com o clique num item da lista
  const handleItemPress = (item) => {
    navigation.navigate('DependentDetail', { dependentItem: item});
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      
      {/* 1. Cabeçalho Amarelo (Variante Home) */}
      <AppHeader variant="home" />

      {/* 3. Título da Lista */}
      <Text style={styles.listTitle}>Filtrar por</Text>
      
      {/* 2. Barra de Pesquisa */}
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFilterPress={() => Alert.alert('Filtro', 'Abrir modal de filtro...')}
      />


      {/* 4. Lista de Dependentes */}
      <FlatList
        data={MOCK_DEPENDENTS}
        renderItem={({ item }) => (
          <DependentListItem 
            item={item} 
            onPress={() => handleItemPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

    </SafeAreaView>
  );
};

export default HomeScreen;