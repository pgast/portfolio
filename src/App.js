import { ThemeProvider } from 'styled-components'
import { theme } from '../src/constants/theme'
import { useState } from 'react';

import Home    from './components/Home';
import Work    from './components/Work';
import About   from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Cursor  from './components/Cursor';


function App() {
  const [view, setView] = useState('home');

  return (
    <ThemeProvider theme={theme}>
      <div id="container" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Cursor />
        <Navigation view={view} setView={setView} />

        <section id="home">
          <Home />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
