import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import SuccessScreen from '../screens/SuccessScreen/SuccessScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import DependentDetailScreen from '../screens/DependentDetailScreen/DependentDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator 
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false 
      }}>

        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen} 
        />

        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        />

        <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} 
        />

        <Stack.Screen 
        name="ResetPassword" 
        component={ResetPasswordScreen} 
        />

        <Stack.Screen 
        name="Success" 
        component={SuccessScreen} 
        />

        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        />

        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />

        <Stack.Screen 
        name="DependentDetail" 
        component={DependentDetailScreen} 
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;