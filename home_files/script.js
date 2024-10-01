var slideContainer;
var slideCounter = 0;
var myTimer;
var imgSize = 400;
var sliderSpeed = 50;
window.onload = function(){
    slideContainer = document.querySelector("#slideshow");
}
function slides(){
    clearInterval(myTimer);
    if (slideContainer.scrollLeft + slideContainer.clientWidth >= slideContainer.scrollWidth){
        clearInterval(myTimer)
        myTimer = setInterval(slideHome, 0.1);
        return;   
    } 
    myTimer = setInterval(slideFrame, 0.3);
    slideContainer.scrollBy(5, 0);
    console.log("scrollWidth: " + slideContainer.scrollWidth);
    console.log("Element Width: " + slideContainer.clientWidth);
 
}
function slideFrame(){
    slideContainer.scrollBy(imgSize/20, 0);
    slideCounter++;
    // console.log(slideCounter);
    if (slideCounter > 20){
        clearInterval(myTimer);
        slideCounter = 0;
    }
    console.log(slideContainer.scrollLeft);
    
}
function slideHome(){
    slideContainer.scrollBy(-100, 0);
    if (slideContainer.scrollLeft <= 0){
        clearInterval(myTimer);
    }
}
function slideLeft(){
    slideContainer.scrollBy(sliderSpeed/100 * -3,0);

}
function slideRight(){
    slideContainer.scrollBy(sliderSpeed/100 * 3,0);
}
function goLeft(){
    clearInterval(myTimer);
    console.log("going left");
    myTimer = setInterval(slideLeft, 0.3);

}
function goRight(){
    clearInterval(myTimer);
    console.log("going right");
    myTimer = setInterval(slideRight, 0.3);
}
function stop(){
    clearInterval(myTimer);
}