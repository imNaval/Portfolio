
import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'
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
        <motion.div 
            variants={footerVariants}
            className={`yPaddings innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <span className='primaryText'>Social Media</span>
                <p style={{marginTop: "2rem"}}>Connect me through social media</p>
                <p>Share your thought about frontend/ui design</p>
            </div>

            {/* carousal */}
            <div className={`yPaddings ${css.comments}`}>
                <Slider {...sliderSettings} className={css.slider}>
                    {
                        comments.map((comment, i)=>{
                            return(
                                <div className={`flexCenter ${css.comment}`}>
                                    <img src={comment.img} alt='socialIcon' />
                                    <p>{comment.comment}</p>

                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
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