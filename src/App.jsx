import'./App.css';
import AppHeader from './components/Header'
import CategoriesScreen from './pages/CategoriesScreen';
import WelocmeScreen from './pages/WelocmeScreen';
import NewCategoriesScreen from './pages/NewCategoriesScreen';
import EditCategoriesScreen from './pages/EditCategoriesScreen';
import SubCategoriesScreen from './pages/SubCategoriesScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="categories" element={<CategoriesScreen />} />
          <Route path="categories/:categoryId" element={<EditCategoriesScreen />} />
          <Route path="categories/new" element={<NewCategoriesScreen />} />

          <Route path="subcategories" element={<SubCategoriesScreen />} />
          <Route path="subcategories/:subcategoryId" element={<EditCategoriesScreen />} />
          <Route path="subcategories/new" element={<NewCategoriesScreen />} />

          <Route path="items" element={<CategoriesScreen />} />
          <Route path="items/:itemId" element={<EditCategoriesScreen />} />
          <Route path="items/new" element={<NewCategoriesScreen />} />

          <Route path="*" element={<WelocmeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
