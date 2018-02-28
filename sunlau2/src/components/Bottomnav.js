import React ,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import '../style/reset.css';
import '../style/Bottomnav.css';
import '../iconfont/iconfont.css';

class Bottomnav extends Component {
  render() {
    return (
      
        <div className="App">
          <ul className="bottomnav">
            <NavLink exact activeClassName="active" to="/">
              <li>
                <i className="iconfont">&#xe626;</i>
                <h4>首页</h4>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/category"> 
              <li>
                <i className="iconfont">&#xe60d;</i>
                <h4>分类</h4>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/cart">  
              <li>
                <i className="iconfont">&#xe658;</i>
                <h4>购物车</h4>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/myself">    
              <li>
                <i className="iconfont">&#xe698;</i>
                <h4>个人中心</h4>
              </li>
            </NavLink>  
          </ul>
        </div>    
    )
  }
}

export default Bottomnav