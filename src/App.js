import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import LoginRegister from './Pages/LoginRegister';
import UsersList from "./Pages/userslist/UsersList";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;