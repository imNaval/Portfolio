import React from 'react'
import css from './Experience.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../utils/motion'
import { workExp } from '../../utils/data'

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <span className='primaryText yPadding'>My Work Experience</span>

            <div className={`flexCenter ${css.experience}`}>
              {
                workExp.map((exp, i)=>{
                  return(
                    <motion.div
                      variants={textVariant2}
                      className={`flexCenter ${css.exp}`} key={i}>
                      <div className={css.post}>
                        <h1>{exp.place}</h1>
                        <p>{exp.tenure}</p>
                      </div>
                      <div className={css.role}>
                        <h1>{exp.role}</h1>
                        <p>{exp.detail}</p>
                      </div>
                    </motion.div>
                  )
                })
              }

              <motion.div variants={zoomIn(1,1)} className={css.progressbar}>
                <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                <div><div className={css.circle} style={{background:"#286f6c"}}></div></div>
                <div><div className={css.circle} style={{background:"#f2704e"}}></div></div>
                <div><div className={css.circle} style={{background:"#eec04d"}}></div></div>
              </motion.div>

            </div>
        </div>
    </motion.section>
  )
}

export default Experience