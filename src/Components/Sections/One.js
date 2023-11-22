import ButtonOne from '../Buttons/One'
import SectionTitle from './Title'
import s from './style.module.css'

const SectionOne = () => {
    return (
        <section className={s.section}>
            <div className={s.image}>
                <img src='https://images.unsplash.com/photo-1698771257703-e525cf456a2a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            </div>
            <div className={s.content}>
                <SectionTitle>
                    Welcome we <strong>are Atelier</strong>
                </SectionTitle>
                <hr />
                <p>
                    Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. All our projects incorporate a unique artistic image and functional solutions. Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality through design.
                </p>
                <p>
                    Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. All our projects incorporate a unique artistic image and functional solutions. Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality through design.
                </p>
                <ProcessBox />
            </div>
        </section >
    )
}

const ProcessBox = () => {
    return (
        <div className={s.processBox}>
            <h3 className={s.processHeading}>Our Process</h3>
            <ul className={s.processList}>
                {["Idea & Start", "Design & Create", "Build & Finish"].map(item => {
                    return (
                        <li>
                            <a href='#'>
                                {item}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ButtonOne name={"View Our Portfolio"} />
        </div>
    )
}

export default SectionOne;