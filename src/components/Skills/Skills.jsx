import React from 'react'
import {motion} from 'framer-motion'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './skills.module.scss'
import { staggerContainer, fadeIn, textVariant } from '../../utils/motion'

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{once: false, amount: 0.25}}
     className={css.wrapper}>
      <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.leftSide}>

          {
            projectExperience.map((exp, i)=>{
              return(
                <motion.div variants={fadeIn("right", "tween", (i+1)*0.25, 1)} className={css.exp} key={i}>
                  <div className='flexCenter' style={{background: exp.bg}}>
                    <exp.icon size={25} color='white'/>
                  </div>
                  <div>
                    <span>{exp.name}</span>
                    <span className='secondaryText'>{exp.projects} Projects</span>
                  </div>
                </motion.div>
              )
            })
          }

        </div>

        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
            <span className='primaryText'>What do I help?</span>

            {
              WhatDoIHelp.map((paragraph, i)=>{
                return (
                  <span className='secondaryText' key={i}>{paragraph}</span>
                )
              })
            }

            <div className={`flexCenter ${css.stats}`}>
              <div className='flexCenter'>
                <span className='primaryText'>285+</span>
                <span className='secondaryText'>project Completed</span>
              </div>
              <div className='flexCenter'>
                <span className='primaryText'>190+</span>
                <span className='secondaryText'>Happy Clients</span>
              </div>
            </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills