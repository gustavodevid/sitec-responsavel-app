import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.background,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  tagContainer: { 
    backgroundColor: COLORS.tagDefaultBg,
    borderWidth: 1,
    borderColor: COLORS.tagBorder,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start', 
    marginBottom: 4,
  },
  tagText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.tagDefaultText,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textTitle,
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    color: COLORS.tagLiveText, 
    marginRight: 4,
  },
  statusText: {
    fontSize: 14,
    color: COLORS.tagLiveText, 
    fontWeight: '600',
  },
  detailsText: {
    fontSize: 14,
    color: COLORS.searchText,
  },

  actionButtonRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 24,
    gap: 12, 
  },

  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 40,
    minHeight: 250, 
  },
  placeholderImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    opacity: 0.6,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textTitle,
    textAlign: 'center',
    marginTop: 16,
  },
  placeholderSubtitle: {
    fontSize: 14,
    color: COLORS.searchText,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;