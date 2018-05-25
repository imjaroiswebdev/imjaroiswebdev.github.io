import React from 'react';
import { ThemeProvider } from 'styled-components'
import MainCard from './components/MainCard';
import Footer from './components/Footer';

// Breakpoints
const theme = {
  phonePort: '320px',
  phoneLand: '480px',
}

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <div>
        <MainCard />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
