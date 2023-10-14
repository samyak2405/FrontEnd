console.log("hello world");
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName:"Ae-Salam-e-Ishq",filePath:"/songs/1.mp3",coverPath:"/covers/1.jpg"},
    {songName:"B-Salam-e-Ishq",filePath:"/songs/2.mp3",coverPath:"/covers/2.jpg"},
    {songName:"C-Salam-e-Ishq",filePath:"/songs/3.mp3",coverPath:"/covers/3.jpg"},
    {songName:"D-Salam-e-Ishq",filePath:"/songs/4.mp3",coverPath:"/covers/4.jpg"},
    {songName:"E-Salam-e-Ishq",filePath:"/songs/5.mp3",coverPath:"/covers/5.jpg"},
    {songName:"F-Salam-e-Ishq",filePath:"/songs/6.mp3",coverPath:"/covers/6.jpg"},
    {songName:"G-Salam-e-Ishq",filePath:"/songs/7.mp3",coverPath:"/covers/7.jpg"}
]


//Listen to events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
