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
	document.getElementById("volume").textContent = `${video.volume * 100}%`;
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
     if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
		console.log("Unmute");
    } else {
        video.muted = true;
        this.textContent = "Unmute";
		console.log("Mute");
    }
	
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Change Volume");
    video.volume = this.value / 100;
	document.getElementById("volume").textContent = this.value + '%';
    console.log("Volume: " + video.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
