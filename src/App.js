import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <Navbar />


                </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
