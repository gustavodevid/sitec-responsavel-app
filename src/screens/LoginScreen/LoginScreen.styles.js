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
    justifyContent: 'center', 
  },
  illustration: {
    width: '80%',
    height: 200,
    alignSelf: 'center', 
    marginBottom: 48, 
  },
  forgotPasswordButton: {
    marginTop: 24, 
    alignItems: 'center', 
  },
  forgotPasswordText: {
    color: COLORS.textLink, 
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;