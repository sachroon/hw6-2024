var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to '+video.autoplay);
	console.log('Loop is set to '+video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down Video");
    video.playbackRate -= 0.1;
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video");
    if (video.playbackRate < 1) {
        video.playbackRate += 0.1;
    } else {
        video.playbackRate *= 2;
    }
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 10;
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    console.log("Current time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute Video");
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Change Volume");
    video.volume = this.value / 100;
	document.getElementById("volume").textContent = this.value + '%';
    console.log("Volume: " + video.volume);
});


document.getElementById("vintage").addEventListener("click", function() {
	console.log("Toggle Old School Style");
	video.classList.toggle("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	console.log("Revert to Original Style");
    video.classList.remove("oldSchool");
});