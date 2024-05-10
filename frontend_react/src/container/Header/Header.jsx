import React from 'react';
import './Header.scss';

import {AppWrap} from '../../wrapper'
import {easeInOut, motion} from 'framer-motion';
import { images,resume } from '../../constants';
import { HiDocumentDownload } from "react-icons/hi";


const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition : {
      duration:1,
      ease: easeInOut
    }
  }
}

const handleDownload =()=>{
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'vikram_resume.pdf';
  link.click();
}
const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <motion.div 
        whileInView={{x:[-100, 0], opacity:[0,1]}}
        transition={{duration:5}}
        className='app__header-info'>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Vikram</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack Engineer</p>
            <p className='p-text'>Entrepreneur</p>
            <p className='p-text'>Fitness Enthusiast</p>
          </div>
          <div className='resume-cmp app__flex' onClick={handleDownload}>
            <HiDocumentDownload />
            <h3>My Resume</h3>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5, delayChildren: 0.5}}
        className='app__header-img'>
          <img src={images.profile} alt='profile_bg'/>
          <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:1, ease: easeInOut}}
          src={images.circle}
          alt='profile-circle'
          className = 'overlay_circle'/>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className = 'app__header-circles'
        >
        {[images.python, images.react, images.node].map((circle, index)=>
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt='circle'/>
        </div>
        )}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
