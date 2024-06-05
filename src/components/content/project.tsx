import { Button, Modal } from 'antd';
import { useState } from 'react';
import { GrTasks } from "react-icons/gr"; // Ruby on Rails
{/* <GrTasks /> */ }
import { SiReactivex } from "react-icons/si"; // React Hook
{/* <SiReactivex /> */ }
import { MdOutlineSecurity } from "react-icons/md"; // Secure Coding
{/* <MdOutlineSecurity /> */ }
import { BsRobot } from "react-icons/bs"; // Arduino
{/* <BsRobot /> */ }
import { SiNestjs } from "react-icons/si"; // NestJS
{/* <SiNestjs /> */ }
import { IoInformationCircle } from "react-icons/io5";
{/* <IoInformationCircle /> */ }
import blueImg from '@/assets/img/about/blue.png';

interface IProject {
    background_image: string;
    image: JSX.Element,
    title: string,
    shortDescription: string,
    detail: {
        description: string,
        technology: string,
        member: string,
        role: string,
        demo: string,
        github: string
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isContent, setIsContent] = useState<IProject | null>();

    const showModal = (item: IProject | null) => {
        setIsContent(item);
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
            image: <GrTasks size='50' color='#006747' />,
            background_image: blueImg,
            title: 'S.T.A.P.',
            shortDescription: 'Smart Task Automation App to visualize your task calendar and automatically suggest consistent tasks to free days.',
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
            image: <SiReactivex size='50' color='#3b5998' />,
            background_image: '',
            title: 'D.A.M.',
            shortDescription: 'Help project leaders Decentralize Access and Manage members, groups, member roles, group roles and customers',
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
            image: <MdOutlineSecurity size='50' color='Ff6700' />,
            background_image: '',
            title: 'Secure Coding',
            shortDescription: 'Different algorithm-based protocols that target multiple cryptographic methods for better secured online communication',
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
            image: <BsRobot size='50' color='#C45508' />,
            background_image: '',
            title: 'Smart Wall-E',
            shortDescription: 'A very sensitive colored-line-following robot that functions even in however rough terrain. Faint color is guaranteed.',
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
            image: <SiNestjs size='50' color='#ea285b' />,
            background_image: '',
            title: 'NestJS',
            shortDescription: 'NestJS',
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
        <div className="arlo_tm_section" id="projects">
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
                                    <li style={{ backgroundImage: '{item.background_image}' }}>
                                        <div className="inner">
                                            <div className="icon">
                                                {item.image}
                                            </div>
                                            {/* <img className='project_bg' src={item.background_image} alt='bg' width='100' height='auto'></img> */}
                                            <div className="title_service">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p>{item.shortDescription}</p>
                                            </div>
                                            <div className='view_detail' style={{ padding: '5px 0' }}>
                                                <span style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-end' }}>
                                                    <span onClick={(event) => { showModal(item) }}><IoInformationCircle />&nbsp;<i>Details?</i></span>
                                                </span>
                                            </div>
                                        </div>
                                    </li >
                                    {/* {isContent? }                                     */}
                                </>)
                            })}
                            {isContent &&
                                <Modal title={isContent ? isContent.title : null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <li>Decription: {isContent.detail.description}</li>
                                    <li>Technology: {isContent.detail.technology}</li>
                                    <li>Description: {isContent.detail.description}</li>
                                    <li>Technology: {isContent.detail.technology}</li>
                                    <li>Member: {isContent.detail.member}</li>
                                    <li>Role: {isContent.detail.role}</li>
                                    <li>Demo: {isContent.detail.demo}</li>
                                    <li>GitHub: {isContent.detail.github}</li>
                                </Modal>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    </>)
}

export default Project

