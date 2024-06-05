const CounterBox = () => {
    return (<>
        <div className="arlo_tm_section">
            <div className="container">
                <div className="arlo_tm_counter_wrap" data-col="4" data-delay="300">
                    <ul className="arlo_tm_counter_list arlo_tm_miniboxes">
                        <li>
                            <div className="inner arlo_tm_minibox">
                                <h3><span><span className="arlo_tm_counter" data-from="0" data-to="2222" data-speed="3000">0</span></span></h3>
                                <span>Projects Completed</span>
                            </div>
                        </li>
                        <li>
                            <div className="inner arlo_tm_minibox">
                                <h3><span><span className="arlo_tm_counter" data-from="0" data-to="333" data-speed="3000">0</span>K</span></h3>
                                <span>Lines of Code</span>
                            </div>
                        </li>
                        <li>
                            <div className="inner arlo_tm_minibox">
                                <h3><span><span className="arlo_tm_counter" data-from="0" data-to="8888" data-speed="3000">0</span></span></h3>
                                <span>Happy Clients</span>
                            </div>
                        </li>
                        <li>
                            <div className="inner arlo_tm_minibox">
                                <h3><span><span className="arlo_tm_counter" data-from="0" data-to="777" data-speed="3000">0</span>+</span></h3>
                                <span>My Awwwards</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

export default CounterBox;