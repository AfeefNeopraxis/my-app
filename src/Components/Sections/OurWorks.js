import ProcessList from '../ProcessList';
import s from './ourworks.module.css'

import SectionTitle from "./Title"

const OurWorks = () => {
    return (
        <section className={s.section}>
            <SectionTitle>
                Our featured <b>Works</b>
            </SectionTitle>
            {
                [{
                    tags: ["Project", "Residential", "Afeef K K"],
                    image: {
                        alt: "nothing",
                        src: "https://images.unsplash.com/photo-1699614614449-d19235e38574?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }
                }, {
                    tags: ["Project", "Residential", "Afeef K K"],
                    image: {
                        alt: "nothing",
                        src: "https://images.unsplash.com/photo-1700607687506-5149877683e8?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }
                }, {
                    tags: ["Project", "Residential", "Afeef K K"],
                    image: {
                        alt: "nothing",
                        src: "https://images.unsplash.com/photo-1700585831895-d170dbccda43?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }
                }]
                    .map((work,index) => {
                        return <div key={index}>
                            <ProcessList list={work.tags} />
                            <img
                                className={s.image}
                                alt={work.image.alt}
                                src={work.image.src}
                            />
                        </div>
                    })
            }
        </section>
    )
}

export default OurWorks;