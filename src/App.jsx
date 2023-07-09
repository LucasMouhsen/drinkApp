import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import MainLayout from "./layout/layout";
import AppRoutes from "./routes";

function App() {
  return (
    <MainLayout>
      <CategoriesProvider>
        <DrinksProvider>
          <AppRoutes />
        </DrinksProvider>
      </CategoriesProvider>
    </MainLayout>
  );
}

export default App;
