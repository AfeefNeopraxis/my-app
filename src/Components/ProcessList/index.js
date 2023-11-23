import s from './processlist.module.css'
const ProcessList = ({ list }) => {
    return (
        <ul className={s.processList}>
            {list.map((item, index) => {
                return (
                    <li key={index}>
                        {item.link ? <a href={item.link}>{item}</a> : { item }}
                    </li>
                )
            })}
        </ul>
    );
}

export default ProcessList;