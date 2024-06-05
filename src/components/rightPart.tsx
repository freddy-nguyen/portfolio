import HomeCV from "@/components/content/homeCV"
import About from "@/components/content/about"
import Project from '@/components/content/project'
import Skill from '@/components/content/skill'
// import Testimonials from "@/components/content/testimonials"
// import CounterBox from "@/components/content/counterBox"
// import News from "@components/content/news"
import ContactMe from "@/components/content/contactMe"

interface IProps {
    showLeft: boolean;
    setShowLeft: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
    return (<>
        <div className={props.showLeft === false ? "arlo_tm_rightpart" : "arlo_tm_rightpart opened"}>
            <div className="rightpart_inner">
                <HomeCV />
                <About />
                <Skill />
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