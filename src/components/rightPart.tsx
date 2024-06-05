import HomeCV from "@/components/content/homeCV"
import About from "@/components/content/about"
import Project from '@/components/content/project'
import Skill from '@/components/content/skill'
// import Testimonials from "@/components/content/testimonials"
// import CounterBox from "@/components/content/counterBox"
// import News from "@components/content/news"
import ContactMe from "@/components/content/contactMe"
import { useInView } from "react-intersection-observer";


const RightPart = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        // rootMargin: '-100px 0px',
    });
    return (<>
        <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
                <HomeCV />
                <About />
                <span ref={ref} className={`transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}>
                    <Skill />
                </span>
                <Project />
                {/* <Testimonials /> */}
                {/* <CounterBox /> */}
                {/* <News /> */}
                <ContactMe />
            </div>
        </div>
    </>)
}

export default RightPart