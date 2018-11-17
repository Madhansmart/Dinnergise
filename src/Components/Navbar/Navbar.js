import React, { Component } from 'react';
import LOGO from '../../assets/img/logo.png';
import './Navbar.css';
import Header from '../Header/Header';
class NavBar extends Component{
  constructor(){
    super()
    this.state = {
            navBarList : ["Order", "Sign in", "Contact us", "About"],
            checked : false,
            active : true,
            menuActive : true
         }
      this.showMenu = this.showMenu.bind(this);
      this.showMenuHeader = this.showMenuHeader.bind(this);
  }

     navBar = (listName, index)=> {
       return(
           <li key = {index}><a href="/#">{listName}</a><hr className={listName}/></li>
       )
     }
     showMenu = ()=> {
         this.setState({menuActive : !this.state.menuActive});
     }
     showMenuHeader = () => {
          this.setState({menuActive : true});
     }

       render() {
         return(
             <div className="navBar">
                 <div className="wrapper">
                     <nav id="sidebar" className={this.state.menuActive ? "sideMenuClass" : "none"}>
                         <div className="sidebar-header">
                             <img src={LOGO} alt="DINNERGISE" className="img-fluid logo"/>
                         </div>
                         <ul className="list-unstyled components">
                             <li className="active">
                                 <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                              </li><hr />
                                 {this.state.navBarList.map((list,  index)=>{
                                      return(
                                          this.navBar(list, index)
                                      )
                                  })}
                         </ul>
                     </nav>
                     <div id="content">
                        <Header showMenu={this.showMenu} showMenuHeader = {this.showMenuHeader}/>
                     </div>
                 </div>
           </div>
         );
       }
}


export default NavBar;
