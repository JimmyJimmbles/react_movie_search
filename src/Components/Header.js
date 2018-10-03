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
          <div className="row">
            <div className="col-12 col-sm-6">
              <img
                className="img-responsive header-logo"
                src="green-logo.svg"
                alt="React Movie Search Logo"
              />
            </div>
            <div className="col-12 col-sm-6">
              <h1 className="header-title">React Movie </h1>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
