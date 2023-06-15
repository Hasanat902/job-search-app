import React from "react";
import { BiTimeFive } from 'react-icons/bi';

import logo1 from '../../assets/logo-1.jpg';

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 2,
    image: logo1,
    title: 'UI Designer',
    time: '17H',
    location: 'Poland',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 3,
    image: logo1,
    title: 'Software Eng.',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 4,
    image: logo1,
    title: 'ui/ux Designer',
    time: '7H',
    location: 'USA',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 5,
    image: logo1,
    title: 'Product Designer',
    time: '10H',
    location: 'Hungry',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 6,
    image: logo1,
    title: 'Researcher',
    time: '4H',
    location: 'UK',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 7,
    image: logo1,
    title: 'Lead Developer',
    time: 'Now',
    location: 'UAE',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  },
  {
    id: 8,
    image: logo1,
    title: 'Data Scientist',
    time: '14H',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.',
    company: 'BMW company ltd.'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex items-center justify-center gap-10 flex-wrap py-10">

        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>

                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />{time}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>

                <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>

                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company Logo" className="w-[10%]"  />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                </div>

                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                  Apply Now
                </button>

              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Jobs;
