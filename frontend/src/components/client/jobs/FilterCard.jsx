import React from 'react'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'
import { Label } from '../../ui/label'

export default function FilterCard() {
  const filterData = [
    {
      filterType: ['Location'],
      array: ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar']
    },
    {
      filterType: ['Industry'],
      array: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer']
    },
    {
      filterType: ['Salary'],
      array: ['0-40k', '41k-100k', '100k-500k']
    },
  ]
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='text-xl font-bold'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div key={index}>
              <h2 className='font-bold text-lg'>{data.filterType}</h2>
              {

                data.array.map((item, index) => (
                  <div key={index} className='flex space-x-2 my-2'>
                    <RadioGroupItem value={item} />
                    <Label htmlFor={item}>{item}</Label>
                  </div>
                ))
              }

            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}
