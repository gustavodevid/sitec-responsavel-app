import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/colors'; 

const { width, height } = Dimensions.get('window');

const OnboardingSlide = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginVertical: 48,
  },
  title: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textTitle, 
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: COLORS.textDescription,
    textAlign: 'center',
  },
});

export default OnboardingSlide;
