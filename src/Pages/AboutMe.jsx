import React from 'react'
import Footer from './../Components/Footer';

const AboutMe = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold text-yellow-800 mb-6">ติดต่อ</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />

          <div className="text-lg text-gray-700 space-y-3">
            <p className="font-semibold text-xl text-yellow-800">แม่บ้านมีสูตร</p>
            <p>Address: 147/88 หนองปูด</p>
            <p>Tel: 014911199</p>
            <p>E-mail: Elit@hotmail.com</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default AboutMe