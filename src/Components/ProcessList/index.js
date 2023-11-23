import s from './processlist.module.css'
const ProcessList = ({ list }) => {
    return (
        <ul className={s.processList}>
            {list.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.href ? item.href : "#"}>{item}</a>
                    </li>
                )
            })}
        </ul>
    );
}

export default ProcessList;