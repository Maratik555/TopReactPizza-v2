import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaVk} from "react-icons/fa"

const Footer = () => {
  return (
      <footer style={{marginLeft: 120, paddingBottom: 40}}>
        <p style={{fontSize: 19, color: 'rgba(0, 0, 0, 0.8)'}}>Copyright &copy; 2022 Marat, Inc. All rights reserved.
        <span style={{marginLeft: 150}}><a href="https://github.com/Maratik555" target='_blank' rel="noreferrer"><AiFillGithub className='footer'/></a></span>
        <span><a href="https://vk.com/marat_99999" target='_blank' rel="noreferrer"><FaVk className='footer'/></a></span></p>
      </footer>
  )
}

export default Footer
