var gridSize = 3;
var divs = [];
var gamearr = Array(2*gridSize+2 ).fill(0);

function addClickListeners(){
    
    for (var i = 0, len = divs.length; i < len; i++)
    {
        (function(index){
        divs[i].onclick = function(){
              //(index)  ;
              var width =3;
              console.log(~~(index/width),index%width)
        }    
    })(i);
    }
}

function set_block(inn){
    alert(inn);
}


//0 based index to row and column
//var row = ~~(index/width);
//var column = index%width
function play(p,row,col) {
    var index = (row * 3) + col;
    var point = 0;
    if (p===1){
        divs[index].appendChild(document.createTextNode("O"));
        divs[index].className="square sqaure O";
        point = 1;
    }else{
        divs[index].appendChild(document.createTextNode("X"));
        divs[index].className="square sqaure X";
        point = -1;
    }
    gamearr[row] += point; // where point is either +1 or -1
    gamearr[gridSize + col] += point;
    if (row == col) gamearr[2*gridSize] += point;
    if (gridSize - 1 - col == row) gamearr[2*gridSize + 1] += point;
    for (i=0;i<gamearr.length;i++){
        if(gamearr[i]===-3 || gamearr[i]===3){
            console.log(gamearr[i])
        }
    }
  }
  





// Document
document.addEventListener('DOMContentLoaded', function() {
    alert("event listener DOMContentLoaded");
    //document.getElementById("game").getElementById("board")[0].className = 'board';
    divs = document.querySelector("#game > #board").getElementsByTagName("div");
    var lend = divs.length;
    for (i = 0; i < lend; i++) {
    divs[i].className="square";
    }
    addClickListeners();

  }, false);