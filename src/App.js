import React, { Component } from "react";
import "./App.scss";
import "./styles/_images.scss";
import "./styles/_grid.scss";
import Header from "./Components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Initializer");
    const movies = [
      {
        id: 0,
        title: "Avengers: Infinity War",
        overview: "Lorem ipsum dolor sit amet, consectetur."
      },
      {
        id: 1,
        title: "Spider-Man",
        overview: "Second Overview. Lorem ipsum dolor sit amet, consectetur."
      }
    ];

    let movieRows = [];

    movies.forEach(movie => {
      const movieRow = (
        <div key={movie.id} className="row">
          <div className="grid-12">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      );
      movieRows.push(movieRow);
    });

    this.state = { rows: movieRows };
  }

  render() {
    const inputStyle = {
      fontSize: "1.5em",
      color: "#3d3d3d",
      width: "100%",
      padding: "0.5em 1em",
      border: "1px solid #d0d0d0",
      marginBottom: "0.75em"
    };
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="grid-12">
              <div className="form-group">
                <input style={inputStyle} placeholder="Search for movie..." />
              </div>
            </div>
          </div>
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
