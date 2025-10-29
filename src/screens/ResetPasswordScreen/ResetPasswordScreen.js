import React, { useState } from 'react';
import {
  View, 
  Text, 
  Image, 
  Alert 
} from 'react-native';

import AppTextInput from '../../components/AppTextInput/AppTextInput';
import AppButton from '../../components/AppButton/AppButton';

import styles from './ResetPasswordScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela de Definição da Nova Senha
 * Recebe { navigation, route }
 */
const ResetPasswordScreen = ({ navigation, route }) => {
  // const { email, code } = route.params;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Validação 1: Verificar se os campos não estão vazios
    if (!newPassword || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha ambos os campos de senha.');
      return;
    }
    
    // Validação 2: Verificar se as senhas coincidem
    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem. Tente novamente.');
      return;
    }

    // API
    console.log('Redefinindo a senha com:', newPassword);
    Alert.alert('Sucesso', 'Senha redefinida! (simulação)');
    
    navigation.navigate('Success');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Ilustração (Cadeado) */}
        <Image
          style={styles.illustration}
          source={require('../../../assets/images/forgot-password-2.png')} 
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={styles.title}>Redefinição de Senha</Text>

        {/* Input de Nova Senha */}
        <AppTextInput
          label="Nova senha:"
          placeholder="Digite a nova senha"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />

        {/* Input de Repetir Senha */}
        <AppTextInput
          label="Repita a nova senha:"
          placeholder="Repita a nova senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />

        {/* Botão de Redefinir (Variante Primária) */}
        <AppButton
          title="Redefinir senha"
          variant="primary" // Usa os estilos verdes
          onPress={handleResetPassword}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;