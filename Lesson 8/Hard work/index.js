const videoEl = document.querySelector('video');
const playBtn = document.querySelector('.controls-play');
const volumeBtn = document.querySelector('.controls-volume');
const volumeRangeEl = document.querySelector('.volume-range');
const videoProgressEl = document.querySelector('.progress');
const settindBtn = document.querySelector('.controls-setting');

window.addEventListener('click', (event) => {
    settindBtn.classList.remove('controls-setting-active');
});

videoEl.addEventListener('ended', (event) => {
    playBtn.classList.remove('controls-pause');
});

videoEl.addEventListener('timeupdate', (event) => {
    videoProgressEl.value = 100 / videoEl.duration * videoEl.currentTime;
});

videoEl.addEventListener('volumechange', (event) => {
    volumeRangeEl.value = videoEl.volume * 100;
    if (videoEl.volume === 0) {
        videoEl.muted = true;
        volumeBtn.classList.add('controls-mute');
    } else {
        videoEl.muted = false;
        volumeBtn.classList.remove('controls-mute');
    }
});

videoEl.addEventListener('play', (event) => {
    playBtn.classList.add('controls-pause');
});

videoEl.addEventListener('pause', (event) => {
    playBtn.classList.remove('controls-pause');
});

const playPause = (el) => { 
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
};

const volumeMute = (el) => {
    el.classList.toggle('controls-mute');
    videoEl.muted = !videoEl.muted;
    if (videoEl.muted) {
        videoEl.volume = 0;
        volumeRangeEl.value = 0;
    } else {
        videoEl.volume = 1;
        volumeRangeEl.value = 100;
    }
};

const onVolumeRangeChange = (el) => {
    videoEl.volume = el.value / 100;
};

const screenChange = (el) => {
    videoEl.requestFullscreen();
};

const onVideoProgressChange = (el) => {
    videoEl.currentTime = videoEl.duration / 100 * el.value;
};

const onSettingClick = (event, el) => {
    event.stopPropagation();
    el.classList.toggle('controls-setting-active');
};

const onSpeedChange = (el) => {
    videoEl.playbackRate = el.value;
};