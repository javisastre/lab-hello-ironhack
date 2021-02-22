import React, { Component } from "react";

const icon1 = "/images/icon1.png";
const icon2 = "/images/icon2.png";
const icon3 = "/images/icon3.png";
const icon4 = "/images/icon4.png";

class Bottom extends Component {
  render() {
    return (
      <div className="Bottom">
        <article>
          <img src={icon1} alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
          <img src={icon2} alt="" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
          <img src={icon3} alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </article>
        <article>
          <img src={icon4} alt="" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </div>
    );
  }
}

export default Bottom;
