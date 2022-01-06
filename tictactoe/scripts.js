let whoseTurnId = 1;


const displayController = (()=>{

  const field = []
  const whoseTurn = document.getElementById('whose-turn')
  const board = document.getElementById('gameboard')
  for (let i = 1; i<10; i++) {
    let div = document.createElement("div")
    div.id = i.toString();
    div.addEventListener("click", function(){
      if (whoseTurnId == 1) {
        players[0].click(parseInt(div.id))
        whoseTurn.textContent = "Player 2"
      } else {
        players[1].click(parseInt(div.id))
        whoseTurn.textContent = "Player 1"
      }

    })
    board.appendChild(div)
    field.push(div)
  }

  const line = document.getElementById('line')
  const msgBox = document.getElementById('msg-box')
  const result = document.getElementById('result')
  const restartButton = document.getElementById('restart-button')
  restartButton.addEventListener("click", function (){
    msgBox.style.visibility = "hidden";
    line.style.zIndex = "-1";
    gameboard.cleanUp();
  })

  const drawVictor = (lineCode) => {
    line.classList.add(lineCode)
    line.style.zIndex = "1000"
  }
  const draw = (id, domId)=> {
      const pic= document.createElement("img")
      if (id == 1) {
          pic.src = "src/circle.png"
      } else {
        pic.src = "src/cross.png"
      }
      field[domId-1].appendChild(pic)
  }
  const showMsgBox = (id)=>{
    msgBox.style.visibility= "visible"
    if (id == 1) {
        result.textContent = 'Player 1 win'
    } else {
      result.textContent = 'Player 2 win'
    }
  }

  const cleanUp =() => {
    for (let i = 0; i<9; i++) {
      if (field[i].hasChildNodes()) {
        field[i].removeChild(field[i].childNodes[0])

      }
    }
  }
  return {draw, drawVictor, showMsgBox, cleanUp}
})()

displayController.drawVictor("mid-horizontal")
const gameboard = (() => {
  let n = 0
  const lineIndexToClassLabel = {
    "012" : "top",
    "345" : "mid-horizontal",
    "678" : "bottom",
    "036" : "left",
    "147" : "mid-vertical",
    "258" : "right",
    "048" : "diagonal-negative",
    "642" : "diagonal-positive"
  }

  const field = [];
  for (let i = 0; i<9; i++) {
    field.push('')
  }

  const makeMove = (id, domId) => {
    if (id == 1) {
      field[domId-1] = 'o';
    } else {
      field[domId-1] = 'x';
    }
    hasWon(id);
  }
  const hasWon = (id)=>{
    let symbol;
    if (id == 1) {
      symbol = "o"
    } else {
      symbol = "x"
    }

    const keys = Object.keys(lineIndexToClassLabel)
    for (let i = 0; i<keys.length; i++) {
      let winIndexes = [parseInt(keys[i][0]), parseInt(keys[i][1]), parseInt(keys[i][2])]


      let winIndexesIntoSymbol = [field[winIndexes[0]],
                                  field[winIndexes[1]],
                                  field[winIndexes[2]]]

      if (winIndexesIntoSymbol.every((cell) => cell==symbol)) {
        n++
        console.log("count" + n+ "  "+ keys[i] + lineIndexToClassLabel[keys[i]])
        displayController.drawVictor(lineIndexToClassLabel[keys[i]])
        displayController.showMsgBox(id)
      }
    }
  }

  const cleanUp = () => {
    for (let i = 0; i<9; i++) {
      field[i] = '';
    }
    displayController.cleanUp()
  }

  const canClick = (domId) => {
    if (field[domId-1] == "") {
      return true
    } else {
      return false
    }
  }
  return {makeMove, hasWon, cleanUp, canClick, field}
})()

const player = (playerId) => {
  const click= (domId)=> {
    if (gameboard.canClick(domId)) {
      gameboard.makeMove(playerId, domId)
      displayController.draw(playerId, domId)
      if (playerId == 1) {
        whoseTurnId = 2;
      } else {
        whoseTurnId = 1;
      }

    }

  }
  return {click}
}

let players = [player(1), player(2)]
