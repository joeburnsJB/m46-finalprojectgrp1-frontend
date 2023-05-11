import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import AccountPage from './Pages/AccountPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
