import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { footerVariants, staggerChildren } from '../../utils/motion';
import { BiPhoneCall } from 'react-icons/bi'
const d = new Date();
import css from './Footer.module.scss'

const Footer = () => {

    const [isNumberCopied, setNumberCopied] = useState(false);
    function numberCopied(){
        navigator.clipboard.writeText('+91 635 0431 551');
        // alert("mobile number copied");
        setNumberCopied(true);
        setTimeout(()=>{setNumberCopied(false)}, 1000)
    }
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
                    <a href='mailto:nehranvl2017@gmail.com'>Say hello </a>
                    to Naval
                </span>
            </div>

            <div className={css.right}>
                <div className={css.info}>
                    <span className='secondaryText'>Information</span>
                    <p>Bisarniyan(Barmer), Rajasthan</p>
                    <div className={css.phone} onClick={numberCopied} >
                        <BiPhoneCall size={"40px"} style={{backgroundColor : isNumberCopied ? "blue" : "white"}}/>
                        <span>+91 635 0431 551</span>
                    </div>
                    <p className={css.copyright}>Made by Navwe <br/> Copyright ©{d.getFullYear()}</p>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer