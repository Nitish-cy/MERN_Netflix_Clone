import React from 'react'
import Home from './home/home';
import "./App.scss"
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Watch from './components/pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route, link } from "react-router-dom";
 const App=()=> {
  const user=true;
  return (
   // <Login></Login>
    //<Register></Register>
    
    //<Watch></Watch>
    //<Home></Home>
    <Router>
        <Routes>
          <Route exact path="/" element={user ?<Home></Home> : <Register></Register>}></Route>
          <Route  path="/register" element={!user ?<Register></Register>:<Home></Home> }></Route>
          <Route  path="/login" element={!user ?<Login></Login> : <Home></Home>}></Route>
          {user && (
            <>
              <Route path="/movies" element={<Home type="movie"></Home>}></Route>
              <Route path="/series" element={<Home type="series"></Home>}></Route>
              <Route path="/watch" element={<Watch></Watch>}></Route>
              <Route path="/watch" element={<Watch></Watch>}></Route>
              <Route path="/watch" element={<Watch></Watch>}></Route>
              </>
          )}
        </Routes>
    </Router>
  )
};
export default App;
