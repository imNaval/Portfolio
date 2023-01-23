import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

const Header = () => {

  const [menuOpened , setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef()

  useOutsideAlerter({
    menuRef,
    setMenuOpened
  })

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`}
      style={{boxShadow:headerShadow}}
      >

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Navala Ram
        </div>
        <ul ref={menuRef}
          style={getMenuStyles(menuOpened)} className={`flexCenter ${css.menu}`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Project">Projects</a></li>
          <li><a href="#Social">Socials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91 635 0431 551</p>
            <BiPhoneCall size={"40px"}/>
          </li>
        </ul>
        <div className={css.menuIcon}
          onClick= {()=>setMenuOpened((prev)=> !prev)}
          >
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </motion.div>
  )
}

export default Header