import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';




const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch> {/*It helps rendering the first Route that matches the URL, and it stops.
      If it cannot find a match,it will falls back to "catch all route" and render NotFound */}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/courses" component={Courses}/>
      <Route exact path="/teachers" component={Teachers}/>
      {/*Using URL parameters */}
      <Route path="/teachers/:topic/:name" component={Featured} />
      <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
  
);

export default App;