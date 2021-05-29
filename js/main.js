let s = 0;

let opacityProgress = 1;

let bgBlur = 10;

wrapp.style.filter = 'blur('+10+'px)';

setInterval(function(){
    if(s<100){
        s++;
        progressPlace.innerText = s+'%';
        opacityProgress = opacityProgress-0.0093;
        progressPlace.style.opacity = opacityProgress;
        
        bgBlur= bgBlur-0.1;
        wrapp.style.filter = 'blur('+bgBlur+'px)';
        
        
        row.style.width = s + '%';
        row.style.transition = '0.3s';
    }
},100)