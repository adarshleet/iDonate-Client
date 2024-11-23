import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Signup from './pages/Signup/Signup';
import Login from "./pages/Login/Login";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verifyOtp' element={<VerifyOtp />} />
          

        </Routes>
      </Router>
    </>
  )
}

export default App
