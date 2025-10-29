import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60, 
  },
  illustration: {
    width: '60%', // Imagem menor
    height: 150,
    alignSelf: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textTitle,
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: COLORS.textDescription,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
  },
  emailText: {
    color: COLORS.textLink, // Laranja/amarelo
    fontWeight: 'bold',
  },
  // --- Estilos do Código OTP ---
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
    alignSelf: 'center',
    marginVertical: 40, 
  },
  otpBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textTitle,
  },
});

export default styles;