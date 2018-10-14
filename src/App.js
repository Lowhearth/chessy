import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import './App.css';
import { Rook } from './pieces/Rook'
import { Tile } from './board/Tile'
import { EmptyTile } from './board/EmptyTile'
import { Bishop } from './pieces/Bishop'
import { Knight } from './pieces/Knight'
import { Queen } from './pieces/Queen'
import { King } from './pieces/King'
import { Pawn } from './pieces/Pawn'


class App extends Component {
  render() {


    return (
      <Board/>

    );
  }
}

export default App;
