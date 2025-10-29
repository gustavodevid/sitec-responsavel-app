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
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: '60%',
    height: 150,
    marginBottom: 48, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.authPrimaryText, 
    textAlign: 'center',
    marginBottom: 48, 
  },
});

export default styles;