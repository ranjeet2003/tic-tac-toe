import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
    state = {
        squares: ['', '', '', '', '', '', '', '', ''],
        xIsNext: true
    }

    handleClick = number => () => {
        // console.log(number)
        if(this.state.squares[number]) {
            // there is already an X or O there then we return from function so that it can't be overwritten
            return;
        }
        const newSquares = [...this.state.squares]

        newSquares[number] = this.state.xIsNext ? 'X':'O'
        this.setState ({
            squares: newSquares,
            xIsNext: !this.state.xIsNext
        })

    }

    render() {
        const { squares, xIsNext } = this.state
        return (
            <div className="Board">
            <h1>Next Step: { xIsNext ? 'X' : 'O'}</h1>
                <div className = "Row">
                    <Square value={ squares[0] } onClick={this.handleClick(0)} />
                    <Square value={ squares[1] } onClick={this.handleClick(1)} />
                    <Square value={ squares[2] } onClick={this.handleClick(2)} />
                </div>
                <div className = "Row">
                    <Square value={ squares[3] } onClick={this.handleClick(3)} />
                    <Square value={ squares[4] } onClick={this.handleClick(4)} />
                    <Square value={ squares[5] } onClick={this.handleClick(5)} />
                </div>
                <div className = "Row">
                    <Square value={ squares[6] } onClick={this.handleClick(6)} />
                    <Square value={ squares[7] } onClick={this.handleClick(7)} />
                    <Square value={ squares[8] } onClick={this.handleClick(8)} />
                </div>
        </div>
        );
    }
}

export default Board;
