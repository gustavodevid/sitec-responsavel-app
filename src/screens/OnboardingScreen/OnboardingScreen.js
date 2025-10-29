import React, { useState, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import OnboardingSlide from '../../components/OnboardingSlide';
import slides from '../../constants/onboardingData';
// style
import styles from './Onboarding.styles.js';
//Reuse button
import Button from '../../components/Button/Button.js';

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Login'); 
    }
  };

  const skipOnboarding = () => {
    navigation.replace('Login'); 
  };

  const Pagination = () => (
    <View style={styles.paginationContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );

  const isLastSlide = currentIndex === slides.length - 1

  return (
    <View style={styles.container}>

      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={({ item }) => <OnboardingSlide item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          bounces={false}
        />
      </View>

      {/* Rodapé com Paginação e Botões */}
      <View style={styles.footer}>
        <Pagination />
        
        {/* Botões do rodapé */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={skipOnboarding} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Pular</Text>
          </TouchableOpacity>
          <Button
            title={isLastSlide ? 'Começar' : 'Próximo >'}
            onPress={scrollToNext}
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen; 