import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { theme } from '../src/constants/theme'

import Work from './components/Work';
import Home from './components/Home';
// import About from './components/About';
import About from './components/LegacyAbout'
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';
import SideDrawer from './components/SideDrawer'
import { Backdrop } from './components/SideDrawer/styled'

const setLabelId = (view) => {
  switch(view) {
    case 'work':
      return 'workLabel';
    case 'about':
      return 'aboutLabel';
    default:
      return null;
  }
};

function App() {
  const [view, setView] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeSideDrawer = () => setDrawerOpen(false);
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div id="container">
          <SideDrawer show={drawerOpen} closeSideDrawer={closeSideDrawer}/>
          <Backdrop show={drawerOpen} onClick={closeSideDrawer}/>
          <Cursor />
          <Navigation 
            view={view} 
            setView={setView} 
            labelId={setLabelId(view)}
            setDrawerOpen={setDrawerOpen}
          />
          <Route 
            exact 
            path={"/"} 
            render={(props) => (
              <Home {...props} setView={setView} />
            )}
          />
          <Route 
            exact 
            path={"/work"} 
            render={(props) => (
              <Work {...props} setView={setView} />
            )} 
          />
          <Route exact path={"/about"} component={About} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;