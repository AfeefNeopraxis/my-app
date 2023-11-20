import s from './one.module.css'

const ButtonOne = (props) => {
    return(
        <button className={s.button}>
            {props.name}
        </button>
    )
}

export default ButtonOne;