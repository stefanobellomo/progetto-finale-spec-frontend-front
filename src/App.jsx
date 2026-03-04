import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<GamesList />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}