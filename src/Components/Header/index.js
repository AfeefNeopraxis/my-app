import s from './style.module.css'

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <img className={s.logo} src='./images/logo.png' alt='' />
                <div className={s.navItems}>
                {["Home", "Projects", "Gallery", "Contact us"].map((item, index) => (
                    <div
                        key={`nav-item-${index}`}
                        className={s.item}
                    >
                        {item}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Header;