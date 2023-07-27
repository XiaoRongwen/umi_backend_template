import json from '@/assets/json/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';
export default function loading() {
  return (
    <div className="global-loading-body">
      <Player
        autoplay
        loop
        src={json}
        style={{ height: '150px', width: '150px' }}
      ></Player>
    </div>
  );
}
