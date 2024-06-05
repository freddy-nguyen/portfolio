const ContactMe = () => {
    return (<>
        <div className="arlo_tm_section" id="contact">
            <div className="container">
                <div className="arlo_tm_title_holder contact">
                    <h3>Contact Me</h3>
                    <span>Let's get in touch</span>
                </div>
            </div>
            <div className="arlo_tm_footer_contact_wrapper_all">
                <div className="arlo_tm_contact_wrap_all">
                    <div className="container">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder contact">
                                <h4>My Contact</h4>
                            </div>
                            <div className="short_info_wrap">
                                <ul>
                                    <li><p><label>Phone:</label><span>+1 656 200 6746</span></p></li>
                                    <li><p><label>Email:</label><span><a href="mailto:qacer6973@gmail.com">qacer6973@gmail.com</a></span></p></li>
                                    <li><p><label>School Email:</label><span><a href="mailto:nguyenq11@usf.edu">nguyenq11@usf.edu</a></span></p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightbox">
                            <div className="arlo_tm_contact_wrap">
                                <div className="main_input_wrap">
                                    <form action="http://frenify.com/" method="post" className="contact_form" id="contact_form">
                                        <div className="returnmessage" data-success="Your message has been received. I will contact you soon!"></div>
                                        <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                        <div className="wrap">
                                            <input id="name" type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="wrap">
                                            <input id="email" type="text" placeholder="Your Email" />
                                        </div>
                                        <div className="wrap">
                                            <textarea id="message" placeholder="Your Message"></textarea>
                                        </div>
                                        <div className="arlo_tm_button">
                                            <a id="send_message" href="#"><span>Send Message</span></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_footer_wrap">
                    <div className="container">
                        <p>Copyright &copy; 2024 Quan Nguyen. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ContactMe;