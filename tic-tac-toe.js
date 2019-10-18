var gridSize = 3;
var divs = [];
var gamearr = Array(2 * gridSize + 2).fill(0);
var playedcells = Array(9).fill(0);
var noOfPlays = gridSize * gridSize;
var playedcells = Array(noOfPlays).fill(0);

function reset() {
    divs = [];
    gamearr = Array(2 * gridSize + 2).fill(0);
    playedcells = Array(9).fill(0);
    noOfPlays = gridSize * gridSize;
    playedcells = Array(noOfPlays).fill(0);
}

function addHoverListeners() {

    for (let i = 0, len = divs.length; i < len; i++) {
        (function(index) {
            divs[i].addEventListener('mouseenter', function(e) {
                if (divs[i].textContent === "O") {
                    divs[i].classList.add('hover');
                    divs[i].classList.add('hover O');
                } 
                else {
                    divs[i].classList.add('hover');
                }
            });
            divs[i].addEventListener('mouseleave', function() {
                divs[i].classList.remove('hover');
            })

        })(i);
    }
}



function addClickListeners() {
    var p = false;
    for (let i = 0, len = divs.length; i < len; i++) {
        (function(index) {
            divs[i].onclick = function() {
                var width = 3;
                play(p, ~~(index / gridSize), index % gridSize)
                p = !p
            }
        })(i);
    }
}

function declareWinner(winner) {
    if (winner === 3) {
        document.getElementById('status').innerHTML = 'Congratulations! O is the Winner';
        document.getElementById('status').className = "you-won"
        playedcells = Array(noOfPlays).fill(1);
    } else if (winner === -3) {
        document.getElementById('status').innerHTML = 'Congratulations! X is the Winner';
        document.getElementById('status').className = "you-won"
        playedcells = Array(noOfPlays).fill(1);
    } else {
        document.getElementById('status').innerHTML = 'Draw';
        //alert(winner);
        playedcells = Array(noOfPlays).fill(1);
    }
}

//0 based index to row and column
//var row = ~~(index/width);
//var column = index%width
function play(p, row, col) {
    var index = (row * 3) + col;

    var point = 0;
    if (playedcells[index] === 1) {
        alert('That cell is occupied');
        return "Occupied";
    }

    --noOfPlays;
    if (p === true) {
        divs[index].appendChild(document.createTextNode("O"));
        divs[index].className = "square sqaure O";
        playedcells[index] = 1;
        point = 1;
    } else {
        divs[index].appendChild(document.createTextNode("X"));
        divs[index].className = "square sqaure X";
        playedcells[index] = 1
        point = -1;
    }
    //console.log('cle', playedcells);
    gamearr[row] += point; // where point is either +1 or -1
    gamearr[gridSize + col] += point;
    if (row == col) gamearr[2 * gridSize] += point;
    if (gridSize - 1 - col == row) gamearr[2 * gridSize + 1] += point;
    for (i = 0; i < gamearr.length; i++) {
        if (gamearr[i] === -3 || gamearr[i] === 3 || noOfPlays === 0) {
            declareWinner(gamearr[i])
            return gamearr[i]
        }

    }
}

// Document
document.addEventListener('DOMContentLoaded', function() {
    // alert("event listener DOMContentLoaded");
    divs = document.querySelector("#game > #board").getElementsByTagName("div");
    document.getElementsByClassName('btn')[0].onclick = function() {
        location.reload();
    }
    for (i = 0; i < divs.length; i++) {
        divs[i].className = "square";
    }
    addClickListeners();
    addHoverListeners();

}, false);