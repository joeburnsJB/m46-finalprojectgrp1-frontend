import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import AccountPage from './Pages/AccountPage';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;