import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './AppButton.styles'; 

/**
 * Botão principal da aplicação para formulários de autenticação.
 *
 * @param {string} title - O texto a exibir no botão.
 * @param {function} onPress - A função a ser executada quando o botão é pressionado.
 * @param {string} variant - 'primary' (verde) ou 'secondary' (amarelo).
 */
const AppButton = ({ title, onPress, variant = 'primary' }) => {
  // Seleciona os estilos do container e do texto com base na variante
  const containerStyle = variant === 'primary' 
    ? styles.containerPrimary 
    : styles.containerSecondary;
    
  const textStyle = variant === 'primary' 
    ? styles.textPrimary 
    : styles.textSecondary;

  return (
    <TouchableOpacity 
      style={[styles.containerBase, containerStyle]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.textBase, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;