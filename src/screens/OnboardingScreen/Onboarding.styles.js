import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 24, 
    alignItems: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor:COLORS.primary,
    width: 16, 
  },
  dotInactive: {
    backgroundColor: COLORS.dotInactive, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    padding: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: COLORS.textSkip, 
  },
  nextButton: {
    backgroundColor:COLORS.primary, 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50, 
  },
  nextButtonText: {
    fontSize: 16,
    color: COLORS.background, 
    fontWeight: 'bold',
  },
});

export default styles;