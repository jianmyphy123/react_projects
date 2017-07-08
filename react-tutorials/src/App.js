import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Todos from './pages/Todos';
import Archives from './pages/Archives';
import Settings from './pages/Settings';
import Featured from './pages/Featured';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Featured} />
              <Route path='/todos' component={Todos} />
              <Route path='/archives/:article' component={Archives} />
              <Route path='/settings' component={Settings} />
              <Route path='/featured' component={Featured} />
            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
