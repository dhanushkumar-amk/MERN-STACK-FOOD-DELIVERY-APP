import {assets} from '../../assets/frontend_assets/assets';
import './AppDownLoad.css';
const AppDownLoad = () => {
  return (
    <div
      className='app-download'
      id='app-download'>
      <p>
        For better experience download <br /> Tomato App
      </p>

      <div className='app-download-platform'>
        <img
          src={assets.play_store}
          alt='playStore icon'
        />
        <img
          src={assets.app_store}
          alt='app store icon'
        />
      </div>
    </div>
  );
};

export default AppDownLoad;
