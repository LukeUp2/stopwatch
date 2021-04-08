
// var mili = 0
// var seconds = 0
// var minutes = 0
// var stopwatch
var mili, seconds, minutes, stopwatch
reset()
var flag = 1 // to prevent the start() to be called twice in a roll


function start(){
    if(flag == 1){
    stopwatch = setInterval(timer, 10)
    flag = 0
    }
}

function timer(){
    mili++
    if(mili < 9){
        document.getElementById("mili").innerHTML = " : 0" + mili
    }
    if (mili > 9) {
        document.getElementById("mili").innerHTML = ": " + mili
        
    }
    if(mili == 100){
        seconds++
        mili = 0
        if(seconds < 10) {
            document.getElementById("seconds").innerHTML = " 0" + seconds
        }
        else {
            document.getElementById("seconds").innerHTML = seconds
        }
    }
    if(seconds == 60){
        minutes++
        seconds = 0
        document.getElementById("minutes").innerHTML = minutes
    }
}
function pause(){
    clearInterval(stopwatch)   
    flag = 1
}

function reset(){
    seconds = 0
    minutes = 0
    mili = 0
    flag = 1
    document.getElementById("seconds").innerHTML= "00"
    document.getElementById("minutes").innerHTML= "00 :"
    document.getElementById("mili").innerHTML= ": 00"
    pause()

}

