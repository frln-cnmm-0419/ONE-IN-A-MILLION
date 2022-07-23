$(document).ready( () => {
  var arawaraw = document.getElementById("audio");
  var ikawLang = document.getElementById("audioTwo");
  var btn = document.getElementById("play-me");
  var btnTwo = document.querySelector(".other-button");
  var click = 0;
  var windowOne = document.querySelector("#containerOne");
  var windowTwo = document.querySelector("#containerTwo");
  var windowThree = document.querySelector("#containerThree");
  var windowFour = document.querySelector("#containerFour");

  AOS.init({
  });

   $(".intro").fadeOut(4000, () => {
    $(".introTwo").css("animationPlayState", "running");
  });
  
  $("#play-me").click(() => {
    click++;
    if (click == 1) {
      btn.innerText = "one more baby";
    }
    else if (click == 2) {
      btn.innerText = "take another shot, baby";
    }
    else if (click == 3) {
      $("body").css("background-color", "#391306");
      $("h1").css("color", "#F1CED4");
      btn.innerText = "there you go!";
      $(".random").css("background-color", "#AA1945");
      arawaraw.play();
    }
  });
  
  $(".other-button").click( () => {
    ikawLang.play();
    btnTwo.innerText = "❤️❤️❤️";
  });
  
  $(document).scroll(() => {
    var height = window.innerHeight;
    var last = document.getElementById("final");
    var lastRect = last.getBoundingClientRect().top;
    
    if(lastRect < 600) {
      alert("TE AMO, MI AMORE");
    }
  });
  
  window.onscroll = function(ev) {
    
  };
  
});
