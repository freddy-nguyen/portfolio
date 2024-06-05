import image500 from "@/assets/img/about/550x640.jpg"
import blue1 from "@/assets/img/about/blue.png"
import myCV from "@/assets/Resume.pdf"
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (<>
        <div className="arlo_tm_section relative" id="about">
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src={image500} alt="550x640" />
                                        <div className="inner" data-img-url={blue1}></div>
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src={image500} alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Hello there! I am a
                                        &nbsp;
                                        <span className='about_animation_text_word'>
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    'UI/UX Designer',
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    'Web Developer',
                                                    2000,
                                                    'Web Engineer',
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                // style={{ fontSize: '1em', display: 'inline-block' }}
                                                repeat={Infinity}
                                                placeholder onPointerEnterCapture onPointerLeaveCapture
                                            /></span></h4>

                                </div>
                                <div className="definition">
                                    <p>Hi, my name is&nbsp;<strong>Freddy Nguyen</strong>. I am a Computer Science junior working diligently towards becoming a full-stack software developer.</p><br></br>
                                    <p>With my knowledge of UI/UX design, I enjoy solving front-end Web Development problems and creating the best
                                        user experiences for users.</p><br></br>
                                    <p>I also spend time learning new technologies and best practices to become a better engineer.</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span><label>Birthday:</label> September 20<span style={{
                                                verticalAlign: 'super',
                                                fontSize: 'smaller'
                                            }}>th</span>, 2003</span>
                                        </li>
                                        <li>
                                            <span><label>City, State:</label> Tampa, FL</span>
                                        </li>
                                        <li>
                                            <span><label>Study:</label> University of South Florida</span>
                                        </li>
                                        <li>
                                            <span><label>Degree:</label> Bachelor</span>
                                        </li>
                                        <li>
                                            <span><label>GPA:</label> 3.9</span>
                                        </li>
                                        <li>
                                            <span><label>Github:</label> <a href="https://github.com/quan-minh-nguyen">quan-minh-nguyen</a></span>
                                        </li>
                                        <li>
                                            <span><label>Mail:</label> <a href="mailto:nguyenq11@usf.edu">nguyenq11&#64;usf.edu</a></span>
                                        </li>
                                        <li>
                                            <span><label>LinkedIn</label> <a href="#">&#64;mylinkedin</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href={myCV} download><span>Download CV</span></a>
                                        </li>
                                        <li className="anchor">
                                            <a href="#contact"><span>Let's Talk</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div ></>)
}
export default About