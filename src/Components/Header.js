import React, { Component } from "react";

class Header extends Component {
  render() {
    const headerParent = {
      backgroundColor: "#2d2d2d",
      width: "100%",
      color: "#fff"
    };
    return (
      <div>
        <header id="Header" className="main-header header" style={headerParent}>
          <div className="container">
            <div className="row align-items-center">
              <div className="grid-2">
                <img
                  className="img-responsive header-logo"
                  src="green-logo.svg"
                  alt="React Movie Search Logo"
                />
              </div>
              <div className="grid-8">
                <h1 className="header-title">React Movie Search</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
