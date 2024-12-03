import React from 'react'
import AboutImg from '../../assets/aboutImg.png'
import { IoArrowForward } from 'react-icons/io5'
const About = () => {
  return (
    <div
      id='About'
      className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'
    >
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-80' src={AboutImg} alt='About img' />

          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                  Java Full Stack developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                  I am trained with technologies like java with oops, Exception handling, collections, Java 8, and Frameworks like Hibernate, Spring, SpringBoot where i can build java based enterprise Applications with my skills.
                </p>
              </span>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                  Front End developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                I learnt technologies like Html, Css, JavaScript and libraries like ReactJs and Bootstrap where i can build interactve web applications with my skills.
                </p>
              </span>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                  Database developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                  As a fullstack developer i gained knowledge in OracleSQL to connect to the database and through java i can connect database with Jbbc and hibernate.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
