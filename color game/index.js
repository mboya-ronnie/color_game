
var squares =document.getElementsByClassName("square");
var colorDisplay = document.getElementById("color-display")
var result = document.getElementById("result");
var header = document.getElementById("header");
var playAgain = document.getElementById("play again");
var newColor = document.getElementById("new color");
var colors =[];


genrateColor();
console.log(colors);
function genrateColor(){
    var i;
    for(i=0;i<squares.length;i++){
        colors.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );
    }
}
asignColor();
function asignColor(){
    var i;
    for(i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].setAttribute("data-color",colors[i]);
    }
}
var pickedColor = getrandomColor();
function getrandomColor(){
    var randomColor = colors[Math.floor(Math.random()*squares.length)];
    colorDisplay.innerText = randomColor;
    return randomColor;
}
checkcolor();
function checkcolor(){
    var i,j;
    for(i=0;i<squares.length;i++){
        squares[i].onclick = function(){
            var getcolor = this.getAttribute("data-color");
            if(getcolor == pickedColor )
            {
                for (j=0;j<squares.length;j++){
                    squares[j].style.opacity ="1";
                    squares[j].style.backgroundColor = pickedColor;
                }
                playAgain.innerHTML = "Play again";
                header.style.background = pickedColor;
                result.innerText = "CONGRATULATIONS you get it";
            }
            else{
                result.innerText = "wrong";
                this.classList.add("fade");
            }
        }
    }
}

newColor.onclick = function(){
    reset();
}
playAgain.onclick = function(){
    reset();
}
function reset(){
    window.location =location.href;
}