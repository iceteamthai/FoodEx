import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <>
      <Link
        to="/Products"
        className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-blue-950 transition duration-350"
      >
        รายการอาหาร
      </Link>
    </>
  );
};

export default Button;