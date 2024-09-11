import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn ,textVariant } from '../utils/motion'

const ProjectCard = ({index , name ,description , tags , source_code_link,image})=>{
return(
  <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
<Tilt
option={{
  max:45,
  scale:1,
  speed:450
}}
className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
>
<div className="relative w-full h-[220px]">
  <img src={image} alt={name} 
   className="w-full h-full rounded-2xl object-cover"
  />
</div>
<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
 <div onClick={()=>window.open (source_code_link,"_blank")}
  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  >
 <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
 </div>
</div>
<div className="mt-5">
 <h3 className="text-white font-bold text-[24px]">{name}</h3>
 <p className="mt-2 text-secondary text-[14px]">{description}</p>
</div>

<div className="mt-4 flex flex-wrap gap-2">

 
 {tags.map((tag)=>(
  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
   #{tag.name}
  </p>

 ))}

</div>
</Tilt>
  </motion.div>
)
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Works</p>
    <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>

    <div className="w-full flex">
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
   "As a passionate software and blockchain developer, I specialize in creating robust web applications and decentralized solutions. With expertise in React, JavaScript, and blockchain technologies, I have developed several innovative projects, including mention a key project or two. My focus is on delivering efficient, scalable, and user-centric applications, utilizing my skills in both frontend and backend development. Currently, I am expanding my knowledge in video editing and actively working on enhancing my skill set to create impactful digital solutions."
    </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
     {projects.map((project,index)=>(
 <ProjectCard key={`project-${index}`}
 index={index}
 {...project}
 />
     ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"");