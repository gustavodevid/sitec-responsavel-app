import React, { useState, useRef } from 'react';
import {
  View, 
  Text, 
  TextInput, 
  Image, 
  Alert 
} from 'react-native';

import AppButton from '../../components/AppButton/AppButton';

// styles
import styles from './ForgotPasswordScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

// maskarade email
const maskEmail = (email) => {
  if (!email) return '';
  // split "gu**@email.com"
  const [user, domain] = email.split('@');
  if (!user || !domain) return email; 
  
  // "gusta" -> "gu" + "****"
  const maskedUser = user.substring(0, 2) + '*'.repeat(user.length - 2);
  
  // "gu****@email.com"
  return `${maskedUser}@${domain}`;
};

/**
 * verify code forgot password
 * { navigation, route }
 */
const ForgotPasswordScreen = ({ navigation, route }) => {

  const { email } = route.params;

  // 2. Refs para focar no próximo input automaticamente
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  // 3. Estado para cada dígito
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const [d3, setD3] = useState('');
  const [d4, setD4] = useState('');

  // 4. Lógica para lidar com a validação
  const handleValidateCode = () => {
    const code = `${d1}${d2}${d3}${d4}`;
    if (code.length < 4) {
      Alert.alert('Erro', 'Por favor, preencha os 4 dígitos.');
      return;
    }
    
    console.log('Validando código:', code);
    Alert.alert('Sucesso', `Código validado: ${code} (simulação)`);
    // ResetPassword
    navigation.navigate('ResetPassword', { email: email, code: code });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Ilustração */}
        <Image
          style={styles.illustration}
          source={require('../../../assets/images/forgot-password-1.png')}
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={styles.title}>Redefinição de Senha</Text>

        {/* Texto descritivo com o email mascarado */}
        <Text style={styles.description}>
          Um email foi enviado para 
          <Text style={styles.emailText}> {maskEmail(email)}</Text>
        </Text>
        <Text style={styles.description}>
          Por favor, digite o código de verificação presente no email enviado.
        </Text>

        {/* (OTP) */}
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              setD1(text);
              if (text) input2Ref.current.focus();
            }}
            value={d1}
          />
          <TextInput
            ref={input2Ref}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              setD2(text);
              if (text) input3Ref.current.focus();
            }}
            value={d2}
          />
          <TextInput
            ref={input3Ref}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              setD3(text);
              if (text) input4Ref.current.focus();
            }}
            value={d3}
          />
          <TextInput
            ref={input4Ref}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={setD4}
            value={d4}
          />
        </View>

        {/* Botão de Validar (Variante Primária) */}
        <AppButton
          title="Validar Código"
          variant="primary" 
          onPress={handleValidateCode}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;