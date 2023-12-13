import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";

// import utils components
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
