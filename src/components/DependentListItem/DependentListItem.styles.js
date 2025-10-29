import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.searchBackground, 
    borderRadius: 8,         
    marginHorizontal: 16,     
    marginBottom: 12,         
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1, 
  },
  
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 4, 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textTitle,
    marginBottom: 6, 
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.tagLiveText,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: COLORS.tagLiveText, 
    fontWeight: '600',
  },
  statusSeparator: {
    fontSize: 14,
    color: COLORS.searchText, 
    marginHorizontal: 6,
  },
  tagContainerBase: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 6,
  },
  tagTextBase: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  tagContainerDefault: {
    backgroundColor: COLORS.tagDefaultBg,
    borderWidth: 1,
    borderColor: COLORS.tagBorder
  },
  tagTextDefault: {
    color: COLORS.tagDefaultText,
  },
});

export default styles;