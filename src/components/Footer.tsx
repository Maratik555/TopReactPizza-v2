import React from 'react'
import { SiApplepay } from "react-icons/si";
import { SiBitcoin } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";

import appStore from "../assets/img/app.png"
import google from "../assets/img/google.png"

const Footer = () => {
  return (
      <footer>
          <div className='footer'>
              <SiApplepay size={40} style={{cursor: 'pointer'}}/>
              <SiBitcoin size={40} style={{cursor: 'pointer'}}/>
              <SiWebmoney size={40} style={{cursor: 'pointer'}}/>
              <img width={70} src={google} alt="google" style={{cursor: 'pointer'}}/>
              <img width={70} src={appStore} alt="app Store" style={{cursor: 'pointer'}}/>
          </div>
          <p className='footer_p'>Copyright &copy; 2023 Marat, Inc. All rights reserved.</p>
      </footer>
  )
};

export default Footer
