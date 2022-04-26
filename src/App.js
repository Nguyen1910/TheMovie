import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import HomePage from "./pages/Home";
import Detail from "./pages/Detail";
import tmdbApi, { CATEGORY } from "./api/tmdbApi";
import Category from "./pages/Category";
import ViewMore from "./pages/ViewMore";

function App() {
  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/movies"
          element={<Category category={CATEGORY.movie} />}
        ></Route>
        <Route
          path="/tvseries"
          element={<Category category={CATEGORY.tv} />}
        ></Route>
        <Route
          path="/:category/Detail/:id"
          element={<Detail category={CATEGORY.tv} />}
        ></Route>
        <Route
          path="/:category/:type"
          element={<ViewMore category={CATEGORY.tv} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
