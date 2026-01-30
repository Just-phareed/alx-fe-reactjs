import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== id
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  setSearchTerm: (term) =>
    set({ searchTerm: term }),

  filterRecipes: () => {
    const { recipes, searchTerm } = get();

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    set({ filteredRecipes: filtered });
  },
}));
