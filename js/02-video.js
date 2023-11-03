
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const vimeoPlayer = new Player('vimeo-player');
const key = localStorage.getItem(KEY);
if (key) {
	vimeoPlayer.setCurrentTime(parseFloat(key));
}

vimeoPlayer.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(KEY, data.seconds.toString());
  }, 1000),
);