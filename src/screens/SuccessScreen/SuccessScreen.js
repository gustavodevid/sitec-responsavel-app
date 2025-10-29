import React from 'react';
import { 
  View, 
  Text, 
  Image,
  StatusBar
} from 'react-native';

import AppButton from '../../components/AppButton/AppButton';

import styles from './SuccessScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Tela final de Sucesso na Redefinição de Senha.
 * Recebe { navigation }
 */
const SuccessScreen = ({ navigation }) => {

  const handleContinue = () => {
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        
        {/* Ilustração (Escudo de Sucesso) */}
        <Image
          style={styles.illustration}
          source={require('../../../assets/images/forgot-password-3.png')} 
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={styles.title}>
          Senha redefinida com sucesso
        </Text>

        <AppButton
          title="Continuar"
          variant="primary" 
          onPress={handleContinue}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;