import { Home } from "./pages/Home";
import { Detail } from './pages/Detail'
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
