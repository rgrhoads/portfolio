import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaLinkedin, FaGithub} from "react-icons/fa"

const Main = () => {
    return (
        <div id='main'>
            <img 
                className='w-full h-screen object-cover object-left scale-x-[-1]'
                src='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
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
                        <a href="https://www.linkedin.com/in/ryangrantrhoads/">
                            <FaLinkedin className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://github.com/rgrhoads">
                            <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main