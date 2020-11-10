var noOfDrums=document.querySelectorAll(".drum").length;
console.log(noOfDrums);
//********* web key presss event ********************
for(var i=0;i<noOfDrums;i++)
{
    //
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var letter=this.innerHTML;
        console.log(letter);
        makesound(letter);
        buttonAnimation(letter);
    })
}

//*****************************************************

  //var audio=new Audio("sounds/tom-1.mp3");
  //audio.play();




  //**************key press event*********************
  document.addEventListener("keypress",function(event){
      console.log(event.key);
      makesound(event.key);    
      buttonAnimation(event.key);
  });
//*****************************************************/


//******************Sounnd Function*********************
  function makesound(key)
  {
    switch(key){
        case "w":
              var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
        break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;  
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;         
        default:
            console.log("please enter a valid key");
    }

  }

  //**************************************************

  //button Animation //

  function buttonAnimation(curentkey)
  {
    var activekey=document.querySelector("."+curentkey);
    console.log(activekey);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed")},100);

  }