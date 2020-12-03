import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div>
          <Square value="X" />
          <Square value="O" />
          <Square value="X" />
        </div>
        <div>
          <Square value="O" />
          <Square value="X" />
          <Square value="O" />
        </div>
        <div>
          <Square value="X" />
          <Square value="O" />
          <Square value="X" />
        </div>
      </div>
    );
  }
}

export default Board;
