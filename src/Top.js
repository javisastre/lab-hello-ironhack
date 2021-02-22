import React, { Component } from "react";

class Top extends Component {
  render() {
    return (
      <div className="Top">
        <nav>
          <img src="/images/ironhack-logo.svg" alt="ironhack-logo" />
          <img src="/images/menu-top.svg" alt="menu" />
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <a href="#">Awesome!</a>
      </div>
    );
  }
}

export default Top;
