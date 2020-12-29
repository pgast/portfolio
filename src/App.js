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
          style={{ textDecoration: "none" }} 
        >
          <div id="logo">
            pg
          </div>
        </Link>
        <Navigation setView={setView} view={view} labelId={setLabelId(view)}/>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/work"} component={Work} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
      </div>
    </Router>
  );
}

export default App;