import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (<>
        <div className="arlo_tm_section" id='skills'>
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Front-End Skills</h4>
                            </div>
                            <li>Integrate responsive website templates</li>
                            <li>Framework/Library/Tooling: Bootstrap, TailwindCSS, Antd, React.JS, Vite.JS, Node.JS</li>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">HTML/CSS/JavaScript</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                        {/*  - <span className="experience">5 years of experience</span> */}
                                    </div>

                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">React.JS (Typescript)</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>

                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">Design UI/UX</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                        {/*  - <span className="experience">5 years of experience</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Back-End Skills</h4>
                            </div>
                            <li>Languages: TypeScript, JavaScript</li>
                            <li>Write RESTful APIs</li>
                            <li>Follow MVC architecture</li>
                            <li>Framework: Express.JS, Nest.JS, Ruby on Rails, Node.JS</li>
                            <li>Database: MySQL, MongoDB</li>
                        </div>

                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">Express.JS</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>

                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">Nest.JS</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>

                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">RESTful APIs & MVC architecture</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Other Skills</h4>
                            </div>
                            <li>Languages: C/C++, Python, Arduino</li>
                            <li>Secure Coding: OpenSSL, LibTomCrypt, ZeroMQ, GMP </li>
                            <li>Teamwork tools: Git, Docker</li>
                            <li>Leadership: Arduino Software & Project Lead,</li>
                            <li>AI Library/Framework: Keras, Matplotlib, NumPy</li>
                        </div>

                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label">Teamwork</span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>

                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label"><span>Leadership</span></span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>

                                    <div className="arlo_tm_progress" data-value="70" data-color="#000">
                                        <span><span className="label"><span>Web Security</span></span><span className="number">70%</span></span>
                                        <ProgressBar completed={70} maxCompleted={100}
                                            bgColor='#333'
                                            height='8px'
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div ></>)
}

export default Skill