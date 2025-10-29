import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%', // Ocupa a largura total
    marginBottom: 20, // Espaço entre os inputs
  },
  label: {
    fontSize: 14,
    color: COLORS.textLabel,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.textTitle,
  },
});

export default styles;