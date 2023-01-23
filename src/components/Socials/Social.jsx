
import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { socials, sliderSettings } from '../../utils/data'
import { footerVariants, staggerChildren } from '../../utils/motion'
import css from './Social.module.scss'

const Social = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`}>

        <a className='anchor' id='Social'></a>

        <motion.div 
            variants={footerVariants}
            className={`yPaddings innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <span className='primaryText'>Social Media</span>
                <p style={{marginTop: "2rem"}}>Connect me through social media</p>
                <p>Share your thought about frontend / ui design</p>
            </div>

            {/* carousal */}
            <div className={`yPaddings ${css.comments}`}>
                <Slider {...sliderSettings} className={css.slider}>
                    {
                        socials.map((social, i)=>{
                            return(
                                <div className={`flexCenter ${css.comment}`}>
                                    <div className={`flexCenter ${css.icons}`} style={{background: social.bg}}>
                                        <social.icon size={35} color='white'/>
                                    </div>
                                    <p>connect with Naval on <a href={social.link}>{social.name}</a></p>

                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{social.comment}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Social