const audioUrls = [
    'https://7oom.ru/audio/naturesounds/09%20Cat%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/06%20Night%20forest%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/05%20Rain%20and%20thunder%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/03%20Tropic%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/02%20Sea%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/11%20Island%20(7oom.ru).mp3'
];
const videoUrls = [
    'https://vod-progressive.akamaized.net/exp=1677508576~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1173%2F19%2F480867548%2F2150201712.mp4~hmac=2f938950935a77eca9244f0212c3fa50908f6f231ca3ef600633788d97e86745/vimeo-prod-skyfire-std-us/01/1173/19/480867548/2150201712.mp4',
    'https://vod-progressive.akamaized.net/exp=1677510203~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1988%2F27%2F684944096%2F3159364849.mp4~hmac=998cfda0ede58343907c134bcb71282c09e8c16d8ec9e12613c0f658dd70e798/vimeo-prod-skyfire-std-us/01/1988/27/684944096/3159364849.mp4',
    'https://vod-progressive.akamaized.net/exp=1677510473~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1883%2F17%2F434416095%2F1892201775.mp4~hmac=7252a32071472f5400280c87c9fd14e3fc1d2d454737ba5cc426c8add35ca36b/vimeo-prod-skyfire-std-us/01/1883/17/434416095/1892201775.mp4',
    'https://vod-progressive.akamaized.net/exp=1677511363~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2710%2F13%2F338550495%2F1345815438.mp4~hmac=f38988ab999744b9852da3bd0b24641f31e57eaaf6df7ca1e0df8ded261f232b/vimeo-prod-skyfire-std-us/01/2710/13/338550495/1345815438.mp4',
    'https://vod-progressive.akamaized.net/exp=1677511645~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F688%2F8%2F203443693%2F690424557.mp4~hmac=d33fc1989ed0512c5be1e513f8ad0dc9c89d47d23899aaa39d726f736705b392/vimeo-prod-skyfire-std-us/01/688/8/203443693/690424557.mp4',
    'https://vod-progressive.akamaized.net/exp=1677511288~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2732%2F12%2F313664852%2F1209697120.mp4~hmac=6e55d9fef2141fb5c92c837fcf405e1e9eb52a332a1f0554fcfe15e0a3d7cc6e/vimeo-prod-skyfire-std-us/01/2732/12/313664852/1209697120.mp4'
];
const filterBtns = document.querySelectorAll('.filter-btn');
const videoEl = document.querySelector('.video');
const audioEl = document.querySelector('.audio');

const onFilterBtnClick = (el) => {
    filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
    el.classList.add('active');

    const activeItemIndex = +el.getAttribute('data-filter');
    videoEl.src = videoUrls[activeItemIndex];
    audioEl.src = audioUrls[activeItemIndex];
};