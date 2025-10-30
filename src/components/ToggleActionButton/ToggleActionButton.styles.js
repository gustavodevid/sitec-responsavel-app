import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  // --- Estilos Base ---
  containerBase: {
    flex: 1, // Para dividir o espaço
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  textBase: {
    fontSize: 12, // Fonte pequena
    fontWeight: '600',
    // fontFamily: 'Poppins-Medium',
  },
  icon: {
    marginRight: 8,
  },

  // --- Esquema Amarelo (Percurso) ---
  containerYellowOutline: {
    borderColor: COLORS.authSecondary, // Borda amarela-clara
    backgroundColor: 'transparent',
  },
  textYellowOutline: {
    color: COLORS.authSecondaryText, // Texto laranja/amarelo
  },
  containerYellowFilled: {
    borderColor: COLORS.authSecondary,
    backgroundColor: COLORS.authSecondary, // Fundo amarelo-claro
  },
  textYellowFilled: {
    color: COLORS.authSecondaryText,
  },

  // --- Esquema Verde (Interior) ---
  containerGreenOutline: {
    borderColor: COLORS.authPrimary, // Borda verde-clara
    backgroundColor: 'transparent',
  },
  textGreenOutline: {
    color: COLORS.authPrimaryText, // Texto verde-escuro
  },
  containerGreenFilled: {
    borderColor: COLORS.authPrimary,
    backgroundColor: COLORS.authPrimary, // Fundo verde-claro
  },
  textGreenFilled: {
    color: COLORS.authPrimaryText,
  },
});

export default styles;