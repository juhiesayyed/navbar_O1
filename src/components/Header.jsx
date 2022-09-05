import React, { Component } from "react";
import "../styles.css";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <header>
        <div className="logo">
          <p>O(1) Coding Club</p>
        </div>
        <div className="logo2">
          <p>O(1)</p>
        </div>
        <div class="navigation">
          <nav
            id="navbar"
            className={this.state.clicked ? "navbar active" : "navbar"}
          >
            <ul class="nav-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Combo Offers</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </header>
    );
  }
}
export default Header;
