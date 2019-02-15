import React, { Component } from "react";

// import Greeting from "./Greeting";
import GreetingLanding from "./GreetingLanding";
import NumComparison from "./NumComp";
import Counter from "./Counter";
import CounterLanding from "./CounterLanding";

import { BrowserRouter, Link, Route } from "react-router-dom";

class App2 extends Component {
  render() {
    // const links = [
    //   { url: "https://someurl.com", text: "First link" },
    //   { url: "https://someurl2.com", text: "Second link" }
    // ];

    const links = [
      { url: "/greetings", text: "Greetings" },
      { url: "/nums", text: "Nums" },
      { url: "/counter", text: "Counter" },
      { url: "/counter/synced", text: "Synced Counter" }
    ];
    return (
      <BrowserRouter>
        <header className="my-header">
          {links.map(this.renderLink)}
          {/* <Route
            path="/greetings"
            render={() => {
              return <Greeting name="Stas" />;
            }}
          /> */}

          {/* <Route path="/greetings" component={<Greeting name="Stas" />} /> */}

          <Route path="/greetings" component={GreetingLanding} />

          <Route
            path="/nums"
            render={() => {
              return <NumComparison a={3} b={5} />;
            }}
          />
          {/* <Route
            path="/counter"
            render={() => {
              return <Counter max={10} min={3} />;
            }}
          /> */}
          <Route path="/counter" component={CounterLanding} />

          <Route
            path="/counter/synced"
            render={() => {
              return <Counter step={2} />;
            }}
          />
        </header>
      </BrowserRouter>
    );
  }

  // renderLink(link) {
  //   return (
  //     <Link key={link.url} to={link.url}>
  //       {link.text}
  //     </Link>
  //   );
  // }
  renderLink({ url, text }) {
    return (
      <Link key={url} to={url}>
        {text}
      </Link>
    );
  }
}

export default App2;
