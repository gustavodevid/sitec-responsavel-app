import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 

import AppHeader from '../../components/AppHeader/AppHeader';
import ToggleActionButton from '../../components/ToggleActionButton/ToggleActionButton';
import DateFilterGroup from '../../components/DateFilterGroup/DateFilterGroup';

import styles from './DependentDetailScreen.styles';

const renderStatusAndDetails = (item) => {
  const details = " | 9º ano B | Tarde"; 
  
  return (
    <View style={styles.statusContainer}>
      {item.status.live && (
        <>
          <Ionicons name="wifi" size={14} style={styles.statusIcon} />
          <Text style={styles.statusText}>Live</Text>
        </>
      )}
      <Text style={styles.detailsText}>{details}</Text>
    </View>
  );
};

/**
 * Tela de Detalhes do Dependente (Acompanhar)
 */
const DependentDetailScreen = ({ route, navigation }) => {
  // 1. Recebe o 'item' completo da HomeScreen
  const { dependentItem } = route.params;
  console.log(dependentItem);
  
  // 2. Estado para controlar a visão (percurso, interior, ou null)
  const [activeView, setActiveView] = useState(null);

  // 3. Funções para os botões de ação
  const handleToggleView = (viewName) => {
    // Se clicar no mesmo botão, desativa (volta para 'null')
    // Se clicar num botão diferente, ativa o novo
    setActiveView(activeView === viewName ? null : viewName);
  };

  // 4. Função para renderizar o conteúdo, por enquanto mockado
  const renderContent = () => {
    if (activeView === 'percurso') {
      return (
        // mock
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderTitle}>Mapa (WIP)</Text>
          <Text style={styles.placeholderSubtitle}>O componente do mapa será carregado aqui.</Text>
        </View>
      );
    }
    if (activeView === 'interior') {
      return (
        //  mock
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderTitle}>Vídeo (WIP)</Text>
          <Text style={styles.placeholderSubtitle}>O componente da câmara será carregado aqui.</Text>
        </View>
      );
    }

    // Estado "Vazio" 
    return (
      <View style={styles.placeholderContainer}>
        <Image 
          source={require('../../../assets/images/placeholder-selecione.png')} 
          style={styles.placeholderImage} 
        />
        <Text style={styles.placeholderTitle}>Selecione uma das opções</Text>
        <Text style={styles.placeholderSubtitle}>
          "Visualizar Percurso" ou "Visualizar Interior do veiculo"
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      {/* 1. Cabeçalho (Reutilizado) */}
      <AppHeader variant="internal" title={dependentItem.name} />

      {/* 2. Card de Perfil (Estilos locais desta tela) */}
      <View style={styles.profileHeader}>
        <Image source={dependentItem.avatar} style={styles.avatar} />
        <View style={styles.profileInfo}>
          {/* Tag (Amarela) */}
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{dependentItem.tags[0]}</Text>
          </View>
          {/* Nome */}
          <Text style={styles.profileName}>{dependentItem.name}</Text>
          {/* Status (Live, Série, Tarde) */}
          {renderStatusAndDetails(dependentItem)}
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* 3. Botões de Ação (Reutilizados) */}
        <View style={styles.actionButtonRow}>
          <ToggleActionButton
            title="Visualizar Percurso"
            iconName="map-outline" // Ícone do Ionicons
            colorScheme="yellow"
            isActive={activeView === 'percurso'}
            onPress={() => handleToggleView('percurso')}
          />
          <ToggleActionButton
            title="Visualizar Interior do veiculo"
            iconName="videocam-outline" // Ícone do Ionicons
            colorScheme="green"
            isActive={activeView === 'interior'}
            onPress={() => handleToggleView('interior')}
          />
        </View>

        {/* 4. Filtros de Data (Reutilizados) */}
        <DateFilterGroup onFilterChange={(filter) => console.log('Filtro mudou:', filter)} />

        {/* 5. Área de Conteúdo */}
        {renderContent()}

      </ScrollView>
    </SafeAreaView>
  );
};

export default DependentDetailScreen;