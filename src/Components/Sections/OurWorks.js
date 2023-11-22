import s from './ourworks.module.css'

import SectionTitle from "./Title"

const OurWorks = ()=>{
    return(
        <section className={s.section}>
            <SectionTitle>
                Our featured <b>Works</b>
            </SectionTitle>
        </section>
    )
}

export default OurWorks;