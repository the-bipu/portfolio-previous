'use client'
import React, { useState } from 'react'

import { motion } from 'framer-motion';
import { client } from '../app/client';

export default function Contact() {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const { name , email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: 'email',
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <div id='contact' className='w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>
        
        <motion.div
          className='color-[#fff] text-[30px] text-[#000] pt-8 pb-2 text-center'
        >
            Contact <span className='text-[#0009D5]'> Me</span>
        </motion.div>

        <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-8 gap-0'>
          <div className='app__footer-card'>
            <img src="./email.png" alt="email" />
            <a href="mailto:hello@gmail.com" className='p-text'>
              Hello@gmail.com
            </a>
          </div>

          <div className='app__footer-card'>
            <img src="./mobile.png" alt="mobile" />
            <a href="tel: +1 (123) 456-789" className='p-text'>
            +1 (123) 456-789
            </a>
          </div>
        </div>

        {!isFormSubmitted ? 
          <div className='w-[60%] flex flex-col items-center justify-center mx-[1rem] my-[2rem]'>

            <div className='flex items-center justify-center form--div'>
              <input type="text" className='p-text textarea-style' name='name' placeholder='Your Name' value={name} onChange={handleChangeInput} />
            </div>

            <div className='flex items-center justify-center form--div'>
              <input type="text" className='p-text textarea-style' name='email' placeholder='Your Email' value={email} onChange={handleChangeInput} />
            </div>

            <div className='form--div'>
              <textarea 
                className='h-[170px] p-text textarea-style'
                placeholder='Your Message'
                value={message}
                name="message"
                onChange={handleChangeInput}
              ></textarea>
            </div>

            <button
              type='button'
              className='p-text submit--button hover:bg-[#2430af]'
              onClick={handleSubmit}
            >{loading ? 'Sending' : 'Send Message'}</button>
          </div>
        : 
          <div>
            <h3 className='head-text'>
              Thank you for getting in touch! 
            </h3>
          </div>
        }
    </div>
  )
}
