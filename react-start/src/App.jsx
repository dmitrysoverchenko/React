import React, { Component } from "react";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <>
            <Button
              text={"Open first modal"}
              backgroundColor={"#3A2FAC"}
              onClick={this.function}
            />
            <Button
              text={"Open second modal"}
              backgroundColor={"#5F9A13"}
              onClick={this.gunction}
            />
          </>
        </header>
      </div>
    );
  }
}

export default App;
