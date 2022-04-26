import './App.css';
import Home from './pages/Home';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import Pokemon from './pages/Pokemon';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { PokemonProvider } from './context/PokemonContext';

function App() {

  const [progressBar, setProgressBar] = useState(null);

  const setProgress = (progress)=>{
    setProgressBar(progress);
  }

  return (
    // <PokemonProvider setProgress={setProgress} >
      <BrowserRouter>
          <LoadingBar color='#f11946' progress={progressBar} height={3} zIndex="5"/>
        <Routes>
          <Route path='/' element={ <Home setProgress={setProgress} /> }/>
          <Route path='/pokemon/:id' element={ <Pokemon/> }/>
        </Routes>
      </BrowserRouter>
    // </PokemonProvider>
  );
}

export default App;