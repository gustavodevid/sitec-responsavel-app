import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './ToggleActionButton.styles';
import { COLORS } from '../../constants/colors';

/**
 * Botão de Ação que alterna entre preenchido e contornado.
 *
 * @param {boolean} isActive - Se o botão está no estado ativo (preenchido).
 * @param {string} title - O texto do botão.
 * @param {string} iconName - O nome do ícone (do Ionicons).
 * @param {string} colorScheme - 'yellow' ou 'green'.
 * @param {function} onPress - Ação do botão.
 */
const ToggleActionButton = ({ 
  isActive, 
  title, 
  iconName, 
  colorScheme = 'yellow', 
  onPress 
}) => {

  // --- Seleção de Estilos ---
  let containerStyle, textStyle, iconColor;

  if (colorScheme === 'yellow') {
    containerStyle = isActive ? styles.containerYellowFilled : styles.containerYellowOutline;
    textStyle = isActive ? styles.textYellowFilled : styles.textYellowOutline;
    iconColor = isActive ? COLORS.authSecondaryText : COLORS.authSecondaryText;
  } else { // 'green'
    containerStyle = isActive ? styles.containerGreenFilled : styles.containerGreenOutline;
    textStyle = isActive ? styles.textGreenFilled : styles.textGreenOutline;
    iconColor = isActive ? COLORS.authPrimaryText : COLORS.authPrimaryText;
  }
  
  // "Visualizar Interior" tem o ícone verde-claro no estado inativo
  if (colorScheme === 'green' && !isActive) {
    iconColor = COLORS.authPrimary; // Verde-claro
  }

  return (
    <TouchableOpacity 
      style={[styles.containerBase, containerStyle]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={iconName} size={20} color={iconColor} style={styles.icon} />
      <Text style={[styles.textBase, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ToggleActionButton;