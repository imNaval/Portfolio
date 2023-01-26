import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiDownload} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

const Header = () => {

  function downloadResume(){
    fetch('./Naval-Resume.pdf').then(res =>{
      res.blob().then(blob => {
        const file = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = file;
        alink.download = './Naval-Resume.pdf';
        alink.click();
      })
    })
  }

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
          <li className={`flexCenter ${css.resume}`}>
            <a onClick = {downloadResume}
              className='flexCenter'>
              <p>Resume</p>
              <BiDownload size={"40px"}/></a>
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