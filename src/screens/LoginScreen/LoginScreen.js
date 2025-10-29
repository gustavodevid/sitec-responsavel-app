import React, { useState } from 'react';
import { 
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
import { SafeAreaView } from 'react-native-safe-area-context';

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
    navigation.navigate('ForgotPassword', { email: username });
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