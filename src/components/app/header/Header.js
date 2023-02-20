import iconSun from './assets/icon-sun.svg';
import iconMoon from './assets/icon-moon.svg';
import './assets/header.css';

export default function Header({darkMode, setDarkMode}) {
    return (<header>
        <span id='todo-logo'>TODO</span>
        <button>
            <img 
                src={darkMode ? 
                        iconSun:
                        iconMoon}
                alt={darkMode ?
                        'Switch to light mode':
                        'Switch to dark mode'}
                onClick={() => setDarkMode(prev => !prev)}
            />
        </button>
    </header>)
}