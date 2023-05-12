import { BrowserRouter, Routes, Route} from "react-router-dom";
// ^ removed link for build
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