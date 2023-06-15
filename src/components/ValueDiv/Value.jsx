import React from 'react'
import logo from '../../assets/logo.jpg';

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid grid-cols-3 gap-[10rem] items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo} alt="" className='' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>

          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do.</p>
        </div>
        
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo} alt="" className='' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>

          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do.</p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo} alt="" className='' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>

          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do.</p>
        </div>
      </div>
    </div>
  )
}

export default Value