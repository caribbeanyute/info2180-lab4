// Document
document.addEventListener('DOMContentLoaded', function() {
    alert("event listener DOMContentLoaded");
    document.getElementById("game").className = 'game';
    //document.getElementById("game").getElementById("board")[0].className = 'board';
    var divs = document.querySelector("#game > #board").getElementsByTagName("div");
    var lend = divs.length;
    for (i = 0; i < lend; i++) {
    divs[i].className="square";
}
  }, false);