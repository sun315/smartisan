import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './style/reset.css';
import './style/App.css';
import './iconfont/iconfont.css';

import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import Myself from './components/Myself';
import Detail from './components/Detail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/myself" component={Myself} />
          <Route path="/Detail/:fid" component={Detail} />
        </div>
      </Router>
    )
  }
}


