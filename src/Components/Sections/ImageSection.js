import Counter from '../Counter';
import s from './imagesection.module.css'

const ImageSection = ({
    color = "#fff"
}) => {
    return (
        <section
            className={s.section}
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1692837817679-0788890786d5?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                color: color
            }}>
            <div className={s.row}>
                <h4 className={s.sectionTitle}>
                    Some intresting facts
                </h4>
                <div className={s.content}>
                    <p>
                    Our team is holistically equipped, to deliver excellence across the entire spectrum of design consultancy services. From ideation and conceptualization, to design development and implementation, we execute with finesse, on the strength of our varied expertise. While skilfully integrating unique and creative artistic elements with utter functionality, we also strive to assimilate the best of tradition in all our projects. Unconditional respect for the preferences and aspirations of our clients motivates us to innovate and create unique designs.
                    </p>
                    <div className={s.counters}>
                        {[{
                            count:123,
                            text:"Completed Projects"
                        },{
                            count:59,
                            text:"Happy Customers"
                        },{
                            count:8926,
                            text:"Working hours"
                        }
                        ].map(count => <Counter {...count} />)}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ImageSection;