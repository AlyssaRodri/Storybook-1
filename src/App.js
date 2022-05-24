import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { LandingPage } from './pages/LandingPage';
import { ContactPage } from './pages/ContactPage'
import { StoryPage } from './pages/StoryPage'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />  
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/stories' element={<StoryPage />} />
        </Routes>      
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
