import React from 'react';
import Board from './Board';
import '../index.css';
import { connect } from 'react-redux';
import DefaultState from './../constants/DefaultState.js';


class Game extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     history: [{
  //       squares: Array(9).fill(null),
  //     }],
  //     stepNumber: 0,
  //     xIsNext: true
  //   };
  // }

  handleClick(i) {
    const { dispatch } = props;
    const action = {
      type: 'CHANGE_HISTORY',
      index: i
    };
    dispatch(action);

    const action = {
      type: 'SWITCH_TURNS',
    };
    dispatch(action);

    const action = {
      type: 'SET_STEPS',
    };
    dispatch(action);
  }
  //   // squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   if (this.calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  // }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: (step % 2) === 0,
  //   });
  // }

  // calculateWinner(squares) {
  //  const lines = [
  //    [0, 1, 2],
  //    [3, 4, 5],
  //    [6, 7, 8],
  //    [0, 3, 6],
  //    [1, 4, 7],
  //    [2, 5, 8],
  //    [0, 4, 8],
  //    [2, 4, 6],
  //  ];
  //  for (let i = 0; i < lines.length; i++) {
  //    const [a, b, c] = lines[i];
  //    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //      return squares[a];
  //    }
  //  }
  //  return null;
  // }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move:
      'Go to game start';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//
//   }
// }


export default connect()(Game);
