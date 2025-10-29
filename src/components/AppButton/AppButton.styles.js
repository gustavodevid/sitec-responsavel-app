import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  // Style Base
  containerBase: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
  },
  textBase: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // --- Variante Primária (Verde) ---
  containerPrimary: {
    backgroundColor: COLORS.authPrimary,
  },
  textPrimary: {
    color: COLORS.authPrimaryText,
  },

  // --- Variante Secundária (Amarelo) ---
  containerSecondary: {
    backgroundColor: COLORS.authSecondary, // Fundo amarelo-claro
  },
  textSecondary: {
    color: COLORS.authSecondaryText, // Texto laranja/amarelo-escuro
  },
});

export default styles;