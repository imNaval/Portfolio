import React from 'react'
import css from './Project.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../utils/motion'
import { projects } from '../../utils/data'

const Project = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`}>
        <a className='anchor' id='Project'></a>

        <div className={`flexCenter innerWidth ${css.container}`}>
            <span className='primaryText yPadding'>Personal Projects</span>

            <div className={`flexCenter ${css.experience}`}>
              {
                projects.map((project, i)=>{
                  return(
                    <motion.div
                      variants={textVariant2}
                      className={`flexCenter ${css.exp}`} key={i}>
                      <div className={css.post}>
                        <h1>{project.title}</h1>
                        <a href={project.link}>visit</a>
                      </div>
                      <div className={css.role}>
                        <h3>Description</h3>
                        <ul>
                        {
                          project.detail.map(det =>{
                            return <li style={{listStyle: "none"}}>{det}</li>
                          })
                        }
                        </ul>

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
                {/* <div><div className={css.circle} style={{background:"#286f6c"}}></div></div>
                <div><div className={css.circle} style={{background:"#f2704e"}}></div></div>
                <div><div className={css.circle} style={{background:"#eec04d"}}></div></div> */}
              </motion.div>

            </div>
        </div>
    </motion.section>
  )
}

export default Project