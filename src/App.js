import { BrowserRouter, Routes, Route} from "react-router-dom";
// ^ removed link for build
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