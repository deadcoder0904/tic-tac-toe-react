import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Square = () => (<div className="square">A</div>)

class Board extends Component {
	render() {
		return (
				<div id="board">
					<div className="row">
						<Square />
						<Square />
						<Square />
					</div>
					<div className="row">
						<Square />
						<Square />
						<Square />
					</div>
					<div className="row">
						<Square />
						<Square />
						<Square />
					</div>
				</div>
			)
	}
}

class TicTacToe extends Component {
	render() {
		return (
				<div id="app">
					<h1>TicTacToe React</h1>
					<Board />
				</div>
			)
	}
}

ReactDOM.render(<TicTacToe />, document.getElementById('app'));
