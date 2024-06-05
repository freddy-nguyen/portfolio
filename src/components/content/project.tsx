import { Button, Modal } from 'antd';
import { useState } from 'react';

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataProject = [
        {
            image: '',
            title: 'a',
            shortDescription: '',
            detail: {
                description: '',
                technology: '',
                member: '',
                role: '',
                demo: '',
                github: ''
            }
        },

        {
            image: '',
            title: 'b',
            shortDescription: '',
            detail: {
                description: '',
                technology: '',
                member: '',
                role: '',
                demo: '',
                github: ''
            }
        },

        {
            image: '',
            title: 'c',
            shortDescription: '',
            detail: {
                description: '',
                technology: '',
                member: '',
                role: '',
                demo: '',
                github: ''
            }
        },
    ]

    return (<>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>

        <div className="arlo_tm_section" id="services">
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>My Projects</h3>
                        <span>Check out my completed works!</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            {dataProject.map((item, index) => {
                                return (<>
                                    <li key={item.title}>
                                        <div className="inner">
                                            <div className="icon">
                                                <img className="svg" src={item.image} alt="" />
                                            </div>
                                            <div className="title_service">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p>{item.shortDescription}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <Button type="primary" onClick={showModal}>
                                        Details
                                    </Button>
                                </>)
                            })}





                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img className="svg" src="img/svg/new-tab.svg" alt="new-tab" />
                                    </div>
                                    <div className="title_service">
                                        <h3>Web Design</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img className="svg" src="img/svg/layers.svg" alt="layers" />
                                    </div>
                                    <div className="title_service">
                                        <h3>Branding</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img className="svg" src="img/svg/share.svg" alt="share" />
                                    </div>
                                    <div className="title_service">
                                        <h3>Social Media</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img className="svg" src="img/svg/adobe-illustrator.svg" alt="adobe-illustrator" />
                                    </div>
                                    <div className="title_service">
                                        <h3>Illustrator</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img className="svg" src="img/svg/seo-performance-marketing-graphic.svg" alt="seo-performance-marketing-graphic" />
                                    </div>
                                    <div className="title_service">
                                        <h3>Marketing</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Project

