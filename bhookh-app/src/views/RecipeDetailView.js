
import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { colors, typography, spacing, shadows } from '../constants/styles';
import { strings } from '../constants/strings';

const RecipeDetailView = ({ recipe, onBack }) => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <Image
          source={{ uri: recipe.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
        
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          
          <View style={styles.metaInfo}>
            <Text style={styles.metaText}>
              {recipe.getFormattedCookingTime()}
            </Text>
            <Text style={styles.metaText}>
              {`${recipe.servings} servings`}
            </Text>
            <Text style={styles.metaText}>
              {recipe.cuisine}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {strings.ingredients}
            </Text>
            {recipe.ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.ingredient}>
                • {ingredient}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {strings.instructions}
            </Text>
            <Text style={styles.instructions}>
              {recipe.instructions}
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={onBack}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    ...typography.heading,
    marginBottom: spacing.md,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: spacing.lg,
  },
  metaText: {
    ...typography.caption,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.subheading,
    marginBottom: spacing.md,
  },
  ingredient: {
    ...typography.body,
    marginBottom: spacing.xs,
  },
  instructions: {
    ...typography.body,
    lineHeight: 24,
  },
  backButton: {
    position: 'absolute',
    top: spacing.lg,
    left: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.medium,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.black,
  }
});

export default RecipeDetailView;