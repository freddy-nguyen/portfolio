import mobileLogo from '@/assets/img/logo/mobile_logo.png'
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

const mainPages = [
    { link: '#home', html: 'Home' },
    { link: '#about', html: 'About' },
    { link: '#skills', html: 'Skills' },
    { link: '#projects', html: 'Projects' },
    { link: '#contact', html: 'Contact' }
]

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const style = {
        overflow: "hidden",
        transition: '10s',
        display: isOpen ? 'block' : 'none',
    };

    const [activeTab, setActiveTab] = useState<string>('#home')

    useEffect(() => {
        const { hash } = window.location
        setActiveTab(hash);
        if (hash) {
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }, [])

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, str: string) => {
        setActiveTab(str)
        const section = document.querySelector(str);
        if (section) {
            event.preventDefault()
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => { window.location.hash = str }, 1000)
        }
    };

    return (<>
        <div className="arlo_tm_mobile_header_wrap">
            <div className="main_wrap">
                <div className="logo">
                    <a href="#" style={{
                        textDecoration: 'none',
                        color: '#02cae8',
                        fontFamily: "'Courier New', monospace",
                        // fontSize: '1.5em'
                    }}>
                        <img src={mobileLogo} alt="mobile_logo" width='25' height='auto' />
                        &nbsp;@QUAN
                    </a>
                </div>
                <div className="arlo_tm_trigger">
                    <div className={isOpen ? "hamburger hamburger--collapse-r is-active" : "hamburger hamburger--collapse-r"}>
                        <div className="hamburger-box" onClick={() => { setIsOpen(!isOpen) }}>
                            <div className="hamburger-inner" ></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {isOpen && <> */}
            <div className="arlo_tm_mobile_menu_wrap" style={style}>
                <div className="mob_menu">
                    <ul className="anchor_nav">
                        {mainPages.map((item, index) => {
                            return (<li>
                                <a className={activeTab === item.link ? 'active' : ''}
                                    href={item.link}
                                    onClick={(e) => handleScroll(e, item.link)}>
                                    {item.html}
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* </>} */}

        </div ></>)
}

export default MobileMenu