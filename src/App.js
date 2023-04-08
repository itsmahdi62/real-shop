import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import Product from './pages/Product';
import { Provider } from 'react-redux';
import store from './store'
import Home from "./pages/Home"
import Login from './pages/Login';
import { useState } from 'react';
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
     <Header />
          <main>
            <Container>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product/:id"  element={<Product/>}/>
                {token && <Route path="/Login" element={<Login token={token} setToken={setToken}/>}/>}
            </Routes>
            </Container>
          </main>
          <Footer />
      </div>
    </BrowserRouter>
    </Provider>
)}
export default App;

