import React, { useState } from 'react';
import { employes } from '../data/employesData';

const Employee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employes.filter((employee) => {
    // Filter employees based on the search term
    return (
      employee.EMPID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.DOB.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.Role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='text-white flex flex-col h-[100%] overflow-scroll'>
      <div className='grid grid-cols-1 gap-5 m-4'>
        <input
          type='text'
          placeholder='Search for an employee'
          className='bg-[#5E5E5E82] w-full h-[42px] rounded-3xl text-[#dbd4d4ea] focus:outline-none pl-6'
          onChange={handleSearchChange}
        />
      </div>
      {filteredEmployees.map((employee) => {
        return (
          <div className='bg-[#5E5E5E82] rounded-lg p-2 text-sm mx-4 my-4' key={employee.EMPID}>
            <div className='flex gap-4 p-1'>
              <span>EMP ID :</span>
              <span>{employee.EMPID}</span>
            </div>
            <div className='flex gap-4 p-1'>
              <span>Name :</span>
              <span>{employee.Name}</span>
            </div>
            <div className='flex gap-4 p-1'>
              <span>DOB :</span>
              <span className='text-orange-500'>{employee.DOB}</span>
            </div>
            <div className='flex gap-4 p-1'>
              <span>Role :</span>
              <span className='text-[#36A546]'>{employee.Role}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
