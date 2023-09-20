"use client"
import React from 'react';
import Countdown from 'react-countdown';

const endingdate=new Date("2023-10-25")

const CountDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={endingdate}/>
  )
}

export default CountDown