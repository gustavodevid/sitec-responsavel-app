import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.searchBackground, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVertical: 16,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 315,
    height: 60
  },
  icon: {
    color: COLORS.searchText, 
  },
  placeholder: {
    color: COLORS.searchText, 
  },
  input: {
    flex: 1, 
    fontSize: 16,
    color: COLORS.textTitle, 
    marginLeft: 8,
  },
});

export default styles;