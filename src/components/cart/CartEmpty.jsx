import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import emptybag from '../../assets/emptybag.png';

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen p-11 text-center gap-7">
        <img
          src={emptybag}
          alt="emptybag/img"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-200 hover:scale-110 "
        />

        <button
          type="button"
          onClick={onCartToggle}
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 
          flex items-center justify-center text-slate-900 py-2 gap-2 text-sm px-3 font-semibold active:scale-110"
        >
          <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
          <span className="">Back To Store </span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
