import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.searchText,
    paddingHorizontal: 16,
    paddingTop: 16, 
    paddingBottom: 8,
  },
  list: {
    flex: 1, 
  },
});

export default styles;