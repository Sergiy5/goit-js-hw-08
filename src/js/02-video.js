import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const DATA_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const saveLocalData = function (data) {
  localStorage.setItem(DATA_KEY, data.seconds)};

player.on('timeupdate', throttle(saveLocalData, 1000));


//    Встановлення часу зі сховища або якщо нема збережених данних тоді '0'
player.setCurrentTime(JSON.parse(localStorage.getItem(DATA_KEY)) || 0);
     