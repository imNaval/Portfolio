import { motion } from 'framer-motion'
import React from 'react'
import { staggerChildren, fadeIn } from '../../utils/motion'
import css from './Project.module.scss'

const Project = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth flexCenter ${css.container}`}>

            <div className={`flexCenter ${css.heading}`}>
                <div>
                    <span className='primaryText'>My Latest Works</span>
                    <p className='secondaryText' style={{marginTop:"10px"}}>Perfect solution for digital experience</p>
                </div>

                {/* replace below code with projects details */}
                <div className={`flexCenter ${css.showCase}`}>
                <motion.img 
                    variant={fadeIn("up", "tween", 0.5, 0.6)}
                    src="./showCase1.png" alt="project"
                />
                <motion.img 
                    variant={fadeIn("up", "tween", 0.8, 0.6)}
                    src="./showCase2.png" alt="project"
                />
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Project