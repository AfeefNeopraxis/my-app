import Sidebar from '../Sidebar';
import s from './style.module.css'
const Header = () => {
    return (
        <>
        <div className={s.header}>
            {["Home", "Projects", "Gallery", "About Us", "Contact us"].map((item) => (
                <div className={s.item}>
                    {item}
                </div>
            ))}
        </div>
        <Sidebar />
        </>
    )
}

export default Header;