var speechrecognition = window.webkitSpeechRecognition;
var recognition =  new speechrecognition();

function start(){

document.getElementById("textbox").innerHTML="";
recognition.start();

}

recognition.onresult =  function run (event){

console.log(event);
 
 var content= event.results[0][0].transcript;

 
 console.log(content);

 document.getElementById("textbox").innerHTML=content;

if (content == "Take my selfie."){
  speak();

}

}

function speak(){

 var synth = window.speechSynthesis;
 speakdata = "taking your selfie in 5 seconds";
 var speak = new SpeechSynthesisUtterance(speakdata);
 synth.speak(speak);
Webcam.attach(camera);


setTimeout(function(){

  takesnapshot();
  save();
},5000);
}




Webcam.set({

  width:360,
  height:250,
  image_format:'png',
  png_quality:90


});

camera = document.getElementById("camera");

function takesnapshot(){

Webcam.snap(function(data_url){
document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_url+"'>";

  });
}

function save(){

 link = document.getElementById("link");
 image = document.getElementById("selfie_image").src ;
 link.href = image;
 link.click();

}