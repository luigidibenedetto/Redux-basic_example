import './style.scss';
import {useSelector} from 'react-redux';
import SecondaryBall from '../SecondaryBall';

export default function PrimaryBall() {
    const darkMode = useSelector(state => state.darkMode);
    const lightMode = useSelector(state => state.lightMode);
    return (
        <div className={`PrimaryBall ${darkMode ? ' darkMode' : lightMode ? ' lightMode' : ''}`}>
            <SecondaryBall />
        </div>
    )
}