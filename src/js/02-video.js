import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

  player.on(
    'timeupdate',
    throttle(function (data) {
      localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    }, 1000),
    
  );

    const plaeyrCurrentTime = localStorage.getItem('videoplayer-current-time');
    const parsPlaeyrCurrentTime = JSON.parse(plaeyrCurrentTime);
    const dataTime = parsPlaeyrCurrentTime.seconds;
 

    player
      .setCurrentTime(dataTime)
      .then(function () {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });

