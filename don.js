


 let record = new webkitSpeechRecognition()
 let audio = new Audio()
 
 record.lang = "UZ-uz"
// speech.lang = "RU-ru"
// speech.lang = "EN-en"

 record.onresult = function(e){
    let value = e.results[0] [0].transcript
    console.log(value);

 
     if(value == "charchamang"){
     audio.src = "./mp3/chachamay.ogg"
     audio.play()
    }
    else if(value == "boy"){
        audio.src = "./mp3/boy-bolay.ogg"
        audio.play()
    }
    else if(value == "pasport"){
        audio.src = "./mp3/pasport.ogg"
        audio.play()
    }

}
    
 
 
 function handleRecordBtnClick(){
        //record.start()
         audio.src = "./mp3/clicked.mp3"
         audio.play()
    }