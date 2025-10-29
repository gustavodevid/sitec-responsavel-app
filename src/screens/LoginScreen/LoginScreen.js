import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  Alert 
} from 'react-native';

// reuse components
import AppTextInput from '../../components/AppTextInput/AppTextInput';
import AppButton from '../../components/AppButton/AppButton';

// styles
import styles from './LoginScreen.styles';
import { COLORS } from '../../constants/colors';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // API 
    // Simulate
    console.log('Login com:', { username, password });
    Alert.alert('Login', 'Login efetuado com sucesso! (simulação!!)');
    // navigation.replace('HomeStack'); 
  };

  const handleForgotPassword = () => {
    // Navega para a próxima tela do fluxo
    console.log('Navegando para Redefinição de Senha');
    // navigation.navigate('ForgotPassword');
    Alert.alert('Navegação', 'Indo para "Esqueci a senha" (simulação)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Input User */}
        <AppTextInput
          label="Usuário:"
          placeholder="Digite seu usuário"
          value={username}
          onChangeText={setUsername}
        />

        {/* Input Password */}
        <AppTextInput
          label="Senha:"
          placeholder="Digite sua Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
        />

        {/* Button Entrar */}
        <AppButton
          title="Entrar"
          variant="secondary" 
          onPress={handleLogin}
        />

        {/* Link "Esqueci a senha" */}
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Esqueci a senha
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;