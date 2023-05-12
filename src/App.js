import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import LoginRegister from './Pages/loginRegister/LoginRegister';
import UsersList from "./Pages/userslist/UsersList";

const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/userlist" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;