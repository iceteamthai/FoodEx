import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Button from './../Components/Button';

const HomePage = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-3xl font-bold text-cyan-700 mb-6">หน้าหลัก</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
        </div>
      </section>
      {/* ส่วนเนื้อหาหลัก */}
      <section className="bg-white min-h-screen flex flex-col py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* กล่องข้อความด้านซ้าย */}
            <div className="md:w-1/2 w-full p-4">
              <h2 className="text-3xl font-bold text-cyan-600 mb-4">สูตรอารหารฟิวชั่นราคาพ่อบ้าน</h2>
              <p className="text-gray-700 leading-relaxed mb-4">"เพื่อความอร่อยเพิ่มรอยยิ้ม"</p>
              <Button />
            </div>
            {/* รูปภาพด้านขวา */}
            <div className="md:w-1/2 w-full p-4">
              <img
                src="/ครัว.jpg"
                alt="ครัว รังสรรค์"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;