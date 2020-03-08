import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

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

          <div className="px-3 pb-16">
            
              <Switch>
                <Route exact path="/">
                  <h1>Home</h1>
                </Route>

                <Route path="/about">
                  <h1>This is the about</h1>
                </Route>
              </Switch>
            
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
