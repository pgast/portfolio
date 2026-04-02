import { ThemeProvider } from 'styled-components'
import { theme } from '../src/constants/theme'

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';
import SideDrawer from './components/SideDrawer'
import { Backdrop } from './components/SideDrawer/styled'
import { useState } from 'react';


function App() {
  const [view, setView] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeSideDrawer = () => setDrawerOpen(false);
  
  return (
    <ThemeProvider theme={theme}>
      <div id="container" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <SideDrawer show={drawerOpen} closeSideDrawer={closeSideDrawer}/>
        <Backdrop show={drawerOpen} onClick={closeSideDrawer}/>
        <Cursor />

        {/* Navigation now handles scroll-to-id instead of routing */}
        <Navigation 
          view={view} 
          setView={setView} 
          setDrawerOpen={setDrawerOpen}
        />

        <section id="home">
          <Home setView={setView} />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="about">
          <About />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;