
//UI

let getsingupbtn = document.getElementById('signup-btn'),
    getfullscreenbtn = document.getElementById('fullscreen-btn'),
    getclosefullscreenbtn = document.getElementById('closefullscreen-btn');

let getmodal = document.querySelector('.modal'),
    getbtnclose = document.querySelector('.btn-close');

    // console.log(getmodal);

getsingupbtn.addEventListener('click',function(){
    getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
}

const getdocuelement = document.documentElement;

getfullscreenbtn.addEventListener('click',function(){

    if(getdocuelement.requestFullscreen){
        getdocuelement.requestFullscreen();
    }else if(getdocuelement.webkitRequestFullscreen){
        getdocuelement.webkitRequestFullscreen();
    }else if (getdocuelement.msRequestFullscreen){
        getdocuelement.msRequestFullscreen();
    }

});

getclosefullscreenbtn.addEventListener('click',function(){

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if (document.msExitFullscreen){
        document.msExitFullscreen();
    }

});

