import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons'; 
import styles from './AppHeader.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Cabeçalho principal da aplicação.
 *
 * @param {string} variant - 'home' (com avatar e sino) ou 'internal' (com botão 'Voltar').
 * @param {string} title - O título a ser exibido (usado na variante 'internal').
 */
const AppHeader = ({ variant = 'home', title = 'Acompanhar' }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Coloca o conteúdo do cabeçalho dentro da área segura */}
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        
        {/* Variante "Home" (Tela 1) */}
        {variant === 'home' && (
          <View style={styles.contentContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={require('../../../assets/images/avatar-placeholder.png')} 
                style={styles.avatar}
              />
              <View>
                <Text style={styles.profileName}>Rodrigo Silva • Silva</Text>
                <Text style={styles.profilePhone}>(83) 9 9186-4312 • Sousa-PB</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color={styles.icon.color} />
            </TouchableOpacity>
          </View>
        )}

        {/* Variante "Interna" (Telas 2, 3, 4) */}
        {variant === 'internal' && (
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={styles.icon.color} />
            </TouchableOpacity>
            
            <Text style={styles.title}>{title}</Text>
            
            {/* Um "espaçador" para manter o título centralizado */}
            <View style={styles.iconButtonSpacer} /> 
          </View>
        )}

      </SafeAreaView>
    </View>
  );
};

export default AppHeader;