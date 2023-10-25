import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Stacked, Sparkline, Pie, Button } from '../components';
import { useStateContext } from '../context/ContextProvider';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 ">
          <div className="flex justify-betweeen items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">₹63,448,88</p>
            </div>
          </div >
          
          <div className='mt-6'>
            <Button
              color='white'
              bgColor="blue"
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        {/* Earning data */}
        <div className='flex m-5 flex-wrap justify-bewteen gap-1 items-center'>
        {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue Updates */}
    </div>
  )
}

export default Ecommerce