import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.backgroundButton,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.textButton, 
    fontSize: 16,
    fontWeight: 'bold', 
  },
})

export default styles;