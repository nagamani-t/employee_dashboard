import React from 'react'
import { progress } from '../data/progressBar'
import ProgressBar from './progressBar'
import GaugeBar from './progressBar'

const ProgressBoard = () => {

    return (
        <div className='text-white overflow-auto bg-[#1A2C2C99] rounded-2xl m-4  shadow-md shadow-[#00000040]'>
            <div className='h-[45px] bg-[#5E5E5E82] rounded-full  shadow-sm capitalize flex justify-center items-center text-sm'>
                employee productivity dashboard
            </div>
            <div className='overflow-auto '>  {progress.map((emp) => {
                return (<div className='pb-2'>
                    <div className=' flex justify-between text-white text-sm p-3'>
                       productivity on  {emp.day}
                   <p className='text-[#36A546]'>{emp.percentage}%</p> </div>
                   <div className='px-3'> <GaugeBar value={emp.percentage} maxValue={100} width={300} height={10} /></div>
                   </div>)

            })}</div>
        </div>
    )
}

export default ProgressBoard