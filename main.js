var SpeechRecognition= window.webkitSpeechRecognition;   //storing web speech API in a var
var recognition= new SpeechRecognition();   //creating an object name recognition using web speech API

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();   //calling pre defind start() from API to listen to the user

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;

    if(content=="take my selfie"){
        speak();        //calling speak func
    }
    
}


function speak(){

    var synth=window.speechSynthesis;    //storing speach synthesis in a var
    var speak_data="taking your selfie in 5 seconds"   //getting content from text area
    var utterThis=new SpeechSynthesisUtterance(speak_data);  //creating object utterThis to store content using utterance API
    synth.speak(utterThis);  //calling pre defined speak() from utterance API
    Webcam.attach(camera)  //attaching webcam in the div

    //giving delay five seconds
    setTimeout(function() { 
        take_snapshot();
        save();
    },5000);
}

//using webcam library to set webcam properties
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");  //inside var camera getting div elemant from html

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>"
    });
}

function save(){
    link=document.getElementById("link"); //a tag from html is stored inside var link
    img=document.getElementById("selfie_img").src;  //saving selfie clicked by webcam in a var img
    link.href=img; //giving img to herf of a tag
    link.click()
}