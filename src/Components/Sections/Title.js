import s from './title.module.css'

const SectionTitle = ({ children }) => {
    return (
        <h2 className={s.sectionTitle}>
            {children}
        </h2>
    )
}

export default SectionTitle;

