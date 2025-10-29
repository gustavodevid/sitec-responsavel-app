import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './AppTextInput.styles';

/**
 * Componente reutilizável para um input de formulário com label.
 *
 * @param {string} label - O texto que aparece acima do input (ex: "Usuário:").
 * @param {string} placeholder - O texto de placeholder dentro do input.
 * @param {boolean} secureTextEntry - Esconde o texto (para senhas).
 * @param {function} onChangeText - Função chamada quando o texto muda.
 * @param {string} value - O valor atual do input.
 */
const AppTextInput = ({ 
  label, 
  placeholder, 
  secureTextEntry = false, 
  onChangeText, 
  value 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#B0B0B0" 
        autoCapitalize="none" 
      />
    </View>
  );
};

export default AppTextInput;