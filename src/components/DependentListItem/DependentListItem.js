import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DependentListItem.styles';
import { COLORS } from '../../constants/colors';

/**
 * Item da lista de dependentes
 * @param {object} item - O objeto de dados
 * @param {function} onPress - Função chamada ao tocar no item.
 */
const DependentListItem = ({ item, onPress }) => {
  const { name, tags, status, avatar } = item;

  // Função interna para renderizar o Status (Live, Acompanhar)
  const renderStatus = () => (
    <View style={styles.statusContainer}>
      {status.live && (
        <>
          <Ionicons name="wifi" size={24} style={styles.statusText} />
          <Text style={styles.statusText}>Live</Text>
        </>
      )}
      {status.acompanhar && (
        <>
          <Text style={styles.statusSeparator}>•</Text>
          <Text style={[styles.statusText, { textDecorationLine: 'underline' }]}>Acompanhar</Text>
        </>
      )}
    </View>
  );

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image source={avatar} style={styles.avatar} />
      
      <View style={styles.infoContainer}>
        {/* Linha 1: Tags (ex: "Filho") */}
        <View style={styles.tagsRow}>
          {tags.map((tag) => (
            <View key={tag} style={[styles.tagContainerBase, styles.tagContainerDefault]}>
              <Text style={[styles.tagTextBase, styles.tagTextDefault]}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Linha 2: Nome */}
        <Text style={styles.name}>{name}</Text>
        
        {/* Linha 3: Status (Live, Acompanhar) */}
        {renderStatus()}
      </View>

      <Ionicons name="chevron-forward" size={24} color={COLORS.searchText} />
    </TouchableOpacity>
  );
};

export default DependentListItem;