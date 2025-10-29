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
    width: '60%',
    height: 150,
    alignSelf: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textTitle,
    textAlign: 'center',
    marginBottom: 32, 
  },
});

export default styles;