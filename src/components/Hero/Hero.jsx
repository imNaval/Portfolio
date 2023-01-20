import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import {staggerContainer, fadeIn, slideIn} from '../../utils/motion'

const Hero = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{once: false, amount: 0.25}}
        className={`innerWidth ${css.container}`}>

            <div className={css.upperElement}>
                <motion.span className='primaryText'
                variants={fadeIn("right", "tween", 0.2, 1)}>
                    Hey There, <br /> I'm Naval
                </motion.span>
                <motion.span className='secondaryText'
                variants={fadeIn("left", "tween", 0.4, 1)}>
                    I design beautiful simple
                    <br /> things, And I love what i do
                </motion.span>
            </div>

{/* my image */}
            <motion.div className={css.person} variants={fadeIn("up", "tween", 0.3, 1)}>
                <motion.img src='./person.png' alt='myImage' variants={slideIn("up", "tween", 0.5, 1.2)}/>
            </motion.div>

{/* my email */}
            <a className={css.email} href='mailto:nehranvl2017@gmail.com'>
                nehranvl2017@gmail.com
            </a>

            <div className={css.lowerElement}>
                <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
                    <div className='primaryText'>
                        10
                    </div>
                    <div className='secondaryText'>
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className={css.certificate}>
                    <img src="./certificate.png" alt="certificateImage" />
                    <span>CERTIFICATE PROFESSIONAL</span>
                    <span>FRONTEND DEVELOPER</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero