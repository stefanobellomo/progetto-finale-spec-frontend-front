import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import DefaultLayout from "./layouts/DefaultLayout";
import GameDetails from "./pages/GameDetails";
import GamesList from "./pages/GamesList";
import Favourites from "./pages/Favourites";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<GamesList />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App