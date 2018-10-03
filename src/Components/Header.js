import React, { Component } from "react";

class Header extends Component {
  render() {
    const headerStyles = {
      backgroundColor: "#2d2d2d",
      width: "100%"
    };
    return (
      <div>
        <header id="Header" className="main-header header" style={headerStyles}>
          <div className="col-12 col-sm-4">
            <img
              className="img-responsive header-logo"
              src="green-logo.svg"
              alt="React Movie Search Logo"
            />
          </div>
          <div className="col-12 col-sm-8">
            <h1 className="header-title">React Movie </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
