import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home'
import About from './views/About'


function App() {
  return (
    <div>
      <Router>
        <div className="relative min-h-screen">

          <div className="absolute bottom-0 w-full">
            <Footer/>
          </div>

          <div className="h-16 mb-4">
            <Header />
          </div>

          <div>
            
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
