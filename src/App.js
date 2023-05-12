import { BrowserRouter, Routes, Route} from "react-router-dom";
// ^ removed link for build
import './App.css';

import Header from './components/header/Header';
import LoginRegister from './Pages/loginRegister/LoginRegister';
import UsersList from "./Pages/userslist/UsersList";
import Homepage from './Pages/homepage/Homepage';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/userlist" element={<UsersList />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;