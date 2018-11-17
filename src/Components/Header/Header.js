import React , { Component } from 'react';
import LOGO from '../../assets/img/logo.png';

import './Header.css';
import Banner  from '../Banner/Banner';
class Header extends Component {
  passMenuActive = ()=> {
    this.props.showMenu();
  }
  render(){
    return(
      <div>
          <div className="res-header">
             <div className="row">
               <div className="col-md-3">
                   <img src={LOGO} alt="logo" className="img-fluid" />
               </div>
               <div className ="col-md-9">
                  <div className="menu-icon" onClick={this.passMenuActive}>
                      <p className="menu-icon-bg"></p>
                      <p className="menu-icon-bg"></p>
                      <p className="menu-icon-bg"></p>
                  </div>
               </div>
             </div>
          </div>
          <div className="Header" onClick={()=>{this.props.showMenuHeader("false")}}>
              <div className="header-content">
                      <div className="main-img-content">
                          <h1 className="main-head-txt">END THE DAY RIGHT</h1>
                          <p className="main-head-para">Delivering great food to your office to eat <br />
                          when working late or to take home for dinner</p>
                          <button className="main-btn btn btn-custom">ORDER NOW</button>
                          <div className="dots">
                              <span className="dot"></span>
                              <span className="dot"></span>
                              <span className="dot"></span>
                          </div>
                      </div>
             </div>
             <div className="mm">
                <Banner />
             </div>
          </div>
      </div>
    )
  }
}

export default Header;
