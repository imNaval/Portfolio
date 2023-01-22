import { motion } from 'framer-motion';
import React from 'react'
import { footerVariants, staggerChildren } from '../../utils/motion';
const d = new Date();
import css from './Footer.module.scss'

const Footer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{once: false, amount: 0.25}}
     className={`paddings ${css.wrapper}`}>
        <motion.div variants={footerVariants} className={`innerWidth yPaddings flexCenter ${css.container}`}>

            <div className={`primaryText ${css.left}`}>
                <span>Let's make something <br /> amazing together</span>
                <span>
                    Start by <a href='mailto:nehranvl2017@gmail.com'>Saying hi
                    </a>
                </span>
            </div>

            <div className={css.right}>
                <div className={css.info}>
                    <span className='secondaryText'>Information</span>
                    <p>Bisarniyan(Barmer), Rajasthan</p>
                    <p className={css.copyright}>Made by Navwe <br/> Copyright ©{d.getFullYear()}</p>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer