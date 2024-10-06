import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div style={{backgroundImage:'../assets/logo-color.png'}}>
    <div className='py-20 px-4 mx-auto max-w-6xl'>
    <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Security Surveillance System</h1>
    <p className='mb-4 text-slate-700'>Overview
    Parking systems in large institutions like universities face challenges in efficiently managing vehicle entry, ensuring security, and providing real-time data on parking availability
    Objective
    To build an automated and secure parking system using YOLO for vehicles and number plate detection and OCR for text recognition
    Technologies
    YOLO for real-time object detection, OpenCV for image processing, Tesseract OCR for number plate recognition, Raspberry Pi/Arduino for hardware control, and AWS IoT/Firebase for cloud integration
    
    </p>
    <span className='flex gap-3'>
    <p className='mb-4 text-slate-800 '>
    For more information contact </p>
    <Link to={`mailto:&{mitwpu@gmail.com}`}
    className='bg-slate-700 text-bold text-white text-center p-2 uppercase rounded-lg hover:opacity-95'>
    Send Message
    </Link>
    </span>

    <p>
    In order to use this application you first need to <span className='font-bold'>sign-in using sign-in </span>method and then you can contect owner and can buy also using Razorpay.The Razorpay will work in Desktop only, for now maybe in further updates it will be compatible with mobile also.
    </p>
    </div>
    </div>
  )
}
