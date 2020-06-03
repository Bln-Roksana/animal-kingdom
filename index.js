// alert("Hello")
var animalBtns=document.getElementsByClassName("bn");
var playing; // null, undefined, '' == false

for (var i=0;i<animalBtns.length;i++){

  animalBtns[i].onclick = function() {
    var buttonInnerSpanHTML=this.firstElementChild.innerHTML.substr(0,1);
    buttonClick(buttonInnerSpanHTML);
    buttomAnimation(buttonInnerSpanHTML);

  } //buttonClick;
}

function pause(){
  if(playing){
    playing.pause();
  }
}

function buttomAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}


function buttonClick(key){ // e, elephant

  var musicNo=(Math.floor(Math.random()*3))+1;


  switch (key) {
    // case "e":
    case "e":
      pause();
      var eSound=new Audio("music/e_"+musicNo+".wav");
      eSound.play();
      playing=eSound;
      break;
    case "c":
      pause();
      var cSound=new Audio("music/c_"+musicNo+".wav");
      cSound.play();
      playing=cSound;
      break;
    case "p":
      pause();
      var pSound=new Audio("music/p_"+musicNo+".wav");
      pSound.play();
      playing=pSound;
      break;
    case "s":
      pause();
      var sSound=new Audio("music/s_"+musicNo+".wav");
      sSound.play();
      playing=sSound;
      break;
    case "m":
      pause();
      var mSound=new Audio("music/m_"+musicNo+".wav");
      mSound.play();
      playing=mSound;
      break;
    case "l":
      pause();
      var lSound=new Audio("music/l_"+musicNo+".wav");
      lSound.play();
      playing=lSound;
      break;
    case "g":
      pause();
      var gSound=new Audio("music/g_"+musicNo+".wav");
      gSound.play();
      playing=gSound;
      break;

    default: console.log(key);
  }

}

document.addEventListener("keydown", function(event){
  buttonClick(event.key);
  buttomAnimation(event.key);
});
