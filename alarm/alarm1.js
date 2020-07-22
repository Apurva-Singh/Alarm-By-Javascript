let alarmSubmit= document.getElementById('alarmbtn');
alarmSubmit.addEventListener('click',setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
function setAlarm(e){
    e.preventDefault();
    const alarm= document.getElementById('appt');
    let altime= new Date(alarm.value);
    console.log(`Setting alarm for ${alarm.value}`);
    let now= new Date();
    let wait= altime-now;
    if(wait>=0){
        setTimeout(() =>{
            playAudio();
        },wait
        );
    }
}

function playAudio(){
    audio.play();
}