import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <header className='bg-blue-700 shadow-md '>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to="/">
    <div className='flex flex-row items-center self-center gap-1'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className='text-gray-50' >Parking</span>
    <span className='text-red-400' >Guard</span>
    </h1>
    </div>
    </Link>
    {/*Search bar */}

   


    <ul className='flex gap-4 '>
    <Link to="/">
    <li className='hidden sm:inline text-gray-50 hover:bg-emerald-800' >Home</li>
    </Link>
    <Link to="/about">
    <li className='hidden sm:inline text-gray-50 hover:bg-emerald-800' >About</li>
    </Link>
    <Link to="/profile">
    
  </Link>
    
   
    
    </ul>
    </div>
    
    </header>
    <div className="min-h-screen bg-gray-100">
    {/* Hero Section */}
    <header className="bg-blue-600 py-20 text-center text-white">
      <h1 className="text-4xl font-bold">Automatic Number Plate Recognition (ANPR)</h1>
      <p className="mt-4 text-lg">Using YOLO and Tesseract to detect and recognize vehicle license plates with precision.</p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-200">
        Get Started
      </button>
    </header>

    {/* How It Works Section */}
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <p className="text-gray-700 max-w-3xl mx-auto">
        Our system leverages advanced machine learning techniques like YOLO for object detection and Tesseract for Optical Character Recognition (OCR) to detect and read number plates in real-time or from uploaded images.
      </p>
    </section>

    {/* Features Section */}
    <section className="bg-white py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8 justify-center">
        <div className="max-w-sm p-6 bg-gray-50 rounded-lg shadow">
          <h3 className="text-xl font-bold">YOLO for Detection</h3>
          <p className="mt-2 text-gray-600">
            YOLO (You Only Look Once) is used to detect the presence and position of number plates in the image or video frames.
          </p>
        </div>
        <div className="max-w-sm p-6 bg-gray-50 rounded-lg shadow">
          <h3 className="text-xl font-bold">Tesseract for OCR</h3>
          <p className="mt-2 text-gray-600">
            Tesseract extracts the textual data from the detected number plates, converting it into readable characters.
          </p>
        </div>
        <div className="max-w-sm p-6 bg-gray-50 rounded-lg shadow">
          <h3 className="text-xl font-bold">Real-time Processing</h3>
          <p className="mt-2 text-gray-600">
            With real-time processing capabilities, the system can process video feeds to recognize number plates on the go.
          </p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-blue-600 py-6 text-center text-white">
      <p>&copy; 2024 Number Plate Recognition Project | All Rights Reserved</p>
    </footer>
  </div>
    </>
  )
}
