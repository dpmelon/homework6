var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting Video");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume + 99 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up" + video.playbackRate);
	video.playbackRate /= .9;
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down" + video.playbackRate);
	video.playbackRate *= .9;
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5
		console.log("Skip Ahead Five Seconds" + video.currentTime)
	} else {
		video.currentTime = 0
		console.log("Restarting");
	}
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted) {
		this.innerHTML = "Mute"
		video.muted = false;
	}
	else {
		this.innerHTML = "Unmute"
		video.muted = true;
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log(this);
	console.log(this.value);
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%"
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.style.filter = grayscale(100%);
	video.style.filer;
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Original");
	video.style.filter = grayscale(0%);
	video.syle.filter
});