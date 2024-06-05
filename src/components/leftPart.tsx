import reactLogo from '@/assets/img/logo/reactlogo.png'
import { useState } from 'react'

interface IProps {
    showLeft: boolean;
    setShowLeft: (value: boolean) => void;
}


const mainPages = [
    { link: '#home', html: 'Home' },
    { link: '#about', html: 'About' },
    { link: '#skills', html: 'Skills' },
    { link: '#projects', html: 'Projects' },
    { link: '#contact', html: 'Contact' }
]

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>('')
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, str: string) => {
        setActiveTab(str)
        const section = document.querySelector(str);
        if (section) {
            event.preventDefault()
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (<>
        <div className={props.showLeft === true ? "arlo_tm_leftpart_wrap opened " : "arlo_tm_leftpart_wrap "}>
            <div className="leftpart_inner ">
                <div className="logo_wrap ">
                    <a href="#"><img src={reactLogo} alt="desktop-logo" style={{ width: '100px', height: 'auto' }} /></a>
                </div>
                <div className="menu_list_wrap ">
                    <ul className="anchor_nav ">
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
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li><a href="#"><i className="xcon-facebook"></i></a></li>
                            <li><a href="#"><i className="xcon-twitter"></i></a></li>
                            <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                            <li><a href="#"><i className="xcon-instagram"></i></a></li>
                            <li><a href="#"><i className="xcon-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
                <a style={{ cursor: 'pointer' }} className={props.showLeft ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                    onClick={() => props.setShowLeft(!props.showLeft)
                    } //toggle
                ><i className={props.showLeft ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
            </div>
        </div >
    </>)
}
export default LeftPart