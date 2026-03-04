import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<GamesList />} />
            <Route path="/games/:id" element={<GameDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}