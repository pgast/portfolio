import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Work from './components/Work';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [view, setView] = useState(null);
  const setLabelId = (view) => {
    switch(view) {
      case 'work':
        return 'workLabel';
      case 'about':
        return 'aboutLabel';
      case 'contact':
        return 'contactLabel';
      default:
        return null;
    }
  };
  
  return (
    <Router>
      <div>
        <Link 
          to='/' 
          onClick={() => setView(null)}
          style={{ textDecoration: "none", color: "black" }} 
        >
          <div id="logo">
            pg
          </div>
        </Link>
        <Navigation 
          view={view} 
          setView={setView} 
          labelId={setLabelId(view)}
        />
        <Route 
          exact 
          path={"/"} 
          render={(props) => (
            <Home {...props} setView={setView} />
          )}
        />
        <Route exact path={"/work"} component={Work} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
      </div>
    </Router>
  );
}

export default App;