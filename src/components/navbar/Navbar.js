import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import logo from '../footer/e.png';

class Navbar extends Component {
  // onclick state for responsive navbar
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img className="logo" src={logo} alt="logo" />
        </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            //mapping indexes from menuitems
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {/* <button className="Signbtn">Sign Up</button> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
