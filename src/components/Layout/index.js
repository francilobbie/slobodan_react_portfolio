import './index.scss';
import React from 'react';
import Sidebar from '../Sidebar';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About'
import Contact from '../Contact';
import Portfolio from '../Portfolio';

const Layout = (props) => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className=" bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
