import LeftPart from "components/leftPart"
import MobileMenu from "components/mobile/menu"
// import Preloader from "components/preloader"
import RightPart from "components/rightPart"
import { FloatButton } from "antd"
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

const Portfolio = () => {
    const [showLeft, setShowLeft] = useState<boolean>(false)
    useEffect(() => {
        if (isMobile) {
            setShowLeft(true)
        }
    }, [])
    return (
        <>
            {/* <!-- WRAPPER ALL --> */}
            <div className="arlo_tm_wrapper_all">

                <div id="arlo_tm_popup_blog">
                    <div className="container">
                        <div className="inner_popup scrollable"></div>
                    </div>
                    <span className="close"><a href="#"></a></span>
                </div>

                {/* <Preloader /> */}



                <div className="arlo_tm_content">
                    {/* {isMobile && <>
                        <MobileMenu />
                        <LeftPart
                            showLeft={showLeft}
                            setShowLeft={setShowLeft}
                        />
                        <RightPart
                            showLeft={showLeft}
                            setShowLeft={setShowLeft}
                        /> </>
                    }
                    {!isMobile && <>
                        <LeftPart
                            showLeft={showLeft}
                            setShowLeft={setShowLeft}
                        />
                        <RightPart
                            showLeft={showLeft}
                            setShowLeft={setShowLeft}
                        />
                    </>} */}
                    <MobileMenu
                    />
                    <LeftPart
                        showLeft={showLeft}
                        setShowLeft={setShowLeft}
                    />
                    <RightPart
                        showLeft={showLeft}
                        setShowLeft={setShowLeft}
                    />
                    <FloatButton.BackTop
                        tooltip={<div>Back to Top</div>}
                    />

                </div>
            </div>
            {/* <!-- / WRAPPER ALL --> */}
        </>)
}

export default Portfolio





{/* 
.arlo_tm_totop {
    position: fixed;
    bottom: 40px;
    right: 55px;
    z-index: 100;
    overflow: hidden;
    outline: 1px solid rgba(255, 255, 255, .2);
    background-color: $background-color_3;
    padding: 22px;
    border-radius: 3px;
    display: inline-block;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;

    &:before {
        position: absolute;
        content: "";
        top: 0px;
        height: 100%;
        left: -75%;
        width: 0%;
        background-color: $background-color_2;
        transform: skew(50deg);
        transition-duration: .6s;
        z-index: 1;
    }

    &:after {
        width: 0px;
        height: 0px;
        position: absolute;
        content: '';
        border: 5px solid transparent;
        border-bottom-color: $border-bottom-color_1;
        top: 14px;
        left: 17px;
        z-index: 2;
    }

    &:hover {
        &:before {
            width: 290%;
        }
    }
}

.arlo_tm_totop.opened {
    opacity: 1;
    visibility: visible;
    bottom: 55px;
}
*/}