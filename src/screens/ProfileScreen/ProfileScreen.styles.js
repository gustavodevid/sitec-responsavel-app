import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40, 
  },
  
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 24,
    position: 'relative', 
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: COLORS.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: '30%', 
    backgroundColor: COLORS.background,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  editDataButton: {
    width: 'auto', 
    alignSelf: 'center', 
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20, 
    marginTop: 0,
    marginBottom: 24,
  },
  logoutButton: {
    alignItems: 'center',
    marginTop: 32,
  },
  logoutText: {
    color: COLORS.textDanger, 
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;