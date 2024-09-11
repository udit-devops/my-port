import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard=({index , title , icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index, 0.75)} className="w-full green-pink-gradient p-1px rounded-[20px] shadow-card">
            <div options={{
              max:45,
              speed:450,
              scale:1
            }} className="bg-tertiary,rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    As a versatile software developer with expertise in blockchain development and web development, I bring a strong foundation in cutting-edge technologies. With a deep understanding of decentralized applications,and front-end/back-end web development, and also some frameworks like React , Node.js I am committed to building innovative solutions that bridge the gap between traditional and emerging tech. My portfolio showcases my ability to craft robust, scalable, and secure applications, reflecting my passion for pushing the boundaries of what's possible in the digital world.
    </motion.p>

   <div className="mt-20 flex flex-wrap gap-10">
{services.map((services,index)=>(
  <ServiceCard key={services.title} index={index} {...services}/>
))}
   </div>





    </>
  )
}

export default SectionWrapper (About , "about")