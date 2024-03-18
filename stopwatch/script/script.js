var mil = 0
var sec = 0
var min = 0
var interval


function digits(digit){
    if(digit < 10){
        return ("0"+digit)
    }
    else{
        return digit
    }
}





function start(){
    watch()
    interval = setInterval(watch, 10)
}

function pause(){
    clearInterval(interval)

}

function stop(){
    clearInterval(interval)
    mil = 0
    sec = 0
    min = 0
    document.getElementById('timer').innerText = "00:00:00"
    
}


function watch(){
    mil = mil + 1
    if(mil == 99){
        mil = 0
        sec = sec + 1
        if(sec == 60) {
            min = min + 1
            sec = 0
        }

    }
    
    document.getElementById('timer').innerText = (digits(min) +":" + digits(sec) + ":" + digits(mil))
}






















































