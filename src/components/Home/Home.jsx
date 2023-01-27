import React from 'react'
import css from './Home.module.scss'
import {motion} from 'framer-motion'
import {staggerContainer, fadeIn, slideIn} from '../../utils/motion'

const Home = () => {
  return (
    <section className={`padding ${css.wrapper}`}>
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{once: false, amount: 0.25}}
        className={`innerWidth ${css.container}`}>

            <a className='anchor' id='Home'></a>

            <div className={css.upperElement}>
                <motion.span className='primaryText'
                variants={fadeIn("right", "tween", 0.2, 1)}>
                    Hey There, <br /> I'm Naval
                </motion.span>

                <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className={css.college}>
                    <img src="./college.png" alt="collegeImage" />
                    <span>M N N I T '22</span>
                    <span>Electronic and Communication Engineering</span>
                </motion.div>
            </div>

            {/* my image */}
            <motion.div className={css.person} variants={fadeIn("up", "tween", 0.3, 1)}>
                <motion.img src='./person.png' alt='myImage' variants={slideIn("up", "tween", 0.5, 1.2)}/>
            </motion.div>

            <div className={css.lowerElement}>
                <motion.span className='secondaryText'
                    variants={fadeIn("left", "tween", 0.4, 1)}>
                    Frontend Developer
                    <br /> I love to design beautiful ui
                </motion.span>

                <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
                    <div className='primaryText'>
                        6
                    </div>
                    <div className='secondaryText'>
                        <div>Months</div>
                        <div>Experience</div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    </section>
  )
}

export default Home