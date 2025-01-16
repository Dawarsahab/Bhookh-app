
import React from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList, 
  RefreshControl,
  Text 
} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { colors, typography, spacing } from '../constants/styles';
import { strings } from '../constants/strings';

const HomeView = ({ 
  recipes, 
  loading, 
  refreshing, 
  onRefresh, 
  error,
  userName 
}) => {
  if (loading && !refreshing) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.greeting}>
        {strings.welcomeMessage}{userName}!
      </Text>
      <Text style={styles.subtitle}>
        {strings.recipesTitle}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <RecipeCard 
            recipe={item}
            onPress={() => onRecipePress(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            {strings.noRecipesMessage}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  header: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  greeting: {
    ...typography.heading,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.subheading,
    color: colors.grey,
  },
  listContainer: {
    paddingBottom: spacing.xl,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
  },
  emptyText: {
    ...typography.body,
    textAlign: 'center',
    padding: spacing.xl,
    color: colors.grey,
  }
});

export default HomeView;