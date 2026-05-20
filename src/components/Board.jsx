import React from 'react';
import Square from './SquareComponent/Square'

class Board extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value:Array(9).fill(null),
            xTurn:true
        }
    }

    calculateWinner(value) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for(let i = 0;i<lines.length;i++) {
        const [a,b,c] = lines[i]
        if(value[a] && value[a] === value[b] && value[a] === value[c]) {
            return value[a]    
        } 
      }
      return null
    }

    handleClick(i) {
        const newValue = this.state.value.slice()
        if(this.calculateWinner(newValue)) return
        newValue[i] = this.state.xTurn ? 'X' : '0'
        this.setState({
             value:newValue,
             xTurn:!this.state.xTurn 
        }); 
    }

    renderSquare(i) {
      return (
        <Square value={this.state.value[i]} onClick={() => this.handleClick(i)}></Square>
      );
    }

    render() {
      const winner = this.calculateWinner(this.state.value)
      let status
      if(!winner) {
        status = "Player " + (this.state.xTurn ? 1 : 2) + " your turn"
      } else {
        status = "Winner is " + winner 
      }
      return (
        <div>
          <h1>Board</h1>
          <h2>{status}</h2>
          <table>
            <tr>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </tr>
            <tr>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </tr>
            <tr>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </tr>
          </table>
        </div>
      );
    }
}

export default Board;