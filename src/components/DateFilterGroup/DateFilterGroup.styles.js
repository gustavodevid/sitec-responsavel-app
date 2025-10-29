import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.searchText, // Cinza
    marginBottom: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  chipInactive: {
    backgroundColor: COLORS.searchBackground, // Fundo cinza claro
  },
  chipActive: {
    backgroundColor: COLORS.tagDefaultBg, // Fundo cinza mais escuro
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  chipTextInactive: {
    color: COLORS.searchText,
  },
  chipTextActive: {
    color: COLORS.textTitle, // Texto preto
  },
});

export default styles;