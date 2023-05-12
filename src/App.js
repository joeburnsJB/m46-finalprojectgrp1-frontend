import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import LoginRegister from './Pages/LoginRegister';
import UsersList from "./Pages/userslist/UsersList";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;