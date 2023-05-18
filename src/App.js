import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

import Header from "./components/header/Header"
import LoginRegister from "./Pages/loginRegister/LoginRegister"
import UsersList from "./Pages/userslist/UsersList"
import Homepage from "./Pages/homepage/Homepage"
import AccountPage from "./Pages/accountpage/accountpage"
import SearchPage from "./Pages/searchpage/searchresults"
import Footer from "./components/footer/Footer"



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/userlist" element={<UsersList />} />
        <Route path="/account-details" element={<AccountPage />} />
        <Route path="/search/*" element={<SearchPage />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
    
  )
}

export default App
