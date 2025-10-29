import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import AppHeader from '../../components/AppHeader/AppHeader';
import AppTextInput from '../../components/AppTextInput/AppTextInput';
import AppButton from '../../components/AppButton/AppButton';

import styles from './ProfileScreen.styles';
import { COLORS } from '../../constants/colors';

/**
 * Tela de Perfil (Meus Dados)
 */
const ProfileScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('Silva');
  const [fullName, setFullName] = useState('Rodrigo Silva vieira');
  const [phone, setPhone] = useState('(83) 9 99345-8790');
  const [email, setEmail] = useState('RodrigoSilvaNeto@gmail.com');
  const [birthDate, setBirthDate] = useState('10/02/2000');
  const [cpf, setCpf] = useState('708963064-19');

  const handleUpdate = () => {
    Alert.alert('Dados Atualizados', '(Simulação)');
  };
  
  const handleLogout = () => {
    Alert.alert('Sair', 'Tem certeza que deseja sair?', [
      { text: 'Cancelar' },
      { text: 'Sair', style: 'destructive', onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {/* 1. Cabeçalho (Reutilizado) */}
      <AppHeader variant="internal" title="Meus Dados" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 2. Avatar com Botão de Edição */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/images/avatar-placeholder.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIconContainer}>
            <Ionicons name="pencil" size={18} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* 3. Botão "Editar dados" */}
        <AppButton
          title="Editar dados"
          variant="secondary"
          onPress={() => {}}
          style={styles.editDataButton} 
        />

        {/* 4. Formulário (Reutilizado) */}
        <AppTextInput label="Nickname" value={nickname} onChangeText={setNickname} />
        <AppTextInput label="Nome completo" value={fullName} onChangeText={setFullName} />
        <AppTextInput label="Telefone:" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <AppTextInput label="E-mail:" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <AppTextInput label="Data Nascimento" value={birthDate} onChangeText={setBirthDate} />
        <AppTextInput label="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />

        {/* 5. Botão "Atualizar" (Nova Variante) */}
        <AppButton
          title="Atualizar dados"
          variant="secondary"
          onPress={handleUpdate}
        />

        {/* 6. Link "Sair da Conta" */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;