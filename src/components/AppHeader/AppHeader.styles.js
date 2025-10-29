import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.headerBackground, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  safeArea: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
    backgroundColor: '#C0C0C0', 
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.headerText,
  },
  profilePhone: {
    fontSize: 12,
    color: COLORS.headerText,
  },
  iconButton: {
    padding: 8, 
  },
  icon: {
    color: COLORS.headerText, 
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.headerText,
  },
  iconButtonSpacer: {
    width: 32, 
  },
});

export default styles;