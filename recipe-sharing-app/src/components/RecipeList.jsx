import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes found.</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '20px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link to={`/recipes/${recipe.id}`}>View Details</Link>

          <br />

          {favorites.includes(recipe.id) ? (
            <button
              onClick={() => removeFavorite(recipe.id)}
              style={{ marginTop: '10px' }}
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              onClick={() => addFavorite(recipe.id)}
              style={{ marginTop: '10px' }}
            >
              Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
