import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />  
        </Routes>      
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
