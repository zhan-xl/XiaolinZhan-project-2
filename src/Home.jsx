import React, {Component} from "react";
import Normal from "./Normal";
import {Link} from "react-router-dom";

class Home extends Component {

  render() {
    return (
        <div>
          <h4>Welcome to my Wordle game.</h4>
          <div>Please choose your difficulty.</div>
          <Link to='normal'>
            <button>
              Normal
            </button>
          </Link>
          <Link to='difficult'>
            <button>Difficult</button>
          </Link>
        </div>
    );
  }
}

export default Home;