
import React from 'react';
import { SafeAreaView } from 'react-native';
import RecipeDetailView from '../views/RecipeDetailView';

const RecipeDetailScreen = ({ navigation, route }) => {
  const { recipe } = route.params;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RecipeDetailView 
        recipe={recipe}
        onBack={handleBack}
      />
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;