import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { Stacked, SparkLine, Pie } from '../components';
import { Button } from '../components';
import { useStateContext } from '../context/ContextProvider';
import { earningData,SparklineAreaData, ecomPieChartData } from '../data/dummy';

const   Ecommerce = () => {
  const{ currentColor}=useStateContext();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap flex-col  justify-center ">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-56 rounded-xl w-full lg:w-100 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
          <div className="flex justify-betweeen items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">₹63,448,88</p>
            </div>
          </div >
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        {/* Earning data */}
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
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
      <div className='flex flex-wrap gap-10 justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Update</p>
            <div className='flex items-center gap-4'>
              <p className='text-gray-600 flex items-center gap-2 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className='text-green-400 flex items-center gap-2 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/* Charts of Revenue Section */}
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p className="text-3xl font-semibold">$48,487</p>

                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine currentColor id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor}}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Ecommerce