import './style.scss';
import {useSelector} from 'react-redux';

export default function SecondaryBall() {
    const darkMode = useSelector(state => state.darkMode);
    const lightMode = useSelector(state => state.lightMode);
    return (
        <div className={`SecondaryBall ${darkMode ? ' lightMode' : lightMode ? ' darkMode' : ''}`} />
    )
}