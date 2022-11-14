import Navbar from "./Components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'


function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <header className="App-header">
      <Navbar />
      
      
      </header>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/account' element={<Account />} />


      </Routes>
      </AuthContextProvider>
      </div>
  );
}

export default App;
