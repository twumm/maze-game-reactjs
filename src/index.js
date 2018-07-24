import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import player from './anonymous_hacker.png'
import coin from './bitcoin.png'

let customBoard = []
let rows = []
let columns = []
let playerCoordinate, moves
let coordinate, customRow, customColumn
let coinCoordinates = []
let boardWidth, boardHeight

// Square component for each box
class Square extends React.Component{
  constructor(props) {
    super(props)
    this.squareRef = React.createRef()
    this.state = {
      value: null,
    }
  }
  
  render() {
    return (
      // Returns a box with player and coin sprites as elements.
      <button 
        className = "square"
        id = {this.props.id}
      >
        <img 
          className="player-icon"
          src = {player}
          id = {"player_" + this.props.id}
          style={{ display: 'none', left: 0, top: 0 }}
        />
        <img 
          className="coin-icon" 
          src={coin}
          id = {"coin_" + this.props.id}
          style={{display: 'none'}}
        />
      </button>
    )
  }
}

// Displays the board on the screen with all rendered sprites positioned.
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // player: <Player />,
      rows: [],
      columns: []
    };
  }

  createBoard() {
    // Prompt the user for the number of rows and columns
    customRow = prompt('Please enter number of rows', 5)
    customColumn = prompt('Please enter number of columns', 5)
    // Check if the number of rows or columns enter is valid
    while (customRow < 2 || isNaN(customRow)) {
      customRow = prompt('Please enter number of rows.' + 
        'Only numbers greater than 1 are allowed.', 2)
    }

    while (customColumn < 2 || isNaN(customColumn)) {
      customColumn = prompt('Please enter number of columns.' + 
        'Only numbers greater than 1 are allowed.', 2)
    }
    // Create the board.
    for (let row = 0; row < customRow; row++) {
      let boardRow = []
      for (let column = 0; column < customColumn; column++) {
        boardRow.push(<Square
          key={`${row}_${column}`}
          id={`${row}_${column}`}/>)
        rows.push(row)
        columns.push(column)
      }
      customBoard.push(<div className="board-row">{ boardRow }</div>)
    }
    return customBoard
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    )
  }
}

// Displays the game on the screen with all components in place.
class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Generate random coordinates for the player sprite to be inserted.
    playerCoordinate = this.generateCoordinates(rows, columns)
    // Display player in the board.
    document.getElementById("player_" + playerCoordinate).style.display = "inline";
    
    // Generate random coordinates for the coin sprites.
    for (let i = 0; i < customRow*customColumn; i++) {
      coordinate = this.generateCoordinates(rows, columns)
      coinCoordinates.indexOf(coordinate) === -1 && coordinate !== playerCoordinate ? coinCoordinates.push(coordinate) : null
    }
    // Get a defined number of coins based on the row or column length.
    let selectedCoinCoordinates = coinCoordinates.slice(0, customRow)
    
    // Display the coins in the board.
    for (let i = 0; i < selectedCoinCoordinates.length; i++) {
      coordinate = selectedCoinCoordinates[i]
      document.getElementById("coin_" + coordinate).style.display = "inline";
    }
    
    // Get the borders of the entire game's board to aid in collision detection.
    boardWidth = customRow * 50
    boardHeight = customColumn * 50

    // Listen for key events and trigger updates to player sprite where necessary.
    document.addEventListener('keyup', (e) => {
      const allowedKeys = {
          37: 'left',
          38: 'up',
          39: 'right',
          40: 'down'
      };
      console.log(e.keyCode)
      this.handlePlayer(allowedKeys[e.keyCode])
    })
  }

  // Get coordinates in a board based on the rows and columns combination
  generateCoordinates(rowArray, columnArray) {
    let rowCoord = rowArray[Math.floor(Math.random()*rowArray.length)]
    let columnCoord = columnArray[Math.floor(Math.random()*columnArray.length)]
    return(`${rowCoord}_${columnCoord}`)
  }

  // Handle player movement
  handlePlayer(allowedKeys) {
    switch (allowedKeys) {
      case "left": 
        document.getElementById("player_" + playerCoordinate).style.left = -30;
        break
      case "right": 
        document.getElementById("player_" + playerCoordinate).style.left = +30;
        break
      case "up": 
        document.getElementById("player_" + playerCoordinate).style.top = +30;
        break
      case "down": 
        document.getElementById("player_" + playerCoordinate).style.top = +30;
        break
    }
  }

  render() {
    return (
      <Board />
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)


