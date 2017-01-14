import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Square = ({ value, onClick }) => {
	return (
		<div className={`square ${value ? 'active':''}`}  onClick={() => onClick(value)}>
			{ value }
		</div>
	)
}

class Board extends Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
		this.renderSquare = this.renderSquare.bind(this)
		this.whatIsNext = this.whatIsNext.bind(this)
		this.isWinner = this.isWinner.bind(this)
		this.playAgain = this.playAgain.bind(this)
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		}
	}

	isWinner(x) {
		const wins = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,4,8],
			[2,4,6],
			[0,3,6],
			[1,4,7],
			[2,5,8]
		];

		for(let win of wins) {
			const [ a, b, c] = win
			if (x[a] && x[a] === x[b] && x[a] === x[c])
				return x[a]
		}
		return null
	}

	handleClick(i) {
		if(this.isWinner(this.state.squares) || this.state.squares[i])
			return
		const newArray = [...this.state.squares];
		newArray[i] = this.whatIsNext();
		this.setState({
			squares: newArray,
			xIsNext: !this.state.xIsNext
		})
	}

	renderSquare(i) {
		return <Square onClick={() => this.handleClick(i)} value={this.state.squares[i]}/>
	}

	whatIsNext() {
		return this.state.xIsNext ? 'X' : 'O'
	}

	playAgain() {
		this.setState({
			squares: Array(9).fill(null)
		})
	}

	render() {
		const winner = this.isWinner(this.state.squares)
		const status = winner ? `Winner : ${winner}` : `Next Move : ${this.whatIsNext()}`
		return (
				<div id="game">
					<div id="board">
						<div className="row">
							{this.renderSquare(0)}
							{this.renderSquare(1)}
							{this.renderSquare(2)}
						</div>
						<div className="row">
							{this.renderSquare(3)}
							{this.renderSquare(4)}
							{this.renderSquare(5)}
						</div>
						<div className="row">
							{this.renderSquare(6)}
							{this.renderSquare(7)}
							{this.renderSquare(8)}
						</div>
					</div>
					<div id="status">{status}</div>
					<button id="play_game" onClick={this.playAgain}>Play Game</button>
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
