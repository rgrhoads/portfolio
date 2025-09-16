import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaLinkedin, FaGithub} from "react-icons/fa"

const Main = () => {
    return (
        <div id='main'>
            <div className='w-full h-screen'>
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Hello, I'm Ryan Rhoads.</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        <TypeAnimation
                            sequence={[
                                'Collaborator...',
                                2000,
                                'Engineer...',
                                2000,
                                'Coder...',
                                2000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{fontSize: '1em', paddingLeft: '6px'}}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 pb-40 max-w-[50px] w-full">
                        <a href="https://www.linkedin.com/in/ryangrantrhoads/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://github.com/rgrhoads" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main