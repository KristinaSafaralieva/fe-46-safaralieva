const audioUrls = [
    'https://7oom.ru/audio/naturesounds/09%20Cat%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/06%20Night%20forest%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/05%20Rain%20and%20thunder%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/03%20Tropic%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/02%20Sea%20(7oom.ru).mp3',
    'https://7oom.ru/audio/naturesounds/11%20Island%20(7oom.ru).mp3'
];
const videoUrls = [
    'https://vod-progressive.akamaized.net/exp=1677292707~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1183%2F19%2F480916085%2F2150640058.mp4~hmac=cfd964d69afeff43a4ca8ec488ef1ca047071e05f4fd3cc2b497b7da543beb49/vimeo-prod-skyfire-std-us/01/1183/19/480916085/2150640058.mp4',
    'https://vod-progressive.akamaized.net/exp=1677293271~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1988%2F27%2F684944096%2F3159364849.mp4~hmac=15da4bff2b13e4b90771183bb37ec7952885934f7d11708380537e74abcc613e/vimeo-prod-skyfire-std-us/01/1988/27/684944096/3159364849.mp4',
    'https://vod-progressive.akamaized.net/exp=1677293085~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2276%2F17%2F436382563%2F1902919897.mp4~hmac=6fe893f058d4bfeb4c5492238cebee00ed9a875d6f3d1efd1706b92278ff6fa4/vimeo-prod-skyfire-std-us/01/2276/17/436382563/1902919897.mp4',
    'https://vod-progressive.akamaized.net/exp=1677293508~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1195%2F14%2F355975973%2F1450758390.mp4~hmac=ae958f769ede81ca1019b8f7be2693b83afb9581f6d41be802caf8b846529e00/vimeo-prod-skyfire-std-us/01/1195/14/355975973/1450758390.mp4',
    'https://vod-progressive.akamaized.net/exp=1677293598~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1691%2F8%2F208459721%2F712284820.mp4~hmac=c4eb2049d8471698c7515d4e49cc906d76e4ac9e11aaedd2815331289f8f967d/vimeo-prod-skyfire-std-us/01/1691/8/208459721/712284820.mp4',
    'https://vod-progressive.akamaized.net/exp=1677293429~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2732%2F12%2F313664852%2F1209697120.mp4~hmac=9952f67c052c3b366494f3ef920ae4b0936aff660b391e1c074d29eb8f8bd3fd/vimeo-prod-skyfire-std-us/01/2732/12/313664852/1209697120.mp4'
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