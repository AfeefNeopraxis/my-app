import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

import s from './one.module.css'

const ButtonOne = (props) => {
    return (
        <a className={s.button} href='#'>
            {props.name}
            <i>
                <FontAwesomeIcon icon={faRightLong} color='white' style={{ zIndex: 2 }} />
            </i>
        </a>
    )
}

export default ButtonOne;