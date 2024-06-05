import heroPng from '@/assets/img/hero/qacer1.png'
import { TypeAnimation } from 'react-type-animation';
const HomeCV = () => {
    const handleScrollToAbout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const section = document.querySelector('#about');
        if (section) {
            event.preventDefault()
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => { window.location.hash = '#about' }, 1000);
        }
    };

    return (<>
        <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header_wrap">
                <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                        <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                        <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                        <div className="inner_content">
                            <div className="image_wrap">
                                <img src={heroPng} alt="hero" />
                            </div>
                            <div className="name_holder">
                                <h3>Quan <span>Nguyen</span></h3>
                            </div>
                            <div className="text_typing">
                                <p>I am a
                                    &nbsp;
                                    <TypeAnimation
                                        sequence={[
                                            'UI/UX designer',
                                            2000,
                                            'Software Developer',
                                            2000,
                                            'Software Engineer',
                                            2000,
                                            () => {
                                                console.log('Sequence completed');
                                            },
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{ fontSize: '1.2em', display: 'inline-block' }}
                                        placeholder='' onPointerEnterCapture='' onPointerLeaveCapture=''
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                        <a href="#about" onClick={(e) => handleScrollToAbout(e)}> <i className="xcon-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
        </div ></>)
}

export default HomeCV