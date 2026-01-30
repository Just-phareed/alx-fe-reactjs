import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>

        <SearchBar />
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
