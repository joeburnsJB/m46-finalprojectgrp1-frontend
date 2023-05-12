import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import LoginRegister from './Pages/LoginRegister';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;