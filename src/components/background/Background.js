import desktopLight from './assets/desktop-light.jpg';
import desktopDark from './assets/desktop-dark.jpg';
import mobileLight from './assets/mobile-light.jpg';
import mobileDark from './assets/mobile-dark.jpg';
import './assets/background.css';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import useLocalStorage from 'use-local-storage';
import App from '../app/App';

export default function Background() {
    const {width} = useWindowDimensions();
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    const background = width >= 700 ? darkMode ? desktopDark : desktopLight : darkMode ? mobileDark : mobileLight;
    return (<div id='background' theme={darkMode ? 'dark' : 'light'}>
        <img
            src={background}
            id='background-image'
            alt=''
        />
        <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>)
}