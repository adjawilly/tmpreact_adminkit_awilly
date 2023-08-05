import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PageDashboard from './Pages/PagesExempleAdminkit/PageDashboard';
import PageProfile from './Pages/PagesExempleAdminkit/PageProfile';
import PageHomeExemple from './Pages/PagesExempleAdminkit/PageHomeExemple';
import PageBlankExemple from './Pages/PagesExempleAdminkit/PageBlankExemple';
import PageLoginExemple from './Pages/PagesExempleAdminkit/PageLoginExemple';
import PageNewCompteExemple from './Pages/PagesExempleAdminkit/PageNewCompteExemple';
import PageButtonExemple from './Pages/PagesExempleAdminkit/PageButtonExemple';
import PageFormulaireExemple from './Pages/PagesExempleAdminkit/PageFormulaireExemple';
import PageCardExemple from './Pages/PagesExempleAdminkit/PageCardExemple';
import PageIconExemple from './Pages/PagesExempleAdminkit/PageIconExemple';

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <NavBar/>

        <main className="content"> {/* Corps du site */}          
          <Routes>
            <Route path='/' element={<PageProfile/>}></Route>
            <Route path='*' element={<PageProfile/>}></Route>
            
            <Route path='/dashboard' element={<PageDashboard/>}></Route>
            <Route path='/profile' element={<PageProfile/>}></Route> 
            <Route path='/login' element={<PageLoginExemple/>}> </Route>
            <Route path='/newCompte' element={<PageNewCompteExemple />}></Route>
            <Route path='/blank' element={<PageBlankExemple/>}></Route> 

            <Route path='/button' element={<PageButtonExemple/>}></Route> 
            <Route path='/formulaire' element={<PageFormulaireExemple/>}></Route> 
            <Route path='/icons' element={<PageIconExemple/>}></Route>           
          </Routes>
        </main>


        <Footer/>
      </div>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
